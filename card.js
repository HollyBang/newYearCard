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
  var $snowflakes = $('#snowflakes'),
      snowflakesCount = $snowflakes.data('count');

  setInterval(showSnowFlakes, 5000);
  showSnowFlakes()

  function showSnowFlakes() {
    for (var i = 0; i< snowflakesCount; i++) {
      !function() {
        var $snowflake = $('<div class="snowflake"></div>').appendTo($snowflakes);
        var left = Math.round(Math.random()*100);
        var top = -Math.round(Math.random()*40);
        $snowflake.css('left', left+'%');
        $snowflake.css('top', top+'%');

        setTimeout(function() {
          $snowflake.css('top', (top+140)+'%');
        }, 100);

        setTimeout(function() {
          $snowflake.remove();
        }, 17000);
      }(i)
    }
  }
}(jQuery)