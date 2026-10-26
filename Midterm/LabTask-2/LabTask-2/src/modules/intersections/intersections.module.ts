import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Intersection } from "@/modules/intersections/entities/intersection.entity";
import { IntersectionsService } from "@/modules/intersections/intersections.service";
import { IntersectionsController } from "@/modules/intersections/intersections.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Intersection])],
  controllers: [IntersectionsController],
  providers: [IntersectionsService],
})
export class IntersectionsModule {}
