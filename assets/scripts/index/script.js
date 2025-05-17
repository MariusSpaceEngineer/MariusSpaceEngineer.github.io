const recipientEmail = "stoicamarius9010@gmail.com";

document.addEventListener("DOMContentLoaded", function () {
  sendMail(recipientEmail);
});

const sendMail = (recipientEmail) => {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const senderName = document.getElementById("senderName").value;
      const senderEmail = document.getElementById("senderEmail").value;
      const message = document.getElementById("message").value;

      const mailtoLink = `mailto:${recipientEmail}?subject=Message from ${senderName} via Portfolio Website&body=${message} %0D%0A${senderName}%0D%0A${senderEmail}`;
      window.location.href = mailtoLink;
    });
};

function toggleNavMenu() {
  var navLinks = document.getElementById("navLinks");
  var hamburgerIcon = document.getElementById("hamburgerIcon");
  var closeIcon = document.getElementById("closeIcon");

  // When the navLinks ia open we hide the hamburger icon and show the close icon
  navLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("display");

  if (navLinks.classList.contains("open")) {
    var links = navLinks.querySelectorAll("a");
    links.forEach(function (link) {
      //When a links is clicked we hide the navLinks and show the hamburger icon
      // and show the close icon
      link.addEventListener("click", function handleNavClick() {
        navLinks.classList.remove("open");
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.remove("display");
        link.removeEventListener("click", handleNavClick);
      });
    });
  }
}
