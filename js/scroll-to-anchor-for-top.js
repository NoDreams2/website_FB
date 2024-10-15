$('a[href^="#top"]').on('click', function(event) {
  event.preventDefault();
  const target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000);
});
