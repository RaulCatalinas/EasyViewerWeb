import type { ValueOf } from 'node_modules/astro/dist/type-utils'

export interface Events {
  isDownloading: boolean
}

export type EventsValue = ValueOf<Events>
