const reply_map = {
    "The Mona Lisa": "The Mona Lisa! A portrait painting by Leonardo da Vinci, the best known work of art in the world. Amazing!",
    "triangle": "Triangle is one of some basic gemetric shape. Are you interested in Geometry or Math?",
    "cat": "What a lovely cat! Do you like dogs as well? Cats and dogs are best friends of human beings. ",
    "apple": "You drew an apple, is the apple your favorite fruit? Fruits are very helpful for your health.",
    "car": "Enjoy A day out at the fair? But vehicles might lead to air pollution, please try your best for environment protection.",
    "boat": "Row row row your boat, gently down the stream, oh the places you'll go, life is but a dream",
    "moon": "Starry, starry night. Paint your palette blue and gray. Look out on a summer's day. ",
    "bus": "the wheels on the bus goes round and round all through the town",
    "The Eiffel Tower": "Have you been to France? The Eiffel Tower is a famous building all over the world!",
    "smiley face": "If you are happy clap your hands!",
    "mountain":"That reminds me of an old song: Ain't no mountain high enough. Ain't no valley low enough. Ain't no river wide enough.",
};
// let getpn = function(){
//  // get your predicted noun
// };
// let pn = getpn();
let random_pattern_reply = [
    "I guess it's a {0}! Why you are interested in this?",
    "Is it a {0}? Can you tell me more about your thinkings about {0}?",
    "Wow, you showed me a {0}! Any good memories of this?",
    "{0}? Did I guess right? If you are curious about {0}, I can tell you more about it.",
    "I can't say for sure, but I guess you showed me a {0}...",
    "What a lovely picture! I believe you were thinking about {0}, maybe you can tell me more about it?",
];

function getDescription(keyword) {
    if(keyword in reply_map) {
        return  reply_map[keyword];
    } else {
        return random_pattern_reply[Math.floor(Math.random() * 6)].replace("{0}", keyword).replace("{0}", keyword);
    }
}
