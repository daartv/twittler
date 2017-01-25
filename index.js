$(document).ready(function(){
  var $body = $('body');
  var originalIndex = streams.home.length - 1
  var index;
  for(index = 0; index <=originalIndex; index++){
    newTweet();
  }

  $('#load').on('click',function(){
    for(index = originalIndex+1; index < streams.home.length; index++){
      newTweet();
    }
    originalIndex = streams.home.length - 1;
  });

  function addTimelineEvent() {
    $('.user').on('click',function(){
      goToIndividualTimeline($(this).data('user'));
    });
  }
  
  function newTweet() {
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    var $time = $('<p></p>');
    var $user = $('<a href="#"></a>');
    $user.attr('data-user',tweet.user);
    $user.addClass('user');
    $user.text('@'+tweet.user);
    $user.on('click',function(){
      goToIndividualTimeline($(this).data('user'));
    });
    $time.text(tweet.created_at);
    $time.appendTo($tweet);
    $time.addClass('time-stamp');
    $tweet.append($user).append(': '+ '<br>' +tweet.message);
    $('#load').after($tweet);
    $tweet.addClass('feed');
    
  }

  function goToIndividualTimeline(user) {
    for(index = 0; index < streams.home.length; index++) {
      var tweet = streams.home[index];
      if(tweet.user !== user) {
        $('[data-user='+tweet.user+']').closest('div').hide();
      }
    }
  }
});