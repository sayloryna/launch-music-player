import { Song, existingSongs } from "./songsData";

export const areSameSong = (song: Song, songTitle: string): boolean => {
  let areSame: boolean;
  areSame = song.title === songTitle;
  return areSame;
};

export const addSong = (song: Song, songs: Song[]): void => {
  songs.push(song);
};

export const isPlaylistFull = (songs: Song[]): boolean => {
  let isFull: boolean;
  isFull = songs.length >= 4;
  return isFull;
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;
  switch (errorCode) {
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "Oops! No sabemos que ha pasado";
  }
  return errorMessage;
};

export const getSongsCount = (songs: Song[]): number => {
  let songsCount: number;
  // Asígnale a la variable songsCount el número de canciones recibidas

  songsCount = songs.length; // Cambia esta línea por tu código

  return songsCount;
};

export const removeSongByPosition = (songs: Song[], position: number): void => {
  // Elimina del array de canciones recibido la canción que se encuentra en la posición recibida
  songs.splice(position, 1);
};

export const setCurrentSong = (song: Song): void => {
  song.isCurrent = true;
  // Establece la canción recibida como canción actual
};

export const getNextSongPosition = (
  songs: Song[],
  currentSongPosition: number
) => {
  let nextSongPosition: number;
  nextSongPosition = currentSongPosition + 1;
  if (currentSongPosition + 1 === songs.length) {
    nextSongPosition = 0;
  }
  return nextSongPosition;
};

export const isCurrentSong = (song: Song): boolean => {
  let isCurrent: boolean;
  isCurrent = song.isCurrent;
  return isCurrent;
};
