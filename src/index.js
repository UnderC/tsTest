"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("./bot");
const config_json_1 = __importDefault(require("../config.json"));
const bot = new bot_1.TestClient(config_json_1.default);
const events = __importStar(require("./events"));
for (const event of Object.values(events)) {
    bot.on(event.eventName, event.run);
}
bot.login();
