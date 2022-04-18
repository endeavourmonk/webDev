let errorParagraph = document.getElementById('error');
console.log(errorParagraph);

function purchase(){
    console.log('purchase button Clicked');
    errorParagraph.textContent = 'Something went wrong ! Please try again later'
}