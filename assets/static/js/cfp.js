$(document).ready(function () {
  const cfp = new Date('2018-10-01 00:00:00');

  if (new Date > cfp) {
    $('#cfp').remove();
  } else {
    $('#clockEvent').remove();
  }
});