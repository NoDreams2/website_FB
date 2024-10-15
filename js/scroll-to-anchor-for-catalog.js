const galleryLink = document.querySelector('.header__item a[href="#gallery"]');

galleryLink.addEventListener("click", () => {
  const targetSection = document.getElementById("card");
  const offset = 60;

  window.scrollTo({
    top: targetSection.offsetTop - offset,
    behavior: "smooth",
  });
});
