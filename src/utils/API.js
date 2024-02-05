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