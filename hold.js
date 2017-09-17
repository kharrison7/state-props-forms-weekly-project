// This fetches the information using the url obtained above and returns that data to the browser.
function fetchGet(url){
fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      else{
        console.log('fetch successfully.');
      }
      // This puts the various data on the browser page.
      response.json().then(function(data) {
        // This makes an array to fill with music.
        let aud = [];
        // This goes through the results and finds the top result.
            let result = data.results[0];
            aud[0] = new Audio(result.previewUrl);
        // This sends the first song returned before any song is clicked.
        let play_Song = document.getElementById('music_Here');
        play_Song.src=aud[0].src;
        play_Song.load();
   })
   .catch(function(err) {
    console.log("Fetch Error: ", err);
   });
  });
 };
