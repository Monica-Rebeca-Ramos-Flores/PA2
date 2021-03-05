function servicioConsultado(){
  
    const referencia = 'https://api.chucknorris.io/jokes/random';

    fetch(referencia)
    .then(Response => Response.json())
    .then(data => {
        let elemento = document.getElementById('mensaje-nuevo');
        elemento.innerHTML = `<p>${data.created_at}</p>
                              <img src ='${data.icon_url}'>
                              <p>${data.id}</p>
                              <p>${data.updated_at}</p>
                              <a href = '${data.url}'</a>
                              <p>${data.value}</p> `;
        console.log(data);

        let Mensaje = new Array();
        Mensaje.push(data.value);
        showPeople(Mensaje);
    })
    .catch(err => console.log(err))
}

function showPeople(Mensaje){
    let show = document.getElementById('mensajes-historicos');

    Mensaje.forEach(function (Mensaje) {
        show.innerHTML += '<div> <ul>' + '<li>' + Mensaje + '</li> </ul> </div>';
    });
}