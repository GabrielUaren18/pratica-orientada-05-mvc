export default class DescontoService {
    aplicarDesconto(total) {
        if (total >= 100) {
            return total * 0.9;
        }

        return total;
    }
}