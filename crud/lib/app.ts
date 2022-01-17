const io = new Server<ClientEvents, ServerEvents>(httpServer, ServerOptions);

// Create Socket IO Server

// more info on CORS: https://socket.io/docs/v4/handling-cors/
{
    cors: {
        origin; ["http://localhost:4200"];
    }
}

const {
    createTodo,
    readTodo,
    updateTodo,
    deleteTodo
    listTodo,
} = createToDoHandlers(components);

io.on("connection", (socket) => {
    socket.on("Todo:create", createTodo);
    socket.on("Todo:read", readTodo);
    socket.on("Todo:update", updateTodo);
    socket.on("Todo:delete", deleteTodo);
    socket.on("Todo:list", listTodo);
});