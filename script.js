document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.circle');
    function getRandomHexColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
        var circleElements = document.getElementsByClassName('circle');
        var numberOfCircles = circleElements.length;

        console.log('Number of circles:', numberOfCircles);


    function setupGame() {
        document.getElementById("TOHLE").innerText = xxx;
        const correctColor = getRandomHexColor();
        var xxx = correctColor;
        console.warn(xxx)
        document.getElementById("TOHLE").innerText = xxx;
        const correctCircleIndex = Math.floor(Math.random() * numberOfCircles);

        circles.forEach((circle, index) => {

            if (index === correctCircleIndex) {
                circle.style.backgroundColor = correctColor;
                circle.addEventListener('click', () => {
                    alert('Congratulations! You guessed the correct color.');
                    location.reload()
                });
            } else {
                circle.style.backgroundColor = getRandomHexColor();
                circle.addEventListener('click', () => {
                    circle.remove()
                });
            }
        });
    }
    setupGame();
});