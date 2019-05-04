function removeProduct(productId){
    
    console.log("/api/shoppingCart/" + productId)
    
    var productUrl = "/api/shoppingCart/" + productId

    $.ajax({
      type: "DELETE",
      url: productUrl
    }).then(function (product) {
      res.json(product);
    });
    //$.delete("/api/shoppingCart/" + productId)
  }