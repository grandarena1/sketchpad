const DEFAULT_SIZE = 16;
let color = 'black';
let click = true;

function generateGrid(size=DEFAULT_SIZE)
{
    const gridContainer = document.getElementsByClassName('grid')[0];

    const squares = gridContainer.querySelectorAll('div');
    squares.forEach(div => div.remove);

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++)
    {
        let square = document.createElement('div');
        square.addEventListener('mouseover', applyColor);
        square.style.backgroundColor = 'lightgrey';
        gridContainer.appendChild(square);
    }
}

generateGrid();

function changeSize(newSize)
{
    if(newSize >= 2 && newSize <= 100)
    {
        document.querySelector('.error').style.display = 'none';
        generateGrid(newSize);
    }
    else
    {
        document.querySelector('.error').style.display = 'flex';
    }
}

function applyColor()
{
    if(click)
    {
        if(color === 'random')
        {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else
        {
            this.style.backgroundColor = color;
        }
    }
}

function changeSquareColor(selection)
{
    color = selection;
}

function resetGrid()
{
    const gridContainer = document.getElementsByClassName('grid')[0];
    const squares = gridContainer.querySelectorAll('div');
    squares.forEach(div => div.style.backgroundColor='lightgrey');
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON')
    {
        click = !click;

        if(click)
        {
            document.querySelector('.mode').textContent = "Mode: Coloring";
        }
        else
        {
            document.querySelector('.mode').textContent = "Mode: Not Coloring";
        }
    }
});