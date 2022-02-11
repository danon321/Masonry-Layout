




document.addEventListener('DOMContentLoaded', function(){
    let items = document.querySelectorAll(".masonry__item");
    items.forEach(function(item){
        min = Math.ceil(335);
        max = Math.floor(535);
        let random = Math.floor(Math.random() * (max - min + 1)) + min;

        item.style.height = random+'px';
    })
})

const grid = document.querySelector('.container');
const gridComputedStyle = window.getComputedStyle(grid);

// get number of grid rows
const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;

// get number of grid columns
const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;

console.log(gridRowCount, gridColumnCount);