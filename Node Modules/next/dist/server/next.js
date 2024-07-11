"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NextServer: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NextServer: function() {
        return NextServer;
    },
    // exports = module.exports
    // Support `import next from 'next'`
    default: function() {
        return _default;
    }
});
require("./require-hook");
require("./node-polyfill-fetch");
require("./node-polyfill-crypto");
const _log = /*#__PURE__*/ _interop_require_wildcard(require("../build/output/log"));
const _config = /*#__PURE__*/ _interop_require_default(require("./config"));
const _path = /*#__PURE__*/ _interop_require_wildcard(require("path"));
const _constants = require("../lib/constants");
const _constants1 = require("../shared/lib/constants");
const _tracer = require("./lib/trace/tracer");
const _constants2 = require("./lib/trace/constants");
const _formaturl = require("../shared/lib/router/utils/format-url");
const _isnodedebugging = require("./lib/is-node-debugging");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
let ServerImpl;
const getServerImpl = async ()=>{
    if (ServerImpl === undefined) {
        ServerImpl = (await Promise.resolve(require("./next-server"))).default;
    }
    return ServerImpl;
};
const SYMBOL_LOAD_CONFIG = Symbol("next.load_config");
class NextServer {
    constructor(options){
        this.options = options;
    }
    get hostname() {
        return this.options.hostname;
    }
    get port() {
        return this.options.port;
    }
    getRequestHandler() {
        return async (req, res, parsedUrl)=>{
            return (0, _tracer.getTracer)().trace(_constants2.NextServerSpan.getRequestHandler, async ()=>{
                const requestHandler = await this.getServerRequestHandler();
                return requestHandler(req, res, parsedUrl);
            });
        };
    }
    getUpgradeHandler() {
        return async (req, socket, head)=>{
            const server = await this.getServer();
            // @ts-expect-error we mark this as protected so it
            // causes an error here
            return server.handleUpgrade.apply(server, [
                req,
                socket,
                head
            ]);
        };
    }
    setAssetPrefix(assetPrefix) {
        if (this.server) {
            this.server.setAssetPrefix(assetPrefix);
        } else {
            this.preparedAssetPrefix = assetPrefix;
        }
    }
    logError(...args) {
        if (this.server) {
            this.server.logError(...args);
        }
    }
    async render(...args) {
        const server = await this.getServer();
        return server.render(...args);
    }
    async renderToHTML(...args) {
        const server = await this.getServer();
        return server.renderToHTML(...args);
    }
    async renderError(...args) {
        const server = await this.getServer();
        return server.renderError(...args);
    }
    async renderErrorToHTML(...args) {
        const server = await this.getServer();
        return server.renderErrorToHTML(...args);
    }
    async render404(...args) {
        const server = await this.getServer();
        return server.render404(...args);
    }
    async prepare(serverFields) {
        if (this.standaloneMode) return;
        const server = await this.getServer();
        if (serverFields) {
            Object.assign(server, serverFields);
        }
        // We shouldn't prepare the server in production,
        // because this code won't be executed when deployed
        if (this.options.dev) {
            await server.prepare();
        }
    }
    async close() {
        const server = await this.getServer();
        return server.close();
    }
    async createServer(options) {
        let ServerImplementation;
        if (options.dev) {
            ServerImplementation = require("./dev/next-dev-server").default;
        } else {
            ServerImplementation = await getServerImpl();
        }
        const server = new ServerImplementation(options);
        return server;
    }
    async [SYMBOL_LOAD_CONFIG]() {
        const dir = (0, _path.resolve)(this.options.dir || ".");
        const config = this.options.preloadedConfig || await (0, _config.default)(this.options.dev ? _constants1.PHASE_DEVELOPMENT_SERVER : _constants1.PHASE_PRODUCTION_SERVER, dir, {
            customConfig: this.options.conf,
            silent: true
        });
        // check serialized build config when available
        if (process.env.NODE_ENV === "production") {
            try {
                const serializedConfig = require(_path.default.join(dir, ".next", _constants1.SERVER_FILES_MANIFEST)).config;
                // @ts-expect-error internal field
                config.experimental.isExperimentalCompile = serializedConfig.experimental.isExperimentalCompile;
            } catch (_) {
            // if distDir is customized we don't know until we
            // load the config so fallback to loading the config
            // from next.config.js
            }
        }
        return config;
    }
    async getServer() {
        if (!this.serverPromise) {
            this.serverPromise = this[SYMBOL_LOAD_CONFIG]().then(async (conf)=>{
                if (this.standaloneMode) {
                    process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(conf);
                }
                if (!this.options.dev) {
                    if (conf.output === "standalone") {
                        if (!process.env.__NEXT_PRIVATE_STANDALONE_CONFIG) {
                            _log.warn(`"next start" does not work with "output: standalone" configuration. Use "node .next/standalone/server.js" instead.`);
                        }
                    } else if (conf.output === "export") {
                        throw new Error(`"next start" does not work with "output: export" configuration. Use "npx serve@latest out" instead.`);
                    }
                }
                this.server = await this.createServer({
                    ...this.options,
                    conf
                });
                if (this.preparedAssetPrefix) {
                    this.server.setAssetPrefix(this.preparedAssetPrefix);
                }
                return this.server;
            });
        }
        return this.serverPromise;
    }
    async getServerRequestHandler() {
        if (this.reqHandler) return this.reqHandler;
        // Memoize request handler creation
        if (!this.reqHandlerPromise) {
            this.reqHandlerPromise = this.getServer().then((server)=>{
                this.reqHandler = (0, _tracer.getTracer)().wrap(_constants2.NextServerSpan.getServerRequestHandler, server.getRequestHandler().bind(server));
                delete this.reqHandlerPromise;
                return this.reqHandler;
            });
        }
        return this.reqHandlerPromise;
    }
}
class NextCustomServer extends NextServer {
    async prepare() {
        const { getRequestHandlers } = require("./lib/start-server");
        const isNodeDebugging = (0, _isnodedebugging.checkIsNodeDebugging)();
        const initResult = await getRequestHandlers({
            dir: this.options.dir,
            port: this.options.port || 3000,
            isDev: !!this.options.dev,
            hostname: this.options.hostname || "localhost",
            minimalMode: this.options.minimalMode,
            isNodeDebugging: !!isNodeDebugging
        });
        this.requestHandler = initResult[0];
        this.upgradeHandler = initResult[1];
    }
    setupWebSocketHandler(customServer, _req) {
        if (!this.didWebSocketSetup) {
            var _this;
            this.didWebSocketSetup = true;
            customServer = customServer || ((_this = _req == null ? void 0 : _req.socket) == null ? void 0 : _this.server);
            if (customServer) {
                customServer.on("upgrade", async (req, socket, head)=>{
                    this.upgradeHandler(req, socket, head);
                });
            }
        }
    }
    getRequestHandler() {
        return async (req, res, parsedUrl)=>{
            this.setupWebSocketHandler(this.options.httpServer, req);
            if (parsedUrl) {
                req.url = (0, _formaturl.formatUrl)(parsedUrl);
            }
            return this.requestHandler(req, res);
        };
    }
    async render(...args) {
        let [req, res, pathname, query, parsedUrl] = args;
        this.setupWebSocketHandler(this.options.httpServer, req);
        if (!pathname.startsWith("/")) {
            console.error(`Cannot render page with path "${pathname}"`);
            pathname = `/${pathname}`;
        }
        pathname = pathname === "/index" ? "/" : pathname;
        req.url = (0, _formaturl.formatUrl)({
            ...parsedUrl,
            pathname,
            query
        });
        await this.requestHandler(req, res);
        return;
    }
    constructor(...args){
        super(...args);
        this.standaloneMode = true;
        this.didWebSocketSetup = false;
    }
}
// This file is used for when users run `require('next')`
function createServer(options) {
    // The package is used as a TypeScript plugin.
    if (options && "typescript" in options && "version" in options.typescript) {
        return require("./next-typescript").createTSPlugin(options);
    }
    if (options == null) {
        throw new Error("The server has not been instantiated properly. https://nextjs.org/docs/messages/invalid-server-options");
    }
    if (!("isNextDevCommand" in options) && process.env.NODE_ENV && ![
        "production",
        "development",
        "test"
    ].includes(process.env.NODE_ENV)) {
        _log.warn(_constants.NON_STANDARD_NODE_ENV);
    }
    if (options.dev && typeof options.dev !== "boolean") {
        console.warn("Warning: 'dev' is not a boolean which could introduce unexpected behavior. https://nextjs.org/docs/messages/invalid-server-options");
    }
    // When the caller is a custom server (using next()).
    if (options.customServer !== false) {
        const dir = (0, _path.resolve)(options.dir || ".");
        return new NextCustomServer({
            ...options,
            dir
        });
    }
    // When the caller is Next.js internals (i.e. render worker, start server, etc)
    return new NextServer(options);
}
// Support commonjs `require('next')`
module.exports = createServer;
const _default = createServer;

//# sourceMappingURL=next.js.map