"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_TIMEOUT = 30000; // Default timeout value (30 sec)
class Config {
    constructor(options = {}) {
        var _a;
        if (options.username)
            this.username = options.username;
        if (options.password)
            this.password = options.password;
        if (options.environment)
            this.environment = options.environment;
        if (options.marketPayEndpoint)
            this.marketPayEndpoint = options.marketPayEndpoint;
        if (options.applicationName)
            this.applicationName = options.applicationName;
        if (options.apiKey)
            this.apiKey = options.apiKey;
        // Set the timeout to DEFAULT_TIMEOUT if not provided
        this.connectionTimeoutMillis = (_a = options.connectionTimeoutMillis) !== null && _a !== void 0 ? _a : DEFAULT_TIMEOUT;
        if (options.certificatePath)
            this.certificatePath = options.certificatePath;
        if (options.terminalApiCloudEndpoint)
            this.terminalApiCloudEndpoint = options.terminalApiCloudEndpoint;
        if (options.terminalApiLocalEndpoint)
            this.terminalApiLocalEndpoint = options.terminalApiLocalEndpoint;
    }
}
exports.default = Config;
//# sourceMappingURL=config.js.map