const socket = io();
const massages = document.querySelector('.massages');
const nameBlock = document.querySelector('.name');
const input = document.querySelector('.input');
const form = document.querySelector('.form');

const userName = prompt('Ваше имя:');
nameBlock.innerHTML = `${userName}`;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value){
        socket.emit('chat massage', {
            massage: input.value,
            name: userName
        });
        input.value = '';
    }
});

socket.on('chat massage', data => {
    const item = document.createElement('li');
    item.innerHTML = `<span>${data.name}</span>: ${data.massage}`;
    massages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight)

})
