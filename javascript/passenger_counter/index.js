var total;
increment = () => {
    total = document.getElementById('total').innerText;
    total++;
    document.getElementById('total').innerText = total;
}
var previousEnteries = 0
save = () => {document.getElementById('previousENteries').innerText}