const { Router } = require('express');

const productsController = require('./controllers/products');
const salesController = require("./controllers/sales");

const routes = new Router();

routes.route('/products').get(productsController.getProdutos);
routes.route('/products').post(productsController.addProduto);
routes.route('/products/:codigo').put(productsController.updateProduto);
routes.route('/products/:codigo').delete(productsController.deleteProduto);
routes.route('/products/:codigo').get(productsController.getProduto);

routes.route('/sales').get(salesController.getVendas);
routes.route('/sales').post(salesController.addVenda);
routes.route('/sales/:codigo').delete(salesController.deleteVenda);
routes.route('/sales/:codigo').put(salesController.updateVenda);
routes.route('/sales/:codigo').get(salesController.getVenda);


// rotas.route('/salas')
//    .get(controleSalas.getSalas)
//    .post(controleSalas.addSala)
//    .put(controleSalas.updateSala)

// rotas.route('/salas/:codigo')
//    .get(controleSalas.getSalaPorCodigo)
//    .delete(controleSalas.deleteSala)


// rotas.route('/predios')
//      .get(controlePredios.getPredios)
//      .post(controlePredios.addPredio)
//      .put(controlePredios.updatePredio)

// rotas.route('/predios/:codigo')
//      .get(controlePredios.getPredioPorCodigo)
//      .delete(controlePredios.deletePredio)

module.exports = routes;