const express = require('express');

const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/assets'))

const PORT = process.env.PORT || 80;

io.on('connection', (socket) => {
    socket.on('chat massage', data => {
        io.emit('chat massage', {
            massage: data.massage,
            name: data.name
        })
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

http.listen(PORT, () => {
    console.log('server has been started...')
})