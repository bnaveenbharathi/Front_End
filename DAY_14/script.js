const songs = [
    {
      title: "Song 1",
      src: "./songs/songs.mp3"
    },
    {
      title: "Song 2",
      src: "./songs/songs.mp3"
    },
    {
      title: "Song 3",
      src: "./songs/songs.mp3"
    }
  ];
  
  let currentSongIndex = 0;
  
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const currentSongText = document.getElementById("current-song");
  const playBtn = document.getElementById("play");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  
  function loadSong(index) {
    const song = songs[index];
    title.textContent = song.title;
    audio.src = song.src;
    currentSongText.textContent = `Now playing: ${song.title}`;
  }
  
  function playSong() {
    audio.play();
    playBtn.textContent = "pause";
  }
  
  function pauseSong() {
    audio.pause();
    playBtn.textContent = "next";
  }
  
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });
  
  nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });
  
  prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });
  
  // Initial load
  loadSong(currentSongIndex);
  