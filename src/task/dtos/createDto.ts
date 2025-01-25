import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    @Transform(({ value }) => Boolean(value)) // Ensure the status is always a boolean
    status: boolean;
}
