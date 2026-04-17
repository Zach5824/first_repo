// 1. test Database
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



