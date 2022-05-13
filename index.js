let submitBtn = $('button');
let thankYouCard = $('.thank-you-card');
let welcomeCard = $('.welcome-card');

submitBtn.on('click', () => {
  thankYouCard.removeClass('display-none');
  welcomeCard.addClass('display-none');
});
