export interface Player {
  id: string
  name: string
  gradYear: number
  height: string
  weight: string
  picture?: string
  youtubeLinks?: string[]
  speed: number
  agility: number
  stick: number
  defense: number
  strength: number
  iq: number
  communication: number
  scoutingReport?: string
}

export const getOverallScore = (player: Player): number => {
  const scores = [
    player.speed,
    player.agility,
    player.stick,
    player.defense,
    player.strength,
    player.iq,
    player.communication,
  ]
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length
  return Math.round((avg / 5) * 100)
}

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'Jake Thompson',
    gradYear: 2025,
    height: "6'2\"",
    weight: '185 lbs',
    picture: '/player-1.jpg',
    youtubeLinks: ['https://www.youtube.com/watch?v=abc123'],
    speed: 4.5,
    agility: 4.2,
    stick: 4.8,
    defense: 4.0,
    strength: 4.3,
    iq: 4.7,
    communication: 4.1,
    scoutingReport:
      'Elite midfielder with exceptional stick skills and field vision. Strong two-way player with excellent speed and agility.',
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    gradYear: 2025,
    height: "5'11\"",
    weight: '170 lbs',
    picture: '/player-2.jpg',
    youtubeLinks: ['https://www.youtube.com/watch?v=def456'],
    speed: 4.8,
    agility: 4.9,
    stick: 4.3,
    defense: 4.6,
    strength: 3.8,
    iq: 4.4,
    communication: 4.5,
    scoutingReport:
      'Lightning-fast attackman with incredible agility. Natural goal scorer with excellent field awareness.',
  },
  {
    id: '3',
    name: 'Chris Williams',
    gradYear: 2026,
    height: "6'0\"",
    weight: '190 lbs',
    picture: '/player-3.jpg',
    youtubeLinks: ['https://www.youtube.com/watch?v=ghi789'],
    speed: 4.0,
    agility: 3.8,
    stick: 4.1,
    defense: 4.9,
    strength: 4.7,
    iq: 4.6,
    communication: 4.8,
    scoutingReport:
      'Physical defender with excellent strength and communication skills. Natural leader on the defensive end.',
  },
]

export const getPlayerById = (id: string): Player | undefined =>
  mockPlayers.find((p) => p.id === id) 