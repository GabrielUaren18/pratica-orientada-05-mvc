export default class Observer {

    constructor() {
        this.observers = [];
    }

    adicionar(observer) {
        this.observers.push(observer);
    }

    notificar(dados) {

        this.observers.forEach(observer => {
            observer.atualizar(dados);
        });

    }

}