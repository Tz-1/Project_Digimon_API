$(document).ready(function(){
    
    $("#digilist").click(function(){
        
        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon")

            .then(response => response.json()
            )
            .then(digifiles => {
                var content = document.querySelector("#files")

                for (item of digifiles){
                    content.innerHTML += `
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>
                    `
                }
            })  
    })


    $("#Flist").click(function(){

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/fresh")

            .then(response => response.json()
            )
            .then(digifiles => {
                var content = document.querySelector("#files")

                for (item of digifiles){
                    content.innerHTML += `
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>
                    `
                }     
            }) 
    })

    $("#Tlist").click(function(){

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/training")

            .then(response => response.json()
            )
            .then(digifiles => {
                var content = document.querySelector("#files")

                for (item of digifiles){
                    content.innerHTML += `
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>
                    `
                }     
            }) 
    })

    
    $("#Rlist").click(function(){

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/rookie")

            .then(response => response.json()
            )
            .then(digifiles => {
                var content = document.querySelector("#files")

                for (item of digifiles){
                    content.innerHTML += `
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>
                    `
                }     
            }) 
    })

    
    $("#Clist").click(function(){

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/champion")

            .then(response => response.json()
            )
            .then(digifiles => {
                var content = document.querySelector("#files")

                for (item of digifiles){
                    content.innerHTML += `
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>
                    `
                }   
            }) 
    })

    
    $("#Ulist").click(function(){

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/ultimate")

            .then(response => response.json()
            )
            .then(digifiles => {
                var content = document.querySelector("#files")

                for (item of digifiles){
                    content.innerHTML += `
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>
                    `
                }     
            }) 
    })

    
    $("#Alist").click(function(){

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/armor")

            .then(response => response.json()
            )
            .then(digifiles => {
                var content = document.querySelector("#files")

                for (item of digifiles){
                    content.innerHTML += `
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>
                    `
                }     
            }) 
    })

    
    $("#Mlist").click(function(){

        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon/level/Mega")

            .then(response => response.json()
            )
            .then(digifiles => {
                var content = document.querySelector("#files")

                for (item of digifiles){
                    content.innerHTML += `
                    <div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${item.name}</h5></div>
                                <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                            </ul>
                        </div>
                    </div>
                    `
                }     
            }) 
    })

    $("#Rdigi").click(function(){
        
        $("#files").html("")

        fetch("https://digimon-api.vercel.app/api/digimon")

            .then(response => response.json()
            )
            .then(digifiles => {
                var randomfile = Math.floor(Math.random() * digifiles.length);

                var randomdigi = digifiles[randomfile]

                var content = document.querySelector("#files")

                content.innerHTML = `
                <div class="col-auto m-2 zoom">
                    <div class="card bg-success" style="width: 15rem;">
                        <ul class="list-group list-group-flush">
                            <div><h5 class="card-title card-header">${randomdigi.name}</h5></div>
                            <li class="list-group-item"><img src="${randomdigi.img}" class="card-img-top" alt="..."></li>
                            <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${randomdigi.level}</p></li>
                        </ul>
                    </div>
                </div>
                `
            })  
    })

    $("#btnsearch").click(function(){
        var dname = $("#inputsearch").val()

        fetch(`https://digimon-api.vercel.app/api/digimon/name/${dname}`)
        
            .then(response => response.json()
            )
            .then(digifiles => {
                var content = document.querySelector("#files")

                if(digifiles.length > 0) {digifiles.forEach(digimon =>{
                    content.innerHTML = 
                    `<div class="col-auto m-2 zoom">
                        <div class="card bg-success" style="width: 15rem;">
                            <ul class="list-group list-group-flush">
                                <div><h5 class="card-title card-header">${digimon.name}</h5></div>
                                <li class="list-group-item"><img src="${digimon.img}" class="card-img-top" alt="..."></li>
                                <li class="list-group-item bg-primary text-white"><h6 class="d-inline">Nivel: <h6><p class="card-text">${digimon.level}</p></li>
                            </ul>
                        </div>
                    </div>
                    `
                    })
                } 

                else {
                    alert("Escribiste mal el nombre o el digimon no se encuentra en esta lista.")
                }
            })  
    })

})