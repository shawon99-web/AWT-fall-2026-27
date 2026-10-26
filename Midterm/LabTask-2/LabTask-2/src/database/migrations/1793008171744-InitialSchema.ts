import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1793008171744 implements MigrationInterface {
    name = 'InitialSchema1793008171744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "intersections" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "x" double precision NOT NULL, "y" double precision NOT NULL, "elevation_m" double precision NOT NULL, CONSTRAINT "PK_cf5b95442214d34b52ed8dd17f8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "streets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "length_m" double precision NOT NULL, "runoff_factor" double precision NOT NULL, "start_intersection_id" uuid NOT NULL, "end_intersection_id" uuid NOT NULL, CONSTRAINT "CHK_street_endpoints" CHECK ("start_intersection_id" <> "end_intersection_id"), CONSTRAINT "CHK_street_runoff" CHECK ("runoff_factor" >= 0 AND "runoff_factor" <= 1), CONSTRAINT "CHK_street_length" CHECK ("length_m" > 0), CONSTRAINT "PK_e375a3a3ebbc18cf91e72374d94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5ac8e0e04e3d014d50c1fad107" ON "streets" ("start_intersection_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_65deae6387180229034a370c9a" ON "streets" ("end_intersection_id") `);
        await queryRunner.query(`CREATE TYPE "public"."drainage_points_default_status_enum" AS ENUM('Working', 'Blocked')`);
        await queryRunner.query(`CREATE TABLE "drainage_points" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "label" character varying(100) NOT NULL, "capacity" double precision NOT NULL, "default_status" "public"."drainage_points_default_status_enum" NOT NULL DEFAULT 'Working', "street_id" uuid NOT NULL, CONSTRAINT "CHK_drainage_capacity" CHECK ("capacity" >= 0), CONSTRAINT "PK_099cd8e0f3ea02fd6d178c31251" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_97bb9f2d74d2bb45c314cee9c9" ON "drainage_points" ("street_id") `);
        await queryRunner.query(`ALTER TABLE "streets" ADD CONSTRAINT "FK_5ac8e0e04e3d014d50c1fad1071" FOREIGN KEY ("start_intersection_id") REFERENCES "intersections"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "streets" ADD CONSTRAINT "FK_65deae6387180229034a370c9aa" FOREIGN KEY ("end_intersection_id") REFERENCES "intersections"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "drainage_points" ADD CONSTRAINT "FK_97bb9f2d74d2bb45c314cee9c9b" FOREIGN KEY ("street_id") REFERENCES "streets"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "drainage_points" DROP CONSTRAINT "FK_97bb9f2d74d2bb45c314cee9c9b"`);
        await queryRunner.query(`ALTER TABLE "streets" DROP CONSTRAINT "FK_65deae6387180229034a370c9aa"`);
        await queryRunner.query(`ALTER TABLE "streets" DROP CONSTRAINT "FK_5ac8e0e04e3d014d50c1fad1071"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97bb9f2d74d2bb45c314cee9c9"`);
        await queryRunner.query(`DROP TABLE "drainage_points"`);
        await queryRunner.query(`DROP TYPE "public"."drainage_points_default_status_enum"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_65deae6387180229034a370c9a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5ac8e0e04e3d014d50c1fad107"`);
        await queryRunner.query(`DROP TABLE "streets"`);
        await queryRunner.query(`DROP TABLE "intersections"`);
    }

}
