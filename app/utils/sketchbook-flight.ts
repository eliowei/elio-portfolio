export type FlightPose = 'fly-slow' | 'fly-down' | 'fly-dive' | 'fly-up'

export function flightPose(previous: FlightPose | null, direction: number, speed: number): FlightPose {
  if (direction < 0) return 'fly-up'
  if (speed >= (previous === 'fly-dive' ? 950 : 1350)) return 'fly-dive'
  if (speed >= (previous === 'fly-down' || previous === 'fly-dive' ? 285 : 420)) return 'fly-down'
  return 'fly-slow'
}
