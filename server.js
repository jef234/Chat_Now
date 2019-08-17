var http = require("http"),
    PORT = process.env.PORT || 3000,
    express = require("express"),
    socketio = require("socket.io"),
    app = express(),
    server = http.Server(app),
    io = socketio(server);

io.on("connection", function (socket) {
    console.log("A user is connected");

    socket.on("client msg", function (msg,userName) {
        io.emit("server msg", msg, userName)
    })
});

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))

server.listen(PORT, function () {
    console.log("Server started on PORT: " + PORT)
});
