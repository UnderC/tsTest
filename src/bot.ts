import { Client } from 'discord.js'

class TestClient extends Client {
  public config: Config
  constructor (config: Config) {
    super()
    this.config = config
  }

  public login () {
    return super.login(this.config.bot.token)
  }
}

interface Config {
  bot: BotConfig
  db?: DBConfig
}

interface BotConfig {
  token: string
}

interface DBConfig {
  host: string
  user: string
  pass: string
  port: number
  schema: string
}

export { TestClient }
