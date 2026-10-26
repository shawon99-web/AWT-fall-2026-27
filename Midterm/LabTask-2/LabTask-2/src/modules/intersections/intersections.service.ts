import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Intersection } from "@/modules/intersections/entities/intersection.entity";
import { CreateIntersectionDto } from "@/modules/intersections/dto/create-intersection.dto";

@Injectable()
export class IntersectionsService {
  constructor(
    @InjectRepository(Intersection)
    private readonly repo: Repository<Intersection>,
  ) {}

  create(dto: CreateIntersectionDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }
}
