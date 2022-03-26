var mydata = JSON.parse(data)
console.log(localStorage.cart)
var listItem = document.getElementById("listItem")
var html =""
showCart()

function showCart() {
    let listProduct = localStorage.cart.split(",")
    console.log(listProduct);
    listProduct.forEach(element => {
        mydata.forEach(item => {
            if(element==item.id) {
                console.log(item.src);
                html+= '<tr id="row'+item.id+
                        '"><td><img src="'+item.src+
                        '" alt="item"></td><td class="name">'+item.name+
                        '</td></td><td class="name">'+item.price+
                        '</td><td><button onclick=deleteitem("'+item.id+
                        '")>X</button></td></tr>'
            }
        });
    });
    listItem.innerHTML = html
}
function deleteitem(id) {
    let listProduct = localStorage.cart.split(",")
    listProduct.splice(listProduct.indexOf(id),1)
    localStorage.cart = listProduct
    console.log(localStorage.cart);
    document.getElementById("row"+id+"").remove()
}