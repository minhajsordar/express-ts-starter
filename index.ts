import express from 'express';
import { Request, Response } from 'express';
// Importing necessary modules for the Express application and Socket.IO
// Note: Ensure that the necessary packages are installed in your project
// You can install them using npm or yarn:
// npm install express socket.io @types/express @types/socket.io
// or
// yarn add express socket.io @types/express @types/socket.io
// The above imports are necessary for TypeScript to recognize the types of Express and Socket.IO
// The following code sets up a basic Express server with Socket.IO integration         
import { createServer } from 'http';
import { Server } from 'socket.io';
import config from '@/config';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
const PORT = config.port; // Use the port from config or default to 5003
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;
export { io }; // Exporting io for use in other modules if needed