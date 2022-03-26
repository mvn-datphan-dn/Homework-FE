var mydata = JSON.parse(data)
console.log(mydata);
var listProduct = document.getElementById('list')
var countProduct = document.getElementById("count")
var html = '';
mydata.forEach(element => {
    html += '<li class="item"><img src="'+element.src+
            '" alt="item"><p>'+element.name+
            '</p><p>Price: '+element.price+
            '</p><button onclick=addcart('+element.id+')>Add to cart</button></li>'
});
listProduct.innerHTML = html
if(localStorage.cart) countProduct.innerHTML = localStorage.cart.split(",").length
console.log(localStorage);

function addcart(id) {
    var list = []
    if(localStorage.cart) {
        list = localStorage.cart.split(",")
    }
    list.push(String(id))
    listItem(list)
}

function listItem(arr) {
    let count = []
    count.push(arr[0])
    console.log(count);
    arr.forEach(element => {
        if(count.indexOf(element)!=-1) return
        count.push(element)
    });
    console.log(count);
    localStorage.cart = count
    countProduct.innerHTML = count.length
    return count
}

