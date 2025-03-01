//button
document.getElementById("button").addEventListener("click", function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
//date
const date = new Date();
document.getElementById("dates").innerHTML = date.toDateString();

//button-loop
const allbtnn = document.getElementsByClassName("allbtn");
for (let i = 0; i < allbtnn.length; i++) {
  const button = allbtnn[i];
  button.addEventListener("click", function (event) {
    const click = event.target.innerHTML;
    let grandParent = event.target.parentElement.parentElement.parentElement;
    let child = grandParent.querySelector(".h1txt");
    let title = child.textContent;
    //six and tweentythree

    const six = parseInt(document.getElementById("six").innerText);
    const tweentythree = parseInt(
      document.getElementById("tweentythree").innerText
    );
    const tweentythreeAdd = tweentythree + 1;
    const sixAdd = six - 1;
    document.getElementById("tweentythree").innerText = tweentythreeAdd;
    document.getElementById("six").innerText = sixAdd;
    this.disabled = true;
    this.style.backgroundColor = "rgba(55, 82, 253, 0.21)";
    
    if (sixAdd === 0) {
      alert("Board updated Successfully");
      alert("congrates!!! You have completed all the current task");
    } else {
      alert("Board updated Successfully");
    }
    
    //clear-all
    const history = document.getElementById("clear");
    const p = document.createElement("p");
    p.innerHTML = `
                       <p class="bg-[#F4F7FF] p-3 text-gray-500 mt-0 my-3  rounded-xl text-sm">You have Complete The Task
                          ${title} at 12:48:15 PM
                      </p>              
        `;
    history.appendChild(p);

    document.getElementById("history").addEventListener("click", function () {
      history.innerHTML = "";
    });
  });
}


 
