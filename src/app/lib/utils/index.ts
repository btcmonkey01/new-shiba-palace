export const playAudio = (src: string, volume: number = 0.25) => {
  const audio = new Audio(src)
  audio.volume = 0.25
  audio.play()
}