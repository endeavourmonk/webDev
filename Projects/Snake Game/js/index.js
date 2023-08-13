let userName = document.getElementById('NameOfUser');
const SubmitBtn = document.getElementById('SumbitAndGameStart');
Name = localStorage.getItem("playerName");

// Setting name on screen from localstorage
if (Name !== null) {
    userName.outerHTML = '';
    let namePlate = document.getElementById('askName');
    namePlate.innerHTML = `<p> ${Name.substr(1, Name.length - 2)}</p>`;
    namePlate.firstElementChild.classList.add("namePlate");
}

// function to update name in local storage and redirect to gamepage
function updateNameAndGamePage() {
    if (Name == null) {
        let name = userName.value;
        localStorage.setItem("playerName", JSON.stringify(name));
    }
    window.location.href = 'main.html';
}

// when enter key is pressed inside input 
userName.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        updateNameAndGamePage();
    }
})

// if button is clicked
SubmitBtn.addEventListener("click", updateNameAndGamePage);