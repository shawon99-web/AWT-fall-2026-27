import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateIntersectionDto {
  @IsNotEmpty()
  @IsNumber()
  x!: number;

  @IsNotEmpty()
  @IsNumber()
  y!: number;

  @IsNotEmpty()
  @IsNumber()
  elevationM!: number;
}
