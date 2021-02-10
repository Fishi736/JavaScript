var character = document.getElementById("character");
document.getElementById("block");
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = stInterval(function () {
    var characterTop = parseInt(
        window.getComputedStyle(character).getPropertyPriorityValue("top"));
    var blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyPriorityValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";

        alert("You Lose")
    }
}, 10);