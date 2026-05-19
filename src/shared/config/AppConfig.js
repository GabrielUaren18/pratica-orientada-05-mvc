export default class AppConfig {

    static instance;

    constructor() {

        if (AppConfig.instance) {

            return AppConfig.instance;

        }

        this.apiURL =
            "http://localhost:3000";

        AppConfig.instance = this;

    }

}