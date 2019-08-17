var http = require("http"),
    PORT = process.env.PORT || 3000,
    express = require("express"),
    socketio = require("socket.io"),
    app = express(),
    server = http.Server(app),
    io = socketio(server);

// server.use(express.static(path.join(__dirname, 'public')));
// server.set('views', path.join(__dirname, 'views'));

io.on("connection", function (socket) {
    console.log("A user is connected");

    socket.on("client msg", function (msg) {
        io.emit("server msg", msg)
    })
});

// app.use(express.static("public"));
// server.set('view engine', 'ejs')
// server.get('/', (req, res) => res.render('/public/index'))
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))

server.listen(PORT, function () {
    console.log("Server started on PORT: " + PORT)
});
