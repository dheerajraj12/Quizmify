export function needsExperimentalReact(config) {
    var _config_experimental, _config_experimental1;
    return Boolean(((_config_experimental = config.experimental) == null ? void 0 : _config_experimental.serverActions) || ((_config_experimental1 = config.experimental) == null ? void 0 : _config_experimental1.ppr));
}

//# sourceMappingURL=needs-experimental-react.js.map