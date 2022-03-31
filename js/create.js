var data = []
var newid = 0
if(localStorage.list) {
    data = JSON.parse(localStorage.list)
    data.forEach(element => {
        if(element.id>newid) newid = element.id
    });
}

function create() {
    let id = newid + 1
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let avatar = document.getElementById("avatar")
    console.log(avatar.files.item(0).name);
    let newdata = {
        id: id,
        first_name: firstName,
        last_name: lastName,
        email: email,
        avatar: "../img/"+avatar.files.item(0).name
    }
    data.push(newdata)
    localStorage.list = JSON.stringify(data)
    window.location = "../html/index.html"
}