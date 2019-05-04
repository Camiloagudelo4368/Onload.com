function removeProduct(productId){
    
    console.log("/api/shoppingCart/" + productId)
    
    var productUrl = "/api/shoppingCart/" + productId

    $.ajax({
      type: "DELETE",
      url: productUrl
    }).then(function (product) {
      if (product === "deleted"){
        location.assign("/cart")
      }
    });
    //$.delete("/api/shoppingCart/" + productId)
  }