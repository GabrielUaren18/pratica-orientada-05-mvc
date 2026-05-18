export default class AppConfig {

    static instancia;

    constructor() {

        if (AppConfig.instancia) {
            return AppConfig.instancia;
        }

        this.apiURL = "http://localhost:3000";

        AppConfig.instancia = this;
    }

}