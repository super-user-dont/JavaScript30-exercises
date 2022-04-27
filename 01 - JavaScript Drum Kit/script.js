window.addEventListener('keydown', function(event) {
    console.log(event.code);
    const audio = this.document.querySelector(`audio[data-key="${event.code}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
});

