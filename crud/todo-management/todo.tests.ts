import { Socket } from "socket.io";

beforeEach((done) => {
    const partialDone = createPartialDone(2, done);

    httpServer = createServer();
    todoRepository = new InMemoryTodoRepository();

    createApplication(httpServer, {
        todoRepository,
    });

    //... other setup code

});

httpServer.Listen(() => {
    const port = (httpServer.address() as AddressInfo).port;
    Socket = io(`http://localhost:${port}`);
    Socket.on("connect", partialDone);

    otherSocket = io(`http://localhost:${port}`);	
    otherSocket.on("connect", partialDone);
});

// Documentation: https://mochajs.org/#hooks

describe("create todo", () => {
    it("should create a todo", (done) => {
        const partialDone = createPartialDone(2, done);

        // send payload
        socket.emit(
            "todo:create",
            {
                title: "Study JavaScript",
                completed: false,
            },
            async (res) => {
                if("error" in res) {
                    return done(new Error("I broke"));
                }
                expect(res.data).to.be.a("string");

                // check the entity was created and stored
                const storedEntity = await todoRepository.findById(res.data);
                expect(storedEntity).to.eql({
                    id: res.data,
                    title: "Study JavaScript",
                    completed: false,
                });

                partialDone();
            }
        );

        // check the entity was created and stored
        otherSocket.on("todo:created", (todo) => {
            expect(todo.id).to.be.a("string");
            expect(todo.title).to.eql("Study JavaScript");
            expect(todo.completed).to.eql(false);
            partialDone();
        });
    });
});

// Test for when it breaks

describe("create todo", () => {
    it("should fail with an invalid entity", (done) => {
        const incompleteTodo = {
            completed: false,
            description: true, 
        };
        expect(res.error).to.eql("invalid payload");
        // check the details of the validation error
        expect(res.errorDetails).to.eql([
            {
                message: "\"title\" is required",
                path: ["title"],
                type: "any.required",
            },
        ]);
        done();
    });
    otherSocket.on("todo:created", () => {
        done(new Error("I broke"));
    });
});


