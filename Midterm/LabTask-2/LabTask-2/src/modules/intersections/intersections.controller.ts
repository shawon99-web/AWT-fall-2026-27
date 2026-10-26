import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IntersectionsService } from "@/modules/intersections/intersections.service";
import { CreateIntersectionDto } from "@/modules/intersections/dto/create-intersection.dto";

@ApiTags("Intersections")
@Controller("intersections")
export class IntersectionsController {
  constructor(private readonly service: IntersectionsService) {}

  @Post()
  create(@Body() dto: CreateIntersectionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
