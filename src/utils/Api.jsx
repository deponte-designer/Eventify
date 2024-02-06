import axios from 'axios';

const ticketmasterApiKey = 'qAOcJsOSzwjbeqGxkHPjP6svF2rmPQAD';
const lastfmApiKey = 'cf9774362d390975d10497a4ac2f0c64';
const deezerApiKey = '61d9c85765513cff4b3fdcd6179b9ace';

// const artistName = '';



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

// Function to run the script for each API
export async function runScript(artistName) {
    // Define API endpoints
    const ticketmasterEndpoint = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&apikey=${ticketmasterApiKey}`;
    const lastfmEndpoint = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${lastfmApiKey}&format=json`;
    const deezerEndpoint = `https://api.deezer.com/search/artist?q=${artistName}&api_key=${deezerApiKey}`;

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
