import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
    
const player = new Vimeo.Player(iframe);

function saveTime(time) {
    localStorage.setItem('videoplayer-current-time', time);
}
  

function loadTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime !== null) {
    player.setCurrentTime(currentTime);
  }
}


player.on('timeupdate', throttle((data) => {
  const currentTime = data.seconds;
  saveTime(currentTime);
}, 1000)); 
loadTime();