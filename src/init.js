$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      ($('body').height()) * 0.2 * Math.random() + ($('body').height()) * 0.55,
      // $('body').height() * Math.random(),
      // ($('body').width()) * 0.6 * Math.random() - ($('body').width() * 0.4),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addTomNookButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('tomnook-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunctionName, dancerMakerFunction);
    var dancer = new dancerMakerFunction(
      ($('body').height()) * 0.2 * Math.random() + ($('body').height()) * 0.55,
      // $('body').height() * Math.random(),
      // ($('body').width()) * 0.6 * Math.random() - ($('body').width() * 0.4),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });










});


