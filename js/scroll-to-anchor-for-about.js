const aboutLink = document.querySelector('.header__item a[href="#about"]');

aboutLink.addEventListener("click", () => {
  const targetSection = document.getElementById("new-artifacts");
  const offset = 30;

  window.scrollTo({
    top: targetSection.offsetTop - offset,
    behavior: "smooth",
  });
});
