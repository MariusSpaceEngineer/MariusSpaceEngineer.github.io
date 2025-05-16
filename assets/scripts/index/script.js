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
  navLinks.classList.toggle("open");
}
