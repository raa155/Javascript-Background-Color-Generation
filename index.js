const btn = document.querySelector('button');

btn.addEventListener("click", ()=>
{
    changeColor(getRandomColor());
})

function getRandomColor()
{
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
    return bgColor;
}

function changeColor(color)
{
    document.body.style.background = color;
}