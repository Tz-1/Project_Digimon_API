fetch("https://digimon-api.vercel.app/api/digimon")

    .then(response => response.json()
    )
    .then(digifiles => {
        var content = document.querySelector("#files")

        content.innerHTML = ""

        for (item of digifiles){
            content.innerHTML += `
            <div class="col-auto m-2">
                <div class="card bg-success" style="width: 15rem;">
                    <ul class="list-group list-group-flush">
                        <div><h5 class="card-title card-header">${item.name}</h5></div>
                        <li class="list-group-item"><img src="${item.img}" class="card-img-top" alt="..."></li>
                        <li class="list-group-item"><h6 class="d-inline">Nivel: <h6><p class="card-text">${item.level}</p></li>
                    </ul>
                </div>
            </div>
            `
        }
        
})

