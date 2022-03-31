let data = JSON.parse(localStorage.list)
let id
let first_name = document.getElementById("firstName")
let last_name = document.getElementById("lastName")
let email = document.getElementById("email")
let avatar = document.getElementById("avatar")
data.forEach(element => {
    if(element.id==localStorage.edit) {
        first_name.value = element.first_name
        last_name.value = element.last_name
        email.value = element.email
    };
});

function update() {
    data.forEach(element => {
        if(element.id==localStorage.edit) {
            element.first_name = first_name.value
            element.last_name = last_name.value
            element.email = email.value
            element.avatar = "../img/"+avatar.files.item(0).name
        }
    });
    console.log(data);
    localStorage.list = JSON.stringify(data)
    window.location="../html/index.html"
}