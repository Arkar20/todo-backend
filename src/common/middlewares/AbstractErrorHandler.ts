abstract class ErrorHandler extends Error {
    abstract type: string;
    abstract statusCode: number;

    constructor() {
        super();

        Object.setPrototypeOf(this, ErrorHandler.prototype);
    }

    abstract serialize(): { message: string }[] | { message: string };
}

export default ErrorHandler;
