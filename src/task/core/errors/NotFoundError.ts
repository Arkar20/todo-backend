import ErrorHandler from "./AbstractErrorHandler";

class NotFoundError extends ErrorHandler {
    type = "404 Not Found";
    statusCode = 404;

    constructor(public message: string) {
        super();
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serialize() {
        return { messages: [this.message] };
    }
}

export { NotFoundError };
