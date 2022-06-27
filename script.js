//Selects ALL "panel"
const panels = document.querySelectorAll(".panel");

//Adds "active" to the "clicked" panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    //Function that removes "active" on ALL the panels
    removeActiveClasses();
    //adds "active" to the chosen panel
    panel.classList.add("active");
  });
});

//Removes "active" on all the panels
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
