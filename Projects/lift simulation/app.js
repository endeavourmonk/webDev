let totalFloors = document.getElementById("NoOfFloors");
let totalLifts = document.getElementById("NoOfLifts");
let displayArea = document.getElementById("displayArea");
let submit = document.getElementById("Submit");

// generating floors
function generateFloors(totalFloor) {
  let floor = ``;
  for (let floorNo = totalFloor - 1; floorNo >= 0; floorNo--) {
    floor += `
    <div class="floorContainer">
    <div class="floor" id="floor${floorNo}">
      ${floorNo === 0 ? generateLifts(totalLifts.value) : ""}
      <span>Floor - ${floorNo}</span>
      <div class="liftButton">
        ${
          floorNo === totalFloor - 1
            ? ``
            : `<i class="lift-btn fa-solid fa-square-caret-up liftUpButton" data-floorNo="${floorNo}"></i>`
        }
        ${
          floorNo === 0
            ? ``
            : `<i class="lift-btn fa-solid fa-square-caret-down liftDownButton" data-floorNo="${floorNo}"></i>`
        }
      </div>
    </div>
    <div class="boundary"></div>
  </div>
 
    `;
  }
  console.log("generateFloors called");
  return floor;
}

// generating lifts
function generateLifts(totalLifts) {
  let lift = `<div class="liftContainer">`;
  for (let liftNo = 1; liftNo <= totalLifts; ++liftNo) {
    lift += `
    <div class="lift" id="lift${liftNo}" data-position="${0}" data-status="${"free"}">
      <div class="left-door"><span class="lift-no">${liftNo}</span></div>
      <div class="right-door"></div>
    </div>  
    `;
  }
  lift += `</div>`;
  return lift;
}

function moveLiftTo(destinationFLoor) {
  const lifts = Array.from(document.getElementsByClassName("lift"));
  // console.log(lifts);
  const liftAv = lifts.filter((lift) => lift.dataset.status === "free");
  // console.log("free lifts: " + liftAv);
  let distance = Number.MAX_VALUE;
  let liftToMove;
  for (const i of liftAv) {
    const liftPosition = Number(i.dataset.position);
    if (Math.abs(liftPosition - destinationFLoor) < distance) {
      distance = Math.abs(liftPosition - destinationFLoor);
      liftToMove = i;
    }
  }
  liftToMove.style.transform = `translateY( ${-154 * destinationFLoor}px)`;
  liftToMove.dataset.position = destinationFLoor;
  console.log("lift - pos - " + liftToMove.dataset.position);
  liftToMove.dataset.status = "busy";
  setTimeout(() => {
    liftToMove.dataset.status = "free";
  }, 2000 * distance);
}

addEventListener("click", (e) => {
  if (
    e.target.classList.contains("liftUpButton") ||
    e.target.classList.contains("liftDownButton")
  ) {
    // console.log("clidked btn");
    console.log("floor - " + e.target.dataset.floorno);
    moveLiftTo(e.target.dataset.floorno);
  }
});

submit.addEventListener("click", () => {
  let floors = generateFloors(totalFloors.value);
  displayArea.innerHTML = floors;
  console.log("submit");
  let form = document.getElementById("form-container");
  form.remove();
});
