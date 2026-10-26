import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DrainagePoint } from "@/modules/drainage-points/entities/drainage-point.entity";
import { Street } from "@/modules/streets/entities/street.entity";
import { DrainagePointsService } from "@/modules/drainage-points/drainage-points.service";
import { DrainagePointsController } from "@/modules/drainage-points/drainage-points.controller";

@Module({
  imports: [TypeOrmModule.forFeature([DrainagePoint, Street])],
  controllers: [DrainagePointsController],
  providers: [DrainagePointsService],
})
export class DrainagePointsModule {}
