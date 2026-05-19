import OrderRepository
from "../repositories/OrderRepository.js";

import OrderFactory
from "../../../shared/factories/OrderFactory.js";

export default class OrderService {

    constructor() {

        this.orderRepository =
            new OrderRepository();

    }

    async createOrder() {

        const order =
            OrderFactory.create(
                "Gabriel",
                "Pizza",
                50
            );

        await this.orderRepository.save(order);

        return order;

    }

}