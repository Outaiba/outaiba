var images = [
  "tabouret3.jpeg",
  "tabouret4.jpeg",
  "tabouret5.jpeg",
  "tabouret6.jpeg",
  "tabouret7.jpeg",
];
var img = document.getElementById("img");

let i = 0;
img.src = images[i];

document
  .getElementsByClassName("front")[0]
  .addEventListener("click", function () {
    img.src = images[i];
    i++;
    console.log(i);
    if (i > images.length - 1) {
      i = 0;
    }
  });

document
  .getElementsByClassName("back")[0]
  .addEventListener("click", function () {
    img.src = images[i];
    if (i != 0) {
      i--;
    } else {
      i = images.length;
    }
    console.log(i);
  });
