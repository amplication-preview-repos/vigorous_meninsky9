import { Injectable } from "@nestjs/common";
import { SummaryRequestDto } from "../telegramBot/SummaryRequestDto";
import { TelegramMessageDto } from "../telegramBot/TelegramMessageDto";

@Injectable()
export class TelegramBotService {
  constructor() {}
  async GenerateChatSummary(args: SummaryRequestDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async HandleTelegramMessage(args: TelegramMessageDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
