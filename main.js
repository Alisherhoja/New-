document.getElementById("speak").addEventListener("click", function () {
    let text = document.getElementById("text").value;
    let voiceSelect = document.getElementById("voiceSelect");
    
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    
    let voices = window.speechSynthesis.getVoices();
    speech.voice = voices.find(voice => voice.name.includes(voiceSelect.value)) || voices[0];

    window.speechSynthesis.speak(speech);
});
