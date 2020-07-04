import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const id = Math.random().toString();
    const product = new Product(id, title, description, price);
    this.products.push(product);
    return id;
  }

  getProducts() {
    return [...this.products];
  }

  getProductById(id: string) {
    const [product] = this.findProduct(id);
    return { ...product };
  }

  updateProductById(
    id: string,
    title: string,
    description: string,
    price: number,
  ) {
    const [product, index] = this.findProduct(id);
    const updatedProduct = { ...product };
    if (title) updatedProduct.title = title;
    if (description) updatedProduct.description = description;
    if (price) updatedProduct.price = price;

    this.products[index] = updatedProduct;
  }

  deleteProductById(id: string) {
    const [, index] = this.findProduct(id);
    this.products.splice(index, 1);

  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex(prod => prod.id == id);
    const product = this.products.find(prod => prod.id == id);
    if (!product) {
      throw new NotFoundException('Could not found any product with this id');
    }
    return [product, productIndex];
  }
}
