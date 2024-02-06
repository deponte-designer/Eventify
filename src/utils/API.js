const deezerApiKey = '61d9c85765513cff4b3fdcd6179b9ace';
const ticketmasterApiKey = 'qAOcJsOSzwjbeqGxkHPjP6svF2rmPQAD';

export const BandsInTownApi = (artist) => {
    fetch("https://rest.bandsintown.com/artists/amy%20winehouse?app_id=fc2d1fcb-7549-4d63-8adb-f5483c895fde")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
}

export const LastFMApi = (artist) => {
    fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=b2e0b8568d13aaf1ae39f44abeb75d0f&format=json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}

export const DeezerApi = (artist) => {
    return fetch(`https://api.deezer.com/search?q=artist:${artist}&apikey=${deezerApiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(error => {
        console.error('There was a problem with the Deezer API request:', error);
        return null;
      });
  };
  

export const TicketmasterApi = (artist) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artist}&apikey=${ticketmasterApiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(error => {
        console.error('There was a problem with the Ticketmaster API request:', error);
        return null;
      });
  };
