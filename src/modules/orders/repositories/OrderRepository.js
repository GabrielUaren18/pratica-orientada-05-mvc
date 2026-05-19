import axios from "axios";

import AppConfig
from "../../../shared/config/AppConfig.js";

export default class OrderRepository {

    constructor() {

        this.config =
            new AppConfig();

    }

    async save(order) {

        await axios.post(
            `${this.config.apiURL}/orders`,
            order
        );

        console.log(
            "Pedido salvo no JSON Server"
        );

    }

}