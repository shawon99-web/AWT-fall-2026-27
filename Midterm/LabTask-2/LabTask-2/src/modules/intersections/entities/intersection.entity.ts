import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("intersections")
export class Intersection {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "double precision" })
  x!: number;

  @Column({ type: "double precision" })
  y!: number;

  @Column({ name: "elevation_m", type: "double precision" })
  elevationM!: number;
}
