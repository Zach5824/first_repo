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