/* eslint-disable @typescript-eslint/indent */
export type NotificationType = 'success' | 'error' | 'info'

export type GradientColors = Record<
  NotificationType,
  Record<
    'firstColor' | 'secondColor' | 'thirdColor',
    `rgba(${number},${number},${number},${number})`
  >
>
