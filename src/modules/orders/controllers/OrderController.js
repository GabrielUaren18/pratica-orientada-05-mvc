import OrderService from "../services/OrderService.js";

import AuthMiddleware
from "../../../shared/middlewares/AuthMiddleware.js";

import Observer
from "../../../shared/utils/Observer.js";

export default class OrderController {

    constructor() {

        this.orderService =
            new OrderService();

        this.observer =
            new Observer();

    }

    async createOrder() {

        AuthMiddleware.verify();

        const order =
            await this.orderService.createOrder();

        this.observer.update(
            "Interface atualizada"
        );

        console.log(order);

    }

}