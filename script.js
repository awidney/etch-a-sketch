const container = document.querySelector('.container');

// inject 16x16(256) child <div> elements into container
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'cell');     
    div.textContent = 'cell';
    container.appendChild(div);
}