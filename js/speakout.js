function readOut(text) {

    let Sound = (function () {
        let df = document.createDocumentFragment();
        return function Sound(src) {
            let snd = new Audio(src);
            df.appendChild(snd); // keep in fragment until finished playing
            snd.addEventListener('ended', function () {
                df.removeChild(snd);
            });
            snd.play();
            return snd;
        }
    }());

    let xhr = new XMLHttpRequest();
    let url = 'https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyAGw8ciBzNPHdwzk3xtGePKp_SY4jtAAWA';

    xhr.open("POST", url);
    let data = {
        "input":
            {"text": text},
        "audioConfig":
            {
                "audioEncoding": "LINEAR16",
                "effectsProfileId": [
                    "handset-class-device"
                ],
                "pitch": "5.40",
                "speakingRate": "0.95"
            },
        "voice":
            {
                "languageCode": "en-US",
                "ssmlGender": "FEMALE",
                "name": "en-US-Wavenet-C"
            }
    };

    let audio = 'default';
    xhr.onreadystatechange = (e) => {
        // audio = JSON.parse(xhr.responseText)['audioContent'];
        let resp = JSON.parse(xhr.responseText);
        resp = String(resp['audioContent']);
        // console.log(resp);
        let audio_visit = 'data:audio/wav;base64,' + resp;
        let snd = Sound(audio_visit);
    };
    xhr.send(JSON.stringify(data));
}