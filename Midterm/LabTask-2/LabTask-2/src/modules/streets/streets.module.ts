import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Street } from "@/modules/streets/entities/street.entity";
import { Intersection } from "@/modules/intersections/entities/intersection.entity";
import { StreetsService } from "@/modules/streets/streets.service";
import { StreetsController } from "@/modules/streets/streets.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Street, Intersection])],
  controllers: [StreetsController],
  providers: [StreetsService],
})
export class StreetsModule {}
