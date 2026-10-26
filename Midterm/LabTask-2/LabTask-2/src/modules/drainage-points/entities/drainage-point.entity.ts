import {
  Check,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Street } from "@/modules/streets/entities/street.entity";

export enum DrainageStatus {
  WORKING = "Working",
  BLOCKED = "Blocked",
}

@Entity("drainage_points")
@Check("CHK_drainage_capacity", '"capacity" >= 0')
export class DrainagePoint {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 100 })
  label!: string;

  @Column({ type: "double precision" })
  capacity!: number;

  @Column({
    name: "default_status",
    type: "enum",
    enum: DrainageStatus,
    default: DrainageStatus.WORKING,
  })
  defaultStatus!: DrainageStatus;

  @Index()
  @Column({ name: "street_id", type: "uuid" })
  streetId!: string;

  @ManyToOne(() => Street, { nullable: false, onDelete: "CASCADE" })
  @JoinColumn({ name: "street_id" })
  street!: Street;
}
