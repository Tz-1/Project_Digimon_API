$(document).ready(function(){

/* Funcion de pagina principal o inico*/
    $("#index").click(function(){

        $("#files").html("")

        $("main").html("")

        $("main").html(`
        <div class="d-flex justify-content-center mb-2">
            <img src="assets/img/Digimon_main.jpg" alt="Digimon survive main" id="dmain">
        </div>
  
        <h1 class="text-center">Digimon</h1>  
        <hr>
    
        <p>Digimon (デジモン Dejimon?), término tomado de Digital Monsters (デジタルモンスター Dejitaru monsutā?) literalmente en español Monstruos Digitales, estilizado como DIGIMON, es una franquicia de medios creado por Akiyoshi Hongo que incluye productos como mascotas virtuales, videojuegos, películas, animes, mangas, juguetes y juegos de cartas coleccionables. La saga comenzó en 1997 a partir de una mascota virtual conocida como Digimon Virtual Pet, basado en la franquicia Tamagotchi. Sin embargo, su popularidad aumentó con la emisión en 1999 de una serie de anime (Digimon Adventure) y el lanzamiento de un videojuego titulado Digimon World. La saga Digimon ocupó, en una encuesta realizada en la TV Asahi en 2006, el puesto número 54 de entre los 100 mejores animes de la historia.
            Modelo de Virtual pet distribuido en el mercado japonés por Bandai, que permitió la popularización de Digimon en Japón y vendió 50 mil unidades en todo el mundo hasta marzo de 2004.
            El argumento de la saga está basado en un mundo paralelo conocido como Mundo Digital, que está habitado por unas criaturas ficticias llamadas Digimon. Son formas de vida artificial creadas a partir de bits y piezas perdidas de datos de ordenadores, que habitan dentro de los aparatos electrónicos que posean memorias no volátiles. Los Digimon son criados por humanos llamados "Tamers" (niños elegidos en Digimon Adventure y en su secuela Digimon 02) para combatir a los villanos que amenazan con destruir el equilibrio del Mundo Digital.</p>
        
        <figure class="d-block text-center">
            <img src="assets/img/v-pet.png" class="figure-img img-fluid rounded zoom" alt="Tamagotchi">
            <figcaption class="figure-caption text-center">Una de las tantas version de V-pet que se han vendido.</figcaption>
        </figure>
        
        <p>Dentro de la franquicia Digimon, los Digimon son criaturas digitales que digievolucionan para mejorar su nivel de poder y habilidades con respecto a su anterior forma. Los Digimon se dividen según diferentes tipos o atributos, actuando o cumpliendo un determinado rol (como un programa informático) que pueden ser principalmente de tipo: datos, vacuna o virus. El número de digievoluciones naturales llega hasta seis. Normalmente los digimons habitan en el Mundo Digital, un mundo digital posiblemente ubicado en la red de comunicaciones. Los Digimon absorben información, por ejemplo de diversos enemigos, y, eventualmente digievolucionan o bien, con el paso del tiempo y los sucesos. Los digimon primeros están en etapa Digi-Huevo (que todavía no nacen, pero el cuidado del huevo tiene que ver mucho su digievolución), Etapa Bebé (que no tienen poderes por lo tanto su transformación se hará dándole de comer y con entrenamiento básico), Etapa Bebé II (técnica burbujas/defensa), Etapa Niño (con poderes/técnicas según que clase de digimon sea), Etapa Campeón (ya entrenado y con técnicas poderosas), Etapa Ultra (ultra poderoso y más fuerte que el anterior) y Etapa Mega (mega poderoso, más que el anterior). Debido a que después de digievolucionar su apariencia cambia de acuerdo a su grado, actualmente se han contado más de 2000 especies distintas de Digimon. Las especies resultantes de las digievoluciones difieren según la región donde se hayan criado los Digimon. Además, los Digimon digievolucionan en diversas formas dependiendo de la situación, sin tamers (Entrenadores) o con tamers. Hay muchos Digimon que no llegan al nivel mega debido a que el poder ya es demasiado grande y mueren antes de alcanzarla a menos que tengan un dueño. Algunos Digimon llegan a un poder tan alto al alcanzar su última etapa que se le considera super definitiva.</p>
        <hr>
        <br>
        <p>Esta pagina web fue creada con el fin de poder consumir un API de Digimon. <s>(Un poco obvio, no?)</s> Si deseas ver la lista que se ha conseguido, haz click en "Digimons" en la barra de navegacion.</p>

        <div class="d-flex justify-content-center" style="height: 150px;">
            <img src="assets/img/momantai.png" class="zoom" id="momantai">
        </div>`
        )
        
    })

/*Funcion de listado de los Digimons a traves de la API*/
    $("#digilist").click(function(){

        $("main").html("")
        
        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon")

            .then(response => response.json()
            )
            .then(digifiles => {

                for (item of digifiles){
                    $("#files").append(`
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>`
                    )
                }
            })  
    })

/*Lista de Digimon nivel Fresh*/
    $("#Flist").click(function(){

        $("main").html("")

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/fresh")

            .then(response => response.json()
            )
            .then(digifiles => {

                for (item of digifiles){
                    $("#files").append(`
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>`
                    )
                }     
            }) 
    })

/*Lista de Digimon nivel Training*/
    $("#Tlist").click(function(){
        $("main").html("")

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/training")

            .then(response => response.json()
            )
            .then(digifiles => {

                for (item of digifiles){
                    $("#files").append(`
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>`
                    )
                }     
            }) 
    })

/*Lista de Digimon nivel Rookie*/
    $("#Rlist").click(function(){
        $("main").html("")

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/rookie")

            .then(response => response.json()
            )
            .then(digifiles => {

                for (item of digifiles){
                    $("#files").append(`
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>`
                    )
                }     
            }) 
    })

/*Lista de Digimon nivel Champion*/
    $("#Clist").click(function(){
        $("main").html("")

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/champion")

            .then(response => response.json()
            )
            .then(digifiles => {

                for (item of digifiles){
                    $("#files").append(`
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>`
                    )
                }   
            }) 
    })

/*Lista de Digimon nivel Ultimate*/
    $("#Ulist").click(function(){
        $("main").html("")

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/ultimate")

            .then(response => response.json()
            )
            .then(digifiles => {

                for (item of digifiles){
                    $("#files").append(`
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>`)
                }     
            }) 
    })

/*Lista de Digimon nivel Armor*/
    $("#Alist").click(function(){
        $("main").html("")

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/armor")

            .then(response => response.json()
            )
            .then(digifiles => {

                for (item of digifiles){
                    $("#files").append(`
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>`)
                }     
            }) 
    })

/*Lista de Digimon nivel Mega*/
    $("#Mlist").click(function(){
        $("main").html("")

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/Mega")

            .then(response => response.json()
            )
            .then(digifiles => {

                for (item of digifiles){
                    $("#files").append(`
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>`
                    )
                }     
            }) 
    })

/*Funcion para obtener un Digimon al azar de la API*/
    $("#Rdigi").click(function(){
        $("main").html("")
        
        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon")

            .then(response => response.json()
            )
            .then(digifiles => {
                var randomfile = Math.floor(Math.random() * digifiles.length);

                var randomdigi = digifiles[randomfile]

                $("#files").append(`
                <h1>Felicidades!</h1>
                <h2>Tu digi-partner es: </h2>
                <div class="col-auto m-1 zoom">
                    <div class="card bg-success" style="width: 15rem;">
                        <ul class="list-group list-group-flush">
                            <div><h5 class="card-title card-header">${randomdigi.name}</h5></div>
                            <li class="list-group-item"><img src="${randomdigi.img}" class="card-img-top" alt="..."></li>
                            <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${randomdigi.level}</p></li>
                        </ul>
                    </div>
                </div>
                <p>Puedes intentarlo otra vez si vuelves a apretar en "Tu compañero Digimon".`
                )
            })  
    })

/*Funcion para buscar Digimon por nombre a traves de un valor añadido por la busqueda*/
    $("#btnsearch").click(function(event){
        event.preventDefault(); /*Evento que previene la recarga de la pagina web*/

        var dname = $("#inputsearch").val()

        fetch(`https://digimon-api.vercel.app/api/digimon/name/${dname}`)
        
            .then(response => response.json()
            )
            .then(digifiles => {

                if(digifiles.length > 0) {
                    $("main").html("")

                    digifiles.forEach(digimon =>{
                        $("#files").html(`
                            <div class="col-auto m-2 zoom">
                                <div class="card bg-success" style="width: 15rem;">
                                    <ul class="list-group list-group-flush">
                                        <div><h5 class="card-title card-header">${digimon.name}</h5></div>
                                        <li class="list-group-item"><img src="${digimon.img}" class="card-img-top" alt="..."></li>
                                        <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${digimon.level}</p></li>
                                    </ul>
                                </div>
                            </div>`
                        )
                    })
                } 
                else {
                    alert("Escribiste mal el nombre o el Digimon no se encuentra en esta lista.")
                }
            })  
    })

/*"No te preocupes, todo se solucionara, tomalo con calma"*/
    $(document).on('dblclick', '#momantai', function(){
        alert("Momantaaaaaaaaai ʕᵔᴥᵔʔ")
    })

/*Digivice sonido*/
    $(".lcdgif").click(function(){
        $("#digiviceboop")[0].play();
    })

})