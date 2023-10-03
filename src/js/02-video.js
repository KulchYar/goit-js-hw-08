import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe);

function saveTime(time) {
    localStorage.setItem('videoplayer-time, time')
};
   
function loadTIme() {
 return   localStorage.getItem('videoplayer-time')
}