// from https://github.com/LinkedInLearning/vanilla-js-DOM-2876283/blob/main/Chapter1/01_01/cookies.html

document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.getElementById('ingredients');

    let total = 0;

    Array.prototype.forEach.call(ingredients.children, (tr) => {
        const td = tr.children[1];

        if (tr.id == 'totals') {
            console.log('In Totals row');
            td.innerText = total;
        } else {
            const weight = parseFloat(td.innerText);
            total += weight;
            console.log(tr, total);
        }
    });
});