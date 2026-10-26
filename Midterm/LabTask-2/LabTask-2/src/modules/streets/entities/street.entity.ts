import {
  Check,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Intersection } from "@/modules/intersections/entities/intersection.entity";

@Entity("streets")
@Check("CHK_street_length", '"length_m" > 0')
@Check("CHK_street_runoff", '"runoff_factor" >= 0 AND "runoff_factor" <= 1')
@Check(
  "CHK_street_endpoints",
  '"start_intersection_id" <> "end_intersection_id"',
)
export class Street {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 100 })
  name!: string;

  @Column({ name: "length_m", type: "double precision" })
  lengthM!: number;

  @Column({ name: "runoff_factor", type: "double precision" })
  runoffFactor!: number;

  @Index()
  @Column({ name: "start_intersection_id", type: "uuid" })
  startIntersectionId!: string;

  @Index()
  @Column({ name: "end_intersection_id", type: "uuid" })
  endIntersectionId!: string;

  @ManyToOne(() => Intersection, { nullable: false, onDelete: "RESTRICT" })
  @JoinColumn({ name: "start_intersection_id" })
  startIntersection!: Intersection;

  @ManyToOne(() => Intersection, { nullable: false, onDelete: "RESTRICT" })
  @JoinColumn({ name: "end_intersection_id" })
  endIntersection!: Intersection;
}
