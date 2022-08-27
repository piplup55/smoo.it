export type TState = 'loading' | 'offline' | 'online' | 'unknown'

export interface IHost {
  host?  : string
  ip?    : string
  port?  : number
  state? : TState | null
}

export interface IPlayer {
  Name  : string
  Stage : string
}

export interface ISettings {
  MaxPlayers?    : number
  ScenarioMerge? : boolean
  PersistShines? : boolean
}

export interface IVersion {
  html     : string
  details? : string
}

export interface IServer {
  name      : string
  link?     : string
  server    : IHost
  version?  : IVersion | string
  location? : { flag?: string, name: string }
  settings? : ISettings
}
