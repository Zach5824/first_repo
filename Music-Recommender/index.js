// 1. Your Mock Database
const musicLibrary = [
    { title: "Midnight City", artist: "M83", mood: "chill", img: "https://via.placeholder.com/150" },
    { title: "Thunderstruck", artist: "AC/DC", mood: "energetic", img: "https://via.placeholder.com/150" },
    { title: "Walking on Sunshine", artist: "Katrina", mood: "happy", img: "https://via.placeholder.com/150" },
    { title: "Hello Darkness", artist: "Simon", mood: "sad", img: "https://via.placeholder.com/150" }
];

// 2. Selecting HTML elements
const container = document.getElementById('music-container');
const input = document.getElementById('mood-input');
const searchButton = document.getElementById('search-button');

