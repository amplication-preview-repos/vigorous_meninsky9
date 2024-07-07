import { Module } from "@nestjs/common";
import { TelegramBotService } from "./telegrambot.service";
import { TelegramBotController } from "./telegrambot.controller";
import { TelegramBotResolver } from "./telegrambot.resolver";

@Module({
  controllers: [TelegramBotController],
  providers: [TelegramBotService, TelegramBotResolver],
  exports: [TelegramBotService],
})
export class TelegramBotModule {}
