import axios from 'axios';

const ticketmasterApiKey = 'qAOcJsOSzwjbeqGxkHPjP6svF2rmPQAD';
const lastfmApiKey = 'cf9774362d390975d10497a4ac2f0c64';
const deezerApiKey = '61d9c85765513cff4b3fdcd6179b9ace';

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
async function fetchArtistImage(mbid) {
    // const endpoint = `https://musicbrainz.org/ws/2/artist/${mbid}?inc=url-rels&fmt=json`;

    // try {
    //     const response = await axios.get(endpoint);
    //     const relations = response.data.relations;
    //     const imageUrl = relations.find(relation => relation.type === 'image')?.url.resource;

    //     return imageUrl;
    // } catch (error) {
    //     console.error('Error fetching artist image:', error);
    //     throw error;
    // }

    //doing this while theres an error
    const imageUrl = `toreplace`
    return imageUrl
}

export async function runScript(artistName) {
    // Define Last.fm endpoint to get artist information
    const lastfmEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${lastfmApiKey}&format=json`;

    try {
        // Fetch data from Last.fm API to get artist information
        const lastfmData = await fetchLastfmData(lastfmEndpoint);


        // Check if Last.fm API returned an error message
        if (lastfmData.error) {
            // Return an object indicating artist not found
            return {
                lastfm: "The artist you supplied could not be found",
                ticketmaster: null,
                albums: null,
                tracks: null,
                artistImage: null
            };
        }

        // Extract MBID from Last.fm response
        const mbid = lastfmData.artist.mbid;

        // Use MBID to construct the artist image URL
        const artistImageUrl = await fetchArtistImage(mbid);

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
        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            ticketmaster: ticketmasterData,
            lastfm: lastfmData,
            albums: lastfmAlbumsData,
            tracks: lastfmTracksData,
            artistImage: artistImageUrl
        };
    } catch (error) {
        console.error('Error running the script:', error);
        throw error;
    }
}
