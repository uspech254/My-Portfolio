// Change the main heading.
const changeBtn = document.getElementById("changeBtn");
if (changeBtn) {
  changeBtn.onclick = function() {
    const mainHeading = document.getElementById("mainHeading");
    if (mainHeading) mainHeading.textContent = "Hello, I'm Dorcas Ndunge!";
  };
}

// Greet the visitor.
const greetBtn = document.getElementById("greetBtn");
if (greetBtn) {
  greetBtn.onclick = function() {
    const nameInput = document.getElementById("visitorName");
    const message = document.getElementById("Message");
    if (!nameInput || !message) return;

    const name = nameInput.value.trim();
    message.textContent = name
      ? `Hello, ${name}! Welcome to my portfolio`
      : "Please enter your name";
  };
}

// Toggle dark mode.
const dimBtn = document.getElementById("dimBtn");
if (dimBtn) {
  dimBtn.onclick = function() {
    document.body.classList.toggle("dark");
  };
}

// Remove the project card from either delete button.
function deleteProject() {
  const card = document.querySelector(".project-card");
  if (card) card.remove();
}

const deleteBtn = document.getElementById("deleteBtn");
const deleteProjectBtn = document.getElementById("deleteProjectBtn");
if (deleteBtn) deleteBtn.onclick = deleteProject;
if (deleteProjectBtn) {
  deleteProjectBtn.onclick = function() {
    deleteProject();
    alert("Project deleted!");
  };
}

// Delete the project card when the Delete key is pressed.
document.addEventListener("keydown", function(event) {
  if (event.key === "Delete") deleteProject();
});
  

    
  


