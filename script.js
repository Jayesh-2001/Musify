console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
   { songName: "Interstellar Theme Song", filePath: "songs/1.mp3", coverPath: "covers/1.jfif" },
   { songName: "TheFatRat - MAYDAY", filePath: "songs/2.mp3", coverPath: "covers/2.jfif" },
   { songName: "Alan walker - Faded", filePath: "songs/3.mp3", coverPath: "covers/3.jfif" },
   { songName: "One Direction - Night Changes", filePath: "songs/4.mp3", coverPath: "covers/4.jfif" },
   { songName: "Coldplay - Hymn For The Weekend", filePath: "songs/5.mp3", coverPath: "covers/5.jfif" },
   { songName: "Interstellar theme song", filePath: "songs/1.mp3", coverPath: "covers/1.jfif" },
   { songName: "TheFatRat - MAYDAY", filePath: "songs/2.mp3", coverPath: "covers/2.jfif" },
   { songName: "Alan walker - Faded", filePath: "songs/3.mp3", coverPath: "covers/3.jfif" },
   { songName: "One Direction - Night Changes", filePath: "songs/4.mp3", coverPath: "covers/4.jfif" },
   { songName: "Coldplay - Hymn For The Weekend", filePath: "songs/5.mp3", coverPath: "covers/5.jfif" },
]

songItems.forEach((element, i) => {
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
   if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
      masterSongName.classList.remove('masterSong');
   }
   else {
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
      masterSongName.classList.add('masterSong');
   }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
   // Update Seekbar
   progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
   audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
   })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
   element.addEventListener('click', (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      masterSongName.classList.remove('masterSong');
   })
})

document.getElementById('next').addEventListener('click', () => {
   if (songIndex >= 9) {
      songIndex = 0
   }
   else {
      songIndex += 1;
   }
   audioElement.src = `songs/${songIndex + 1}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.currentTime = 0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
   if (songIndex <= 0) {
      songIndex = 0
   }
   else {
      songIndex -= 1;
   }
   audioElement.src = `songs/${songIndex + 1}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.currentTime = 0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
})