import * as graphql from "@nestjs/graphql";
import { SummaryRequestDto } from "../telegramBot/SummaryRequestDto";
import { TelegramMessageDto } from "../telegramBot/TelegramMessageDto";
import { TelegramBotService } from "./telegrambot.service";

export class TelegramBotResolver {
  constructor(protected readonly service: TelegramBotService) {}

  @graphql.Mutation(() => String)
  async GenerateChatSummary(
    @graphql.Args()
    args: SummaryRequestDto
  ): Promise<string> {
    return this.service.GenerateChatSummary(args);
  }

  @graphql.Mutation(() => String)
  async HandleTelegramMessage(
    @graphql.Args()
    args: TelegramMessageDto
  ): Promise<string> {
    return this.service.HandleTelegramMessage(args);
  }
}
