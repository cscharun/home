var animationDelay = 2500;
    
function switchWord(currentWord, nextWord) {
    currentWord.classList.remove('visible');
    nextWord.classList.add('visible');
}

function takeNext(currentWord) {
    return (currentWord.nextElementSibling) ? currentWord.nextElementSibling : currentWord.parentNode.firstElementChild;
}

function toggleWord(currentWord) {
    var nextWord = takeNext(currentWord);
    switchWord(currentWord, nextWord);
    setTimeout(function(){ toggleWord(nextWord) }, animationDelay);
}

setTimeout(function(){ toggleWord(document.getElementsByClassName("carousel-word").item(0)) }, animationDelay);