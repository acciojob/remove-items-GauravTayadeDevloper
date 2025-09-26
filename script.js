//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  let select = document.getElementById("colorSelect");
  let button = document.querySelector("input[type='button']");

  button.addEventListener("click", () => {
    // Remove the currently selected option
    if (select.selectedIndex !== -1) {
      select.remove(select.selectedIndex);
    } else {
      alert("No more options to remove!");
    }
  });
});
