import { TestClient } from './bot'
import config from '../config.json'

const bot: TestClient = new TestClient(config)

import * as events from './events'
for (const event of Object.values(events)) {
  bot.on(event.eventName, event.run)
}

bot.login()
