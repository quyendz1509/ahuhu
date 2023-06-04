const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const router = require('./router');

// Sử dụng router
app.use('/', router);

// Kết nối Socket.io
io.on('connection', (socket) => {

  socket.on('start-timer', () => {
    // Gửi sự kiện 'timer-started' tới tất cả các client
    let endTime = 20;
     io.emit('start-progress', endTime);
     console.log("Started",endTime)
  });

  socket.on('pause-timer', () => {
    // Gửi sự kiện 'timer-paused' tới tất cả các client
    io.emit('timer-paused');
  });

  socket.on('resume-timer', () => {
    // Gửi sự kiện 'timer-resumed' tới tất cả các client
    io.emit('timer-resumed');
  });

  socket.on('reload-page', () => {
    // Gửi sự kiện 'reload-page' tới tất cả các client
    io.emit('reload-content');
     console.log("reload")
  });

});

// Khởi động server
server.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000/');
});
