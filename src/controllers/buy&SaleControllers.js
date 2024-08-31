import BuyService from '../services/buy&SaleServices.js';

class BuyController {
    constructor() {
        this.buyService = new BuyService(); // Inyección de dependencia del servicio
    }

    async createBuy(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const buy = await this.buyService.createBuy(req.user.id); // Usar this.buyService
            res.status(201).json(buy);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new BuyController();
