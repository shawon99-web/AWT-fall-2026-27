import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  Max,
  Min,
} from "class-validator";

export class CreateStreetDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  lengthM!: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  runoffFactor!: number;

  @IsNotEmpty()
  @IsUUID()
  startIntersectionId!: string;

  @IsNotEmpty()
  @IsUUID()
  endIntersectionId!: string;
}
