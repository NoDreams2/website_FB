const contactsLink = document.querySelector(
  '.header__item a[href="#contacts"]'
);

contactsLink.addEventListener("click", () => {
  const targetSection = document.getElementById("help");

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth",
  });
});
