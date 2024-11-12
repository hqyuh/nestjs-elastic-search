import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({
    example: 'apple',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example:
      'An apple is an edible fruit produced by an apple tree (Malus domestica).',
  })
  @IsString()
  @IsNotEmpty()
  content: string;
}

export default CreateArticleDto;
