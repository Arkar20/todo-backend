import { IsBoolean, IsOptional, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    color?: string;

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => (value !== undefined ? Boolean(value) : false), {
        toClassOnly: true,
    })
    completed: boolean = false;
}
