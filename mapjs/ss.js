//button
document.getElementById("button").addEventListener("click", function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
const dates = new Date();
const currentDate = dates.toLocaleDateString();
const currentTime = dates.toLocaleTimeString();
console.log("CURRENT DATE:" + currentDate);
console.log("CURRENT TIME:" + currentTime);
