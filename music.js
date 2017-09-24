const musicInfo = [];


function rickRoll() {
	$.ajax({
		url: "https://itunes.apple.com/lookup?id=299608205",
    type: "GET",
    datatype: "json",
    success: function(iTunesResult){
      let suggestion = JSON.parse(iTunesResult).results[0];
      console.log(iTunesResult);
      let playlistItem = ("<b>" + suggestion.trackName + "</b> by <b>" + suggestion.artistName + "</b>");
      console.log(playlistItem);
      $('#playlistSpot').append("<div>"+ playlistItem +"</div>");
      }
	});
}

console.log("The script loaded!");


function addSongFromField(event) {
  event.preventDefault();

  const info = $('#musicField').eq(0).val();

  musicInfo.push(info);
  renderList();
  $('#musicField').eq(0).val('');
}

$('#addButton').click(addSongFromField);
$('#musicField').keyup(function(event) {
  if (event.which == 13) { // User presses Enter
    addSongFromField(event);
  }
});

function renderList() {
  const $list = $('.info').eq(0);

  $list.empty();

  for (const info of musicInfo) {
    const $item = $('<li class="list-group-item">').text(info);

    $list.append($item)
  }
};

$('#getPlaylistBtn').click(function (event) {

  
  $('#playlistSpot').empty();
  
  $.each(musicInfo, function(i,listItem) {
    $.ajax({
      url:'https://itunes.apple.com/search?term=' + listItem + '&limit=1',
      type: "GET",
      datatype: "json",
      success: function(iTunesResult){
        let suggestion = JSON.parse(iTunesResult).results[0];
        console.log(iTunesResult);
        let playlistItem = ("<b>" + suggestion.trackName + "</b> by <b>" + suggestion.artistName + "</b>");
        console.log(playlistItem);
        $('#playlistSpot').append("<div>"+ playlistItem +"</div>");
        }
      })
    })
    
  rickRoll();
  rickRoll();
  rickRoll();
  rickRoll();
  rickRoll();
  rickRoll();
  rickRoll();
  rickRoll();
  rickRoll();
  rickRoll();
  rickRoll();
  rickRoll();

})



    

  // TODO: Display a list of music.
  // You may use anything from musicInfo.
  //Insert Heading into div id="playlistSpot"
