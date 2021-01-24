import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(@Body() createProductDto: CreateProductDto) {
    const productInfo = await this.productsService.insertProduct(createProductDto);
    return  productInfo;
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    this.productsService.updateProductById(id, title, description, price);
    return null;
  }

  @Delete(':id')
  removeProductById(@Param('id') id: string) {
    this.productsService.deleteProductById(id);
    return null;
  }
}
