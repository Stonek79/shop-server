import { IsUUID, IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from "../../constants/order";

export class UpdateOrderDto {
    @IsUUID()
    @IsOptional()
    userId?: string;

    @IsEnum(OrderStatus)
    @IsOptional()
    status?: OrderStatus;
}
