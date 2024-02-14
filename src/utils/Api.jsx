import axios from 'axios';

const ticketmasterApiKey = 'qAOcJsOSzwjbeqGxkHPjP6svF2rmPQAD';
const lastfmApiKey = 'cf9774362d390975d10497a4ac2f0c64';
const giphyApiKey = 'f0vozMQchRD8NIqhBBu5nhkJdugPLoQC'

// Function to fetch data from Last.fm API
async function fetchLastfmData(endpoint) {
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching Last.fm data:', error);
        throw error;
    }
}

// Function to fetch data from Ticketmaster API
async function fetchTicketmasterData(endpoint) {
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching Ticketmaster data:', error);
        throw error;
    }
}

// Commented out as was getting 500 error
async function fetchArtistImage(artistName) {
    // Construct the Giphy API request URL
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${encodeURIComponent(artistName)}&limit=1&rating=g`;

    try {
        // Fetch data from Giphy API using Axios
        const response = await axios.get(url);

        // Extract the URL of the still image from the response data
        const imageUrl = response.data.data.length > 0 ? response.data.data[0].images.original_still.url : null;

        // Check if the request was successful
        if (response.status !== 200) {
            console.log('giphy error 200')
            throw new Error('Failed to fetch data from Giphy API');
        }


        return imageUrl;
    } catch (error) {
        console.error('Error fetching data from Giphy API:', error);
        return null;
    }
}

export async function runScript(artistName) {
    // Define Last.fm endpoint to get artist information
    var lastfmEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${lastfmApiKey}&format=json`;

    let typoCheckValue = null;

    try {
        // Fetch data from Last.fm API to get artist information
        var lastfmData = await fetchLastfmData(lastfmEndpoint);

        // Check if Last.fm API returned an error message
        if (lastfmData.error) {
            // Return an object indicating artist not found
            return {
                lastfm: "The artist you supplied could not be found",
                ticketmaster: null,
                albums: null,
                tracks: null,
                artistImage: null,
                typoCheck: null
            };
        }

        if (lastfmData.artist.bio.content.startsWith("This is an incorrect tag")) {
            var typoArtist = artistName;
            let startIndex = lastfmData.artist.bio.content.indexOf("This is an incorrect tag for ") + "This is an incorrect tag for ".length;
            let endIndex = lastfmData.artist.bio.content.indexOf(".", startIndex);
            var artistName = lastfmData.artist.bio.content.substring(startIndex, endIndex);

            // Redefine Last.fm endpoint to get artist information
            var lastfmEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${lastfmApiKey}&format=json`;
            var lastfmData = await fetchLastfmData(lastfmEndpoint);
            // Extract MBID from Last.fm response
            const mbid = lastfmData.artist.mbid;

            // Use MBID to construct the artist image URL
            const artistImageUrl = await fetchArtistImage(artistName);

            // Define API endpoints for Ticketmaster, Last.fm albums, and tracks
            const ticketmasterEndpoint = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&apikey=${ticketmasterApiKey}`;
            const lastfmAlbumsEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${mbid}&api_key=${lastfmApiKey}&format=json`;
            const lastfmTracksEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${mbid}&api_key=${lastfmApiKey}&format=json`;

            // Fetch data from Ticketmaster API
            const ticketmasterData = await fetchTicketmasterData(ticketmasterEndpoint);

            // Fetch data from Last.fm API for top albums and tracks
            const lastfmAlbumsData = await fetchLastfmData(lastfmAlbumsEndpoint);
            const lastfmTracksData = await fetchLastfmData(lastfmTracksEndpoint);

            // Wait for 1 second before returning data to ensure rate limiting
            // await new Promise(resolve => setTimeout(resolve, 1000));

            return {
                ticketmaster: ticketmasterData,
                lastfm: lastfmData,
                albums: lastfmAlbumsData,
                tracks: lastfmTracksData,
                artistImage: artistImageUrl,
                typoCheck: typoArtist,
            };
        }

        if (lastfmData.artist.bio.content.startsWith("Correct artist name is")) {
            var typoArtist = artistName;
            let startIndex = lastfmData.artist.bio.content.indexOf("Correct artist name is ") + "Correct artist name is ".length;
            let endIndex = lastfmData.artist.bio.content.indexOf(".", startIndex);
            var artistName = lastfmData.artist.bio.content.substring(startIndex, endIndex);

            let typoCheckValue = "Yes";
            // Redefine Last.fm endpoint to get artist information
            var lastfmEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${lastfmApiKey}&format=json`;
            var lastfmData = await fetchLastfmData(lastfmEndpoint);
            // Extract MBID from Last.fm response
            const mbid = lastfmData.artist.mbid;

            // Use MBID to construct the artist image URL
            const artistImageUrl = await fetchArtistImage(artistName);

            // Define API endpoints for Ticketmaster, Last.fm albums, and tracks
            const ticketmasterEndpoint = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&apikey=${ticketmasterApiKey}`;
            const lastfmAlbumsEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${mbid}&api_key=${lastfmApiKey}&format=json`;
            const lastfmTracksEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${mbid}&api_key=${lastfmApiKey}&format=json`;

            // Fetch data from Ticketmaster API
            const ticketmasterData = await fetchTicketmasterData(ticketmasterEndpoint);

            // Fetch data from Last.fm API for top albums and tracks
            const lastfmAlbumsData = await fetchLastfmData(lastfmAlbumsEndpoint);
            const lastfmTracksData = await fetchLastfmData(lastfmTracksEndpoint);

            // Wait for 1 second before returning data to ensure rate limiting
            // await new Promise(resolve => setTimeout(resolve, 1000));

            return {
                ticketmaster: ticketmasterData,
                lastfm: lastfmData,
                albums: lastfmAlbumsData,
                tracks: lastfmTracksData,
                artistImage: artistImageUrl,
                typoCheck: typoCheckValue,
            };
        }
        
        if ((lastfmData.artist.bio.content.length)===0){
            // Return an object indicating artist not found
            return {
                lastfm: "The artist you supplied could not be found",
                ticketmaster: null,
                albums: null,
                tracks: null,
                artistImage: null,
                typoCheck: null
            };
        }

        // Extract MBID from Last.fm response
        const mbid = lastfmData.artist.mbid;

        // Use MBID to construct the artist image URL
        const artistImageUrl = await fetchArtistImage(artistName);

        // Define API endpoints for Ticketmaster, Last.fm albums, and tracks
        const ticketmasterEndpoint = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&apikey=${ticketmasterApiKey}`;
        const lastfmAlbumsEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${mbid}&api_key=${lastfmApiKey}&format=json`;
        const lastfmTracksEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${mbid}&api_key=${lastfmApiKey}&format=json`;

        // Fetch data from Ticketmaster API
        const ticketmasterData = await fetchTicketmasterData(ticketmasterEndpoint);

        // Fetch data from Last.fm API for top albums and tracks
        const lastfmAlbumsData = await fetchLastfmData(lastfmAlbumsEndpoint);
        const lastfmTracksData = await fetchLastfmData(lastfmTracksEndpoint);

        // Wait for 1 second before returning data to ensure rate limiting
        // await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            ticketmaster: ticketmasterData,
            lastfm: lastfmData,
            albums: lastfmAlbumsData,
            tracks: lastfmTracksData,
            artistImage: artistImageUrl,
            typoCheck: typoCheckValue,
        };
    } catch (error) {
        console.error('Error running the script:', error);
        throw error;
    }
}
