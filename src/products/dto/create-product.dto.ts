import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString, IsNumber } from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';


export class CreateProductDto {
  @ApiModelProperty({
    example: 'CK',
    description: 'title of the product',
    format: 'string',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiModelProperty({
    example: 'CK one',
    description: 'description of the product',
    format: 'string',
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiModelProperty({
    example: 12.92,
    description: 'price of the product',
    format: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly price: string;
}