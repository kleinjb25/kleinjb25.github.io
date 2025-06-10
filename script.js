// this is used in the contact page to send the message to my email account
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_62z7s8i", "template_wqfn8n6", this)
    .then(() => alert("Message sent!"))
    .catch(error => alert("Failed to send message: " + error));
});

// this is used in the projects page to hide all the other projects and only show the one the user selected 
function showTab(tabNum) {
    document.getElementById("proj1").style.display = "none";
    document.getElementById("proj2").style.display = "none";
    document.getElementById("proj3").style.display = "none";
    document.getElementById("proj4").style.display = "none";

    document.getElementById("proj" + tabNum).style.display = "block";
}