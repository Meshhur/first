// "use strict";
// console.log(typeof(null));

// let a = "HELLo";

// function fff(a) {
//     for (let i = 0; i <= a.length; i++) {
//         let b = a.toLowerCase();
//         if (a[i] == b) {
//             return 'No';
//         }
//         else {
//             return 'Yes'
//         }
//     }
// }

"use strict";

let video = document.querySelector('#video')
let playPauseBtn = document.querySelector('#ppbtn')
let muteBtn = document.querySelector('#mutebtn')
let plusBtn = document.querySelector('#plusbtn')
let minusBtn = document.querySelector('#minusbtn')
let progress = document.querySelector('#progress')
let progressBar = document.querySelector("#progress-bar");

const startStopVideo = function () {
    let videoState = playPauseBtn.getAttribute('data-video-controller');
    let plpause = document.getElementById('ppbtn');

    if (videoState === 'pause') {
        video.play();
        playPauseBtn.setAttribute('data-video-controller', 'play')
        plpause.style.backgroundColor = 'lightgreen';
    }
    else {
        video.pause();
        plpause.style.backgroundColor = '#8598b1';
        playPauseBtn.setAttribute('data-video-controller', 'pause')
    }
}

playPauseBtn.addEventListener('click', startStopVideo)

video.addEventListener('loadedmetadata', () => {
    progress.setAttribute("max", video.duration)
});

video.addEventListener('timeupdate', () => {
    progress.value = video.currentTime;
    progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100)+ "%";
});

progress.addEventListener('click', function(event) {
    let pos = 
        (event.pageX -
            (this.offsetLeft +
                this.offsetParent.offsetLeft +
                this.offsetParent.offsetLeft)) /
        this.offsetWidth;
        
    video.currentTime = pos * video.duration   
});





