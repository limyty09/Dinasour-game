let character = document.getElementById('character');
let block = document.getElementById('block');
function jump() {
    // 3
    if (character.classList != 'animate') {
        // 1
        character.classList.add('animate');
    }
    // 2
    setTimeout(function () {
        character.classList.remove('animate');
    }, 500);
}

let checkDead = setInterval(function () {
    let characterTop =
        parseInt(window.getComputedStyle(character).
            getPropertyValue('top'));
    let blockLeft =
        parseInt(window.getComputedStyle(block).
            getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 &&
        characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('You lose.')
    }


}, 10);