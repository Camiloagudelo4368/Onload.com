

$(document).ready(function () {
  
    getCategories();
    // This function grabs todos from the database and updates the view
    function getCategories() {
        $.get("/api/categories", function (data) {
            createNavBar(data);
        });
    }

    function createNavBar(data) {
        // console.log("check ", ls("UserId"))

        data.forEach(element => {
            $("#categoriesMenu").append(`<li class="nav-item">
            <a class="nav-link" href="/products/${element.categoryId}">${element.categoryName}</a></li>`)
        });
    }
})