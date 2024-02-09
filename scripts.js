const addCollection = (items) => {
    items.forEach(item => {
        let itemToAppend = `<li class="collection-item avatar">
        <img src="${item.path}" alt="" class="circle">
        <span class="name" style="color:black">Name: ${item.name}</span>
        <p style="color:black">Country: ${item.country} <br>
        Description: ${item.description}
        </p>
        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
      </li>`;
        $("#collection-section").append(itemToAppend)
    });
}

const formSumitted = () => {
    let formData = {};
    formData.name = $('#name').val();
    formData.path = $('#path').val();
    formData.country = $('#country').val();
    formData.description = $('#description').val();

    console.log(formData);
    postCricketPlayer(formData);
}

function postCricketPlayer(cricketPlayer) {
    $.ajax({
        url:'/api/cricket-player',
        type:'POST',
        data:cricketPlayer,
        success: (result) => {
            if (result.statusCode === 201) {
                alert('cat posted');
                location.reload();
            }
        }
    });
}

function getAllCricketPlayers() {
    $.get('/api/cricket-player',(result)=>{
        if (result.statusCode === 200) {
            addCollection(result.data);
        }
    });
}

let socket = io();
socket.on('number',(msg)=>{
    console.log('Random Number: ' + msg);
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSumitted();
    });
    $('.modal').modal();
    getAllCricketPlayers();
    console.log('ready');
});