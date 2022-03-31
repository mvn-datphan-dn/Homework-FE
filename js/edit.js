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
    if(!first_name.value||!last_name.value||!email.value||!avatar.files.item(0)) {
        let html = '<i class="fa-solid fa-triangle-exclamation"></i><p class="notifica">Please do not leave any information blank!</p>'
        document.getElementById("notifica").innerHTML = html
    }else {
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
}