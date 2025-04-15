document.getElementById("menu-toggle").addEventListener("change", function () {
  console.log("Hamburger menu toggled");
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:stoicamarius9010@gmail.com?subject=Message from ${name} via Portfolio Website&body=${message} %0D%0A${name}%0D%0A${email}`;
    window.location.href = mailtoLink;
  });
