import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DrainagePointsService } from "@/modules/drainage-points/drainage-points.service";
import { CreateDrainagePointDto } from "@/modules/drainage-points/dto/create-drainage-point.dto";

@ApiTags("Drainage Points")
@Controller("drainage-points")
export class DrainagePointsController {
  constructor(private readonly service: DrainagePointsService) {}

  @Post()
  create(@Body() dto: CreateDrainagePointDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
