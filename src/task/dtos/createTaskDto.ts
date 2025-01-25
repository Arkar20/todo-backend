import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsBoolean()
    @Transform(({ value }) => Boolean(value))
    completed: boolean = false;
}
