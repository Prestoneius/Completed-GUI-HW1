/*
  File: js/script.js
  GUI Assignment: HW1
  Creator: Preston Wilson
  Date Created: May 25, 2026
  Description: This is a javascrip file that updates the footer of the main page.
*/

// Function to update the footer after the HTML document has loaded.
document.addEventListener("DOMContentLoaded", function () {
  var dateElement = document.getElementById("last-updated");
  var today = new Date();

  if (dateElement) {
    dateElement.textContent = "Page loaded on " + today.toLocaleDateString() + ".";
  }
});
