import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TelegramBotService } from "./telegrambot.service";
import { TelegramMessageDto } from "../telegramBot/TelegramMessageDto";

@swagger.ApiTags("telegramBots")
@common.Controller("telegramBots")
export class TelegramBotController {
  constructor(protected readonly service: TelegramBotService) {}

  @common.Post("/generate-summary")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateChatSummary(
    @common.Body()
    body: TelegramMessageDto
  ): Promise<string> {
        return this.service.GenerateChatSummary(body);
      }

  @common.Post("/handle-message")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleTelegramMessage(
    @common.Body()
    body: TelegramMessageDto
  ): Promise<string> {
        return this.service.HandleTelegramMessage(body);
      }
}
