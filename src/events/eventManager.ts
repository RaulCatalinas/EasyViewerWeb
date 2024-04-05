// Third-Party Libraries
import mitt from 'mitt'

// Types
import type { Events, EventsValue } from '@/types/events'

const emitter = mitt<Events>()

interface LaunchEventProps {
  event: keyof Events
  value: EventsValue
}
interface ListenEventProps {
  event: keyof Events
  callback: (event: EventsValue) => void
}

export function launchEvent({ event, value }: LaunchEventProps) {
  emitter.emit(event, value)
}

export function listenEvent({ event, callback }: ListenEventProps) {
  emitter.on(event, callback)
}
