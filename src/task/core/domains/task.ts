export class Task {
    constructor(
        public id?: number,
        public title?: string,
        public color?: string,
        public completed?: boolean,
        public createdAt?: Date,
        public deletedAt?: Date
    ) {}
}
