import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SummaryModuleBase } from "./base/summary.module.base";
import { SummaryService } from "./summary.service";
import { SummaryController } from "./summary.controller";
import { SummaryResolver } from "./summary.resolver";

@Module({
  imports: [SummaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [SummaryController],
  providers: [SummaryService, SummaryResolver],
  exports: [SummaryService],
})
export class SummaryModule {}
