import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { IntersectionsModule } from "@/modules/intersections/intersections.module";
import { StreetsModule } from "@/modules/streets/streets.module";
import { DrainagePointsModule } from "@/modules/drainage-points/drainage-points.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
    // BullModule (Redis) removed: not needed for this task
    IntersectionsModule,
    StreetsModule,
    DrainagePointsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
