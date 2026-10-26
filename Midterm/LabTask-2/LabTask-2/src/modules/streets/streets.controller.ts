import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { StreetsService } from "@/modules/streets/streets.service";
import { CreateStreetDto } from "@/modules/streets/dto/create-street.dto";

@ApiTags("Streets")
@Controller("streets")
export class StreetsController {
  constructor(private readonly service: StreetsService) {}

  @Post()
  create(@Body() dto: CreateStreetDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
