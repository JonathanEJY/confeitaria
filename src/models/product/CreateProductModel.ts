import prisma from "../../../prisma/client";
import type { Product } from "../../types";

class CreateProductModel {
  async createProduct(data: Product){
    const newProduct = await prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        unit: data.unit,
        userId: data.userId,
        stockId: data.stockId, // 
      },
    });
    return newProduct;
  }
}

export default CreateProductModel;