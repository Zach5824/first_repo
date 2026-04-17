
/* 1. test Database
const musicLibrary = [
    { title: "Midnight City", artist: "M83", mood: "chill", img: "https://via.placeholder.com/150" },
    { title: "Thunderstruck", artist: "AC/DC", mood: "energetic", img: "https://via.placeholder.com/150" },
    { title: "Walking on Sunshine", artist: "Katrina", mood: "happy", img: "https://via.placeholder.com/150" },
    { title: "Hello Darkness", artist: "Simon", mood: "sad", img: "https://via.placeholder.com/150" }
];*/
const Client_ID ="ab16e052"

// 2. Selecting HTML elements
const container = document.getElementById('music-container');
const input = document.getElementById('mood-input');
const searchButton = document.getElementById('search-button');
z
// 1. Function to Fetch Music from Jamendo
async function fetchMusic(mood = "") {
    // This URL tells Jamendo: "Give us 10 tracks that match this mood/tag"
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${Client_ID}&format=json&limit=10&tags=${mood}&include=musicinfo`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Jamendo returns data in an 'results' array
        displayMusic(data.results);
    } catch (error) {
        console.error("Error fetching data:", error);
        container.innerHTML = "<p>Oops! Something went wrong with the music connection.</p>";
    }
}

// 3. The Display function
function displayMusic(tracks) {
    container.innerHTML = ""; 
    
    if (tracks.length === 0) {
        container.innerHTML = "<p>No matches found. Try 'chill', 'happy', 'sad', or 'energetic'!</p>";
        return;
    }

    tracks.forEach(track => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
            <img src="${track.img}" alt="${track.title}">
            <h3>${track.title}</h3>
            <p>${track.artist}</p>
        `;
        container.appendChild(card);
    });
}

// 4. The Click Event Logic
searchButton.addEventListener('click', () => {
    const searchTerm = input.value.toLowerCase();
    
    const filteredMusic = musicLibrary.filter(song => {
        return song.mood.toLowerCase().includes(searchTerm);
    });

    displayMusic(filteredMusic);
});



// Client Id
const CLIENT_ID = 'ab16e052'; 

//selecting my elements
const container = document.getElementById('music-container');
const input = document.getElementById('mood-input');
const searchButton = document.getElementById('search-button');

// 1. Function to Fetch Music from Jamendo
async function fetchMusic(mood = "") {
    // This URL tells Jamendo: "Give us 10 tracks that match this mood/tag"
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=12&tags=${mood}&include=musicinfo`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Jamendo returns data in an 'results' array
        displayMusic(data.results);
    } catch (error) {
        console.error("Error fetching data:", error);
        container.innerHTML = "<p>Oops! Something went wrong with the music connection.</p>";
    }
}

// 2. Updated Display Function (mapped to Jamendo's data structure)
function displayMusic(tracks) {
    container.innerHTML = ""; 

    if (!tracks || tracks.length === 0) {
        container.innerHTML = "<p>No music found for that mood. Try 'chill' or 'rock'!</p>";
        return;
    }

    tracks.forEach(track => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
            <img src="${track.image}" alt="${track.name}" onerror="this.src='https://via.placeholder.com/150'">
            <h3>${track.name}</h3>
            <p>${track.artist_name}</p>
            <audio controls src="${track.audio}"></audio>
        `;
        container.appendChild(card);
    });
}

// 3. Search Event Listener
searchButton.addEventListener('click', () => {
    const userMood = input.value.toLowerCase();
    fetchMusic(userMood);
});

// 4. Initial load with a default mood
fetchMusic('relax');