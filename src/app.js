import OrderController
from "./modules/orders/controllers/OrderController.js";

const orderController =
    new OrderController();

await orderController.createOrder();