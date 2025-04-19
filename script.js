document.getElementById("menu-toggle").addEventListener("change", function () {
  console.log("Hamburger menu toggled");

  if (this.checked) {
    console.log("Menu opened");
    // Add a click listener to close the menu when clicking outside
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    console.log("Menu closed");
    // Remove the click listener when the menu is closed
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
});

function closeMenuOnClickOutside(event) {
  const nav = document.querySelector("nav"); // Updated to match the nav element's ID
  const menuToggle = document.getElementById("menu-toggle");

  if (!nav.contains(event.target) && event.target !== menuToggle) {
    menuToggle.checked = false; // Uncheck the toggle
    document.removeEventListener("click", closeMenuOnClickOutside); // Clean up the event listener
  }
}

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

document.querySelectorAll(".nav-right a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute("href").substring(1); // Get the target section ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 80; // Adjust this value to match your nav height or desired offset
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  });
});

document
  .querySelector(".main-button")
  .addEventListener("click", function (event) {
    console.log("Main button clicked"); // Log when the main button is clicked
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute("href").substring(1); // Get the target section ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 80; // Adjust this value to match your nav height or desired offset
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  });
