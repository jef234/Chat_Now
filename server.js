let http = require("http"),
    PORT = process.env.PORT || 3000,
    express = require("express"),
    socketio = require("socket.io"),
    app = express(),
    server = http.createServer(app);

server.use(express.static(path.join(__dirname, 'public')));
server.set('views', path.join(__dirname, 'views'));

let io = socketio(server);

io.on("connection", function (socket) {
    console.log("A user is connected");

    socket.on("client msg", function (msg) {
        // console.log(msg)
        io.emit("server msg", msg)
    })
});

app.use(express.static("public"));

server.listen(PORT, function () {
    console.log("Server started on PORT: " + PORT)
});