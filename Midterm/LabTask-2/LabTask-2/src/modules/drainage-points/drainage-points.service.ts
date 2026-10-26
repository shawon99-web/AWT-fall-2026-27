import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DrainagePoint } from "@/modules/drainage-points/entities/drainage-point.entity";
import { Street } from "@/modules/streets/entities/street.entity";
import { CreateDrainagePointDto } from "@/modules/drainage-points/dto/create-drainage-point.dto";

@Injectable()
export class DrainagePointsService {
  constructor(
    @InjectRepository(DrainagePoint)
    private readonly repo: Repository<DrainagePoint>,
    @InjectRepository(Street)
    private readonly streets: Repository<Street>,
  ) {}

  async create(dto: CreateDrainagePointDto) {
    const street = await this.streets.findOneBy({ id: dto.streetId });
    if (!street) throw new BadRequestException("Street does not exist");
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }
}
