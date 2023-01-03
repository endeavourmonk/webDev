function updateName(){
    localStorage.setItem("playerName", JSON.stringify(NameOfUser.value));
}

playerName = localStorage.getItem("playerName");
if (playerName !== null) {
    userName.innerHTML = `<p>${playerName}</p>`;
    NameOfUser.remove();
}
