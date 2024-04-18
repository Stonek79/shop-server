import { IsUUID, IsEnum } from 'class-validator';
import { OrderStatus } from "../../constants/order";

export class CreateOrderDto {
    @IsUUID()
    userId: string;

    @IsEnum(OrderStatus)
    status: OrderStatus;
}
