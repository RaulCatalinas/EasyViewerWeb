import type { ValueOf } from 'node_modules/astro/dist/type-utils'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type Events = {
  isDownloading: boolean
}

export type EventsValue = ValueOf<Events>
