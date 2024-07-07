import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { TelegramMessageDto } from "./TelegramMessageDto";

@ArgsType()
class SummaryRequestDto {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    chatId!: number;

    @Field(() => [TelegramMessageDto])
    @ApiProperty({
        required: true,
        type: () => [TelegramMessageDto]
    })
    @Type(() => TelegramMessageDto)
    messages!: TelegramMessageDto;
}

export { SummaryRequestDto as SummaryRequestDto };