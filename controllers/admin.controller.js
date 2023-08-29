function getProducts(req, res){
    res.render('admin/products/all-products')
}

function getNewProducts(){}

function createNewProducts(){}


module.exports = {
    getProducts:getProducts,
    getNewProducts:getNewProducts,
    createNewProducts:createNewProducts
}