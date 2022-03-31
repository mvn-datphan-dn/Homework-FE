var data = [{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}]

if(localStorage.list) data = JSON.parse(localStorage.list)

localStorage.list = JSON.stringify(data)
function loadDoc(data) {
    let html="<tr><th>ID</th><th>Avatar</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Action</th></tr>"
    data.forEach(element => {
        html += '<tr><td>'+element.id+
                '</td><td><img src="'+element.avatar+
                '" alt="Avatar"></td><td>'+element.first_name+
                '</td><td>'+element.last_name+
                '</td><td>'+element.email+'</td><td><a href="./edit.html" onclick="edit('+element.id+')" class="icon-edit"><i class="fa-solid fa-pen-to-square"></i></a><a href="" class="icon-delete" onclick="delUser('+element.id+')"><i class="fa-solid fa-trash"></i></a></td></tr>'
    });
    document.getElementById("list").innerHTML = html;
}
loadDoc(data)
function delUser(id) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].id==id) {
            data.splice(i, 1)
            localStorage.list = JSON.stringify(data)
        }
    }
}
function search(name) {
    if(name=="") loadDoc(data)
    else {
        let arr = []
        let key = new RegExp(name, 'gi')
        data.forEach(element => {
            if(element.first_name.match(key)) arr.push(element)
        });
        loadDoc(arr)
    }
}
function edit(id) {
    localStorage.edit = id
}
