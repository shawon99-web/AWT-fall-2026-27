import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Min,
} from "class-validator";
import { DrainageStatus } from "@/modules/drainage-points/entities/drainage-point.entity";

export class CreateDrainagePointDto {
  @IsNotEmpty()
  @IsString()
  label!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  capacity!: number;

  @IsNotEmpty()
  @IsEnum(DrainageStatus)
  defaultStatus!: DrainageStatus;

  @IsNotEmpty()
  @IsUUID()
  streetId!: string;
}
