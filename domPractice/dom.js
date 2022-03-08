// from https://github.com/LinkedInLearning/vanilla-js-DOM-2876283/blob/main/Chapter1/01_01/cookies.html

document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.getElementById('ingredients');

    Array.prototype.forEach.call(ingredients.children, (tr) => {
        console.log(tr);
    });
});