const container = document.querySelector('.container');

// create 256 (16*16) child elements
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'pixel');     
    container.appendChild(div);
}

const pixels = document.querySelectorAll('#pixel');

// add event listeners to pixels
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.classList.add('color-fill');
    });
});

const button = document.querySelector('button');

// add event listener to button
button.addEventListener('click', () => {
    // prompt for new grid size
    const answer = prompt('How many squares per side? Limit: 100');
    
    if (answer > 100) {
        alert('Limit: 100');
    } else if (!answer) {
        return;
    } else {
        const children = container.childElementCount;
        
        // remove all pixels within container
        for (let i = 0; i < children; i++) {
            const div = document.querySelector('div>div'); 
            container.removeChild(div);
        }
        
        // add pixels to container with redefined size, add event listeners
        for (let i = 0; i < answer * answer; i++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'pixelNew')
            div.setAttribute('style', `width: ${544/answer}; height: ${544/answer};`);
            container.appendChild(div);
            
            const pixel = document.querySelector('#pixelNew:last-of-type');
            pixel.addEventListener('mouseover', () => {
                pixel.classList.add('color-fill');
            });
        }
        
        // redefine number of grid columns, rows
        const containerStyle = document.querySelector('.container').style;
        containerStyle.gridTemplateColumns = `repeat(${answer}, ${544/answer}px)`;
        containerStyle.gridTemplateRows = `repeat(${answer}, ${544/answer}px)`;
    }
});