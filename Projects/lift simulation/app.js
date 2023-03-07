let totalFloors = document.getElementById("NoOfFloors");
let totalLifts = document.getElementById("NoOfLifts");
let displayArea = document.getElementById("displayArea");
let submit = document.getElementById("Submit");
let liftReqQueue = new Array();

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

// getting all lifts and then filtering all free ones and then finding the nearest lift and finally moving to destination
function moveLiftTo(destinationFLoor) {
  const lifts = Array.from(document.getElementsByClassName("lift"));
  const liftAv = lifts.filter((lift) => lift.dataset.status === "free");
  if (liftAv.length === 0) {
    console.log("not av lifts");
    return false;
  }

  let distance = Number.MAX_VALUE;
  let liftToMove;
  for (const i of liftAv) {
    const liftPosition = Number(i.dataset.position);
    if (Math.abs(liftPosition - destinationFLoor) < distance) {
      distance = Math.abs(liftPosition - destinationFLoor);
      liftToMove = i;
    }
  }
  liftToMove.dataset.status = "busy";
  liftToMove.style.transform = `translateY( ${-154 * destinationFLoor}px)`;
  liftToMove.dataset.position = destinationFLoor;
  liftToMove.style.transition = `all ${2 * Math.abs(distance)}s linear`;
  setTimeout(() => {
    animateDoor(liftToMove);
  }, 2000 * distance);
  setTimeout(() => {
    liftToMove.dataset.status = "free";
  }, 2000 * distance + 5500);
  return true;
}

function animateDoor(lift) {
  lift.children[0].classList.add("leftDoorSlide");
  lift.children[1].classList.add("rightDoorSlide");
  setTimeout(() => {
    lift.children[0].classList.remove("leftDoorSlide");
    lift.children[1].classList.remove("rightDoorSlide");
  }, 2500);
}

// cheking for all button click events
addEventListener("click", (e) => {
  if (
    e.target.classList.contains("liftUpButton") ||
    e.target.classList.contains("liftDownButton")
  ) {
    liftReqQueue.push(e.target.dataset.floorno);
    console.log("reqQ = " + liftReqQueue);
  }
});

// regularly checking for requests in queue and fulfilling when lift free
setInterval(() => {
  if (liftReqQueue.length) {
    const moveToFloor = liftReqQueue[0];
    const res = moveLiftTo(moveToFloor);
    if (res) liftReqQueue.shift();
  }
  return;
}, 1000);

submit.addEventListener("click", () => {
  if (totalFloors > 30 || totalLifts > 10) {
    alert("Sorry please enter floor upto 30 and lift upto 10");
    return;
  }
  let floors = generateFloors(totalFloors.value);
  displayArea.innerHTML = floors;
  let form = document.getElementById("form-container");
  form.remove();
});
