"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
// Importing necessary modules for the Express application and Socket.IO
// Note: Ensure that the necessary packages are installed in your project
// You can install them using npm or yarn:
// npm install express socket.io @types/express @types/socket.io
// or
// yarn add express socket.io @types/express @types/socket.io
// The above imports are necessary for TypeScript to recognize the types of Express and Socket.IO
// The following code sets up a basic Express server with Socket.IO integration         
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
exports.io = io;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
const PORT = config_1.default.port; // Use the port from config or default to 5003
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
