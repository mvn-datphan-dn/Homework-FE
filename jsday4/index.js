//AJAX
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var html=""
        const arr = JSON.parse(this.responseText);
        arr.data.forEach(element => {
            html += "<p>Id: "+element.id+"</p><p>email: "+element.email+
            "</p><p>First name: "+element.first_name+"</p><p>Last name: "+element.last_name+
            "</p><img src='"+element.avatar+"' alt='avatar'>"
        });
        document.getElementById("demo-ajax").innerHTML = html;
      }
    xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
    xhttp.send();
  }
loadDoc() 

//FETCH
fetch('https://reqres.in/api/users/2')
  .then(response => response.json())
  .then(data => {
      var html=""
            html += "<p>Id: "+data.data.id+"</p><p>email: "+data.data.email+
            "</p><p>First name: "+data.data.first_name+"</p><p>Last name: "+data.data.last_name+
            "</p><img src='"+data.data.avatar+"' alt='avatar'>"
        document.getElementById("demo-fetch").innerHTML = html;
  });