import { atom } from 'recoil'

export const movieDetailAtom = atom({
  key: 'movieDetail',
  default: {}
})

export const genreAtom = atom({
  key: 'genre',
  default: []
}) 