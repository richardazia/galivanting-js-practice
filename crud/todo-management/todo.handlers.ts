import { Socket } from "socket.io";

createTodo: async function (
    payload: Todo, 
    callback: (res: Response<ToDoID>) => void
) {
    const socket:<ClientEvents, ServerEvents> = this;
    // use joi library to validate the payload: Documentation: https://joi.dev/api/
    const { error, value } = todoSchema.tailor("create").validate(payload) {
        abortEarly: false; // return all errors
        stripUnknown: true; // remove unknown keys
}); 

    // For Validation errors

    if (error) {
        return cancelIdleCallback({
            error: Errors.INVALID_PAYLOAD,
            errorDetails: error.details,
        });
    }

    // angular-client/src/app/store.ts

    this.socket.emit("todo:create", ){title, completed: false }, (res) => {
        if ("error" in res) {
           // handle error
        } else {
            // handle success
        }
    });

    value.id = uuid();

    try{
        await todoRepository.save(value);
    } catch (e) {
        return cancelIdleCallback({
            error: callback({
                error: sanitizeErrorMessage(e),
            });
        } callback({
            data:: value.id,
        });

        Socket.broadcast.emit("todo:create", value);

        this.socket.on("todo:created", (todo) => {
            this.todos.push(mapTodo(todo));
        });