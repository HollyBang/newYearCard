!function($) {
  $(document).ready(function() {
    var $play = $('#audio-play'),
        $pause = $('#audio-pause'),
        song = $('#song').get(0);

    $play.on('click', function() {
      song.play();
      $play.addClass('hidden');
      $pause.removeClass('hidden');
    });

    $pause.on('click', function() {
      song.pause();
      $pause.addClass('hidden');
      $play.removeClass('hidden');
    });
  });
}(jQuery)