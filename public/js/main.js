

$(document).ready(function () {
  
    getCategories();
    // This function grabs todos from the database and updates the view
    function getCategories() {
        $.get("/api/categories", function (data) {
            createNavBar(data);
        });
    }

    function createNavBar(data) {        
        data.forEach(element => {
            $("#categoriesMenu").append(`<li class="nav-item">
            <a class="nav-link" href="/products/${element.categoryId}">${element.categoryName}</a></li>`)
        });
    }

    $(document).on("click", ".buyProductsubmitBtn", event=>{
        // $(".buyProductsubmitBtn").on("click", event => {
            var obj = {
                productId: $("#productId").text(),
                quantity: $("#quantity").text(),
                price: $("#price").text()
            }
        
            $.post("/api/shoppingCart", obj, function (data) {
                if (data) {
                    alert("Item added to your Shopping Cart")    
                }
                else{
                    alert("Problems adding the item to your shopping cart")    
                }
                
            });
        })
        
})