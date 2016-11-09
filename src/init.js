$(document).ready(function() {
  window.dancers = [];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('.dancefloor').height() * Math.random(),
      $('.dancefloor').width() * Math.random()
      , Math.random() * 1000
    );
    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $('.lineUp').on('click', function() { 
    $('body').css({'background-image': 'url("css/prom_dancefloor.jpg")'});
    $('.battleKanye').remove();
    $('.battleTaylor').remove();

    $('.spongebob').css({'top': '0px'});
    $('.donutCat').css({'top': '100px'});
    $('.kanye').css({'top': '350px'});
    $('.taylor').css({'top': '500px'});
  });
  
  $('.dancefloor').on('mouseover', '.donutCat', function() {
    $(this).animate({
      height: '+=75',
      width: '+=75'
    }, 1000);
  });

  $('.dancefloor').on('mouseleave', '.donutCat', function() {
    $(this).animate({
      height: '-=75',
      width: '-=75'
    }, 1000);
  });

  $('.danceBattle').on('click', function() {
    $('.battleKanye').remove();
    $('.battleTaylor').remove();

    $('body').css({'background-image': 'url("./css/vma_stage.jpg")'});

    for (var i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i]).css({'top': '500px'});
    }
    var taylor = new makeTaylor(150, 250);
    taylor.$node.addClass('battleTaylor');
    var kanye = new makeKanye(150, 650);
    kanye.$node.addClass('battleKanye');
    $('.dancefloor').append(taylor.$node);
    $('.dancefloor').append(kanye.$node);
  });

});
