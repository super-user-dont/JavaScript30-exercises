window.addEventListener('keydown', function(event) {
    console.log(event.code);
    const audio = this.document.querySelector(`audio[data-key="${event.code}"]`);
    const key = this.document.querySelector(`.key[data-key="${event.code}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    console.log(audio);
});

window.addEventListener('keyup', function(event) {
    const key = this.document.querySelector(`.key[data-key="${event.code}"]`);
    key.classList.remove("playing");
};

)