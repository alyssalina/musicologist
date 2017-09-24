const musicInfo = [];


function testTheAPI() {
	$.ajax({
		url: "https://itunes.apple.com/lookup?id=299608177",
		success: function(response) {
			console.log("We got a response from Apple (I think)!");
			console.log(response);
		}
	});
}

console.log("The script loaded!");
testTheAPI();


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
      success: function(iTunesResult){
        console.log(iTunesResult);
        let playlistItem = (iTunesResult.trackCensoredName + "by" + iTunesResult.artistName);
        console.log(playlistItem);
        $('#playlistSpot').append("<div>"+ playlistItem +"</div>");
        }
      })
      })

})



    

  // TODO: Display a list of music.
  // You may use anything from musicInfo.
  //Insert Heading into div id="playlistSpot"
