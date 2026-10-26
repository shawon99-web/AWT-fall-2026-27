import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Street } from "@/modules/streets/entities/street.entity";
import { Intersection } from "@/modules/intersections/entities/intersection.entity";
import { CreateStreetDto } from "@/modules/streets/dto/create-street.dto";

@Injectable()
export class StreetsService {
  constructor(
    @InjectRepository(Street)
    private readonly repo: Repository<Street>,
    @InjectRepository(Intersection)
    private readonly intersections: Repository<Intersection>,
  ) {}

  async create(dto: CreateStreetDto) {
    if (dto.startIntersectionId === dto.endIntersectionId) {
      throw new BadRequestException(
        "Start and end intersections must be different",
      );
    }
    const found = await this.intersections.count({
      where: { id: In([dto.startIntersectionId, dto.endIntersectionId]) },
    });
    if (found !== 2) {
      throw new BadRequestException("Start or end intersection does not exist");
    }
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }
}
