import Order from "../../modules/orders/entities/Order.js";

export default class OrderFactory {

    static create(cliente, produto, valor) {

        return new Order(
            cliente,
            produto,
            valor
        );

    }

}