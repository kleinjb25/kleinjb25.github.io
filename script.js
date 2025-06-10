document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_62z7s8i", "template_wqfn8n6", this)
    .then(() => alert("Message sent!"))
    .catch(error => alert("Failed to send message: " + error));
});
function showTab(tabNum) {
    document.getElementById("proj1").style.display = "none";
    document.getElementById("proj2").style.display = "none";
    document.getElementById("proj3").style.display = "none";
    document.getElementById("proj4").style.display = "none";

    document.getElementById("proj" + tabNum).style.display = "block";
  }