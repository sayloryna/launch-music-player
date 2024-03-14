import { Song, existingSongs } from "./songsData";

export const areSameSong = (song: Song, songTitle: string): boolean => {
  let areSame: boolean;
  // Asígnale a la variable areSame un true o un false dependiendo de si
  // el título de la canción recibida coincide con el título recibido
  areSame = song.title === songTitle;
  return areSame;
};

export const addSong = (song: Song, songs: Song[]): void => {
  // Añade la canción recibida al array de canciones recibido
  songs.push(song);
};

export const isPlaylistFull = (songs: Song[]): boolean => {
  let isFull: boolean;
  // Asígnale a la variable isFull un true o un false dependiendo de si
  // el array de títulos recibido tiene 4 o más elementos
  isFull = songs.length >= 4;
  return isFull;
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  // A la variable anterior le tendrás que asignar un mensaje de error
  // dependiendo del código de error recibido
  // Si el código de error no es válido, asígnale un mensaje genérico
  // Éstos son los códigos de error y sus mensajes correspondientes:
  // - "exists": "La canción ya existe"
  // - "limit": "La playlist está llena"
  switch (errorCode) {
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "";
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
  // En currentSongPosition tienes el índice de la canción que se está reproduciendo
  // En songs tienes el array de canciones
  // Asígnale a la variable nextSongPosition el índice de la siguiente canción que se tiene que reproducir
  // Si la canción actual es la última, la siguiente será la primera
  nextSongPosition = 0; // Sustituye este 0 por una expresión

  return nextSongPosition;
};

export const isCurrentSong = (song: Song): boolean => {
  let isCurrent: boolean;
  // Asígnale a la variable isCurrent un true o un false dependiendo de si
  // la canción recibida es la actual

  isCurrent = false; // Cambia esta línea por tu código

  return isCurrent;
};
