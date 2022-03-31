var data = [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"},{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}]

if(localStorage.list) data = JSON.parse(localStorage.list)

localStorage.list = JSON.stringify(data)
function loadDoc(data) {
    let html="<tr><th>ID</th><th>Avatar</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Action</th></tr>"
    data.forEach(element => {
        html += '<tr><td>'+element.id+
                '</td><td><img src="'+element.avatar+
                '" alt="Avatar"></td><td>'+element.first_name+
                '</td><td>'+element.last_name+
                '</td><td>'+element.email+'</td><td><a href="./edit.html" onclick="edit('+element.id+')" class="icon-edit"><i class="fa-solid fa-pen-to-square"></i></a><i class="fa-solid fa-trash del" onclick="delUser('+element.id+')"></i></td></tr>'
    });
    document.getElementById("list").innerHTML = html;
}
loadDoc(data)
function delUser(id) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].id==id) {
            if(confirm("Are you sure delete "+data[i].first_name)) {
                data.splice(i, 1)
                localStorage.list = JSON.stringify(data)
                loadDoc(data)
            }
        }
    }
}
function search(name) {
    let data = JSON.parse(localStorage.list)
    if(name=="") loadDoc(data)
    else {
        let arr = []
        let key = new RegExp(name, 'gi')
        data.forEach(element => {
            if(element.first_name.match(key)||element.last_name.match(key)) arr.push(element)
        });
        loadDoc(arr)
    }
}
function edit(id) {
    localStorage.edit = id
}
