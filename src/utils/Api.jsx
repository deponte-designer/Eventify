import axios from 'axios';

const ticketmasterApiKey = 'qAOcJsOSzwjbeqGxkHPjP6svF2rmPQAD';
const lastfmApiKey = 'cf9774362d390975d10497a4ac2f0c64';
const deezerApiKey = '61d9c85765513cff4b3fdcd6179b9ace';

const artistName = 'Arctic Monkeys';

// Define API endpoints
const ticketmasterEndpoint = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&apikey=${ticketmasterApiKey}`;
const lastfmEndpoint = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${lastfmApiKey}&format=json`;
const deezerEndpoint = `https://api.deezer.com/search/artist?q=${artistName}&api_key=${deezerApiKey}`;

// Last.fm and deezer use artist as parameter
async function fetchArtistData(endpoint, artistName) {
    try {
        const response = await axios.get(endpoint, {
            params: {
                artist: artistName
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Ticketmaster uses keyword as parameter
async function fetchKeywordData(endpoint, keyword) {
    try {
        const response = await axios.get(endpoint, {
            params: {
                keyword: keyword
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


// Function to display Ticketmaster events for a specific artist
async function displayTicketmasterEvents(artistName) {
    try {
        const ticketmasterData = await fetchKeywordData(ticketmasterEndpoint, artistName);

        // Display relevant Ticketmaster event information
        console.log('Ticketmaster Events for', artistName + ':');
        ticketmasterData._embedded.events.forEach((event, index) => {
            console.log(`${index + 1}. Event Name: ${event.name}, Date: ${event.dates.start.localDate}`);
        });
    } catch (error) {
        console.error('Error displaying Ticketmaster events:', error);
    }
}

// Function to display Last.fm artist information for a specific artist
async function displayLastfmArtistInfo(artistName) {
    try {
        const lastfmData = await fetchArtistData(lastfmEndpoint, artistName);

        // Display relevant Last.fm artist information
        console.log('\nLast.fm Artist Information for', artistName + ':');
        console.log('Name:', lastfmData.artist.name);
        console.log('Bio:', lastfmData.artist.bio.summary);
        console.log('Listeners:', lastfmData.artist.stats.listeners);
    } catch (error) {
        console.error('Error displaying Last.fm artist information:', error);
    }
}

// Function to display Deezer artist information for a specific artist
async function displayDeezerArtistInfo(artistName) {
    try {
        const deezerData = await fetchArtistData(deezerEndpoint, artistName);

        // Display relevant Deezer artist information
        console.log('\nDeezer Artist Information for', artistName + ':');
        deezerData.data.forEach((artist, index) => {
            console.log(`${index + 1}. Artist Name: ${artist.name}`);
        });
    } catch (error) {
        console.error('Error displaying Deezer artist information:', error);
    }
}

// Function to run the script for each API
export async function runScript() {
    try {
      const ticketmasterData = await fetchKeywordData(ticketmasterEndpoint, artistName);
      console.log('Ticketmaster Events:', ticketmasterData);
  
      const lastfmData = await fetchArtistData(lastfmEndpoint, artistName);
      console.log('Last.fm Artist Information:', lastfmData);
    // COMMENTED OUT AS WAS GETTING CORS ERROR - possibly due to axios?
    //   const deezerData = await fetchArtistData(deezerEndpoint, artistName);
    //   console.log('Deezer Artist Information:', deezerData);
    } catch (error) {
      console.error('Error running the script:', error);
    }
  }

// FOR TESTING
// Run the script with the specified artistName
// const apiReturn = runScript(artistName);

