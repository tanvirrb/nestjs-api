import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto);
    const product = await newProduct.save();
    return product;
  }

//   getProducts() {
//     return [...this.products];
//   }
//
  getProductById(id: string) {
    const [product] = this.findProduct(id);
    return { ...product };
  }
//
//   updateProductById(
//     id: string,
//     title: string,
//     description: string,
//     price: number,
//   ) {
//     const [product, index] = this.findProduct(id);
//     const updatedProduct = { ...product };
//     if (title) updatedProduct.title = title;
//     if (description) updatedProduct.description = description;
//     if (price) updatedProduct.price = price;
//
//     this.products[index] = updatedProduct;
//   }
//
//   deleteProductById(id: string) {
//     const [, index] = this.findProduct(id);
//     this.products.splice(index, 1);
//   }
//
//   private findProduct(id: string): [Product, number] {
//     const productIndex = this.products.findIndex(prod => prod.id == id);
//     const product = this.products.find(prod => prod.id == id);
//     if (!product) {
//       throw new NotFoundException('Could not found any product with this id');
//     }
//     return [product, productIndex];
//   }
}
