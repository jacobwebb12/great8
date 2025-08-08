export function computeOverallScore(skills: number[]): number {
  const clean = skills.map((s) => (isFinite(s) ? s : 0))
  const avg = clean.reduce((a, b) => a + b, 0) / clean.length
  return Math.round((avg / 5) * 100)
} 