"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class TestClient extends discord_js_1.Client {
    constructor(config) {
        super();
        this.config = config;
    }
    login() {
        return super.login(this.config.bot.token);
    }
}
exports.TestClient = TestClient;
