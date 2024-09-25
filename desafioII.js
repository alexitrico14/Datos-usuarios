const traerDatos = (
    () => {
        const contenedor = document.querySelector('#user-data');
        const mostrarDatos = async () => {
            let respuesta = await fetch('https://randomuser.me/api/?results=10');
            let data = await respuesta.json();
            console.log(data)

            data.results.forEach(user => {
                contenedor.innerHTML += `
                <div>
                    <img src="${user.picture.large}" />
                    <p> ${user.name.first} ${user.name.last}</p>
                    <p> ${user.email} </p>
                    <p> ${user.cell} </p>
                </div>
                `
            });
        }

        return {
            mostrarDatos
        }
    }
) ();

traerDatos.mostrarDatos()