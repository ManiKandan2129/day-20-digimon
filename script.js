var row = document.getElementById("row1");

//fetch data from the api and display it on cards
async function data(){
    var data1 = await fetch(`https://digimon-api.vercel.app/api/digimon`);
    var data2 = await data1.json();
    console.log(data2)
    for(let i = 0; i<data2.length; i++){
        console.log(data2[i].url)

        var col = document.createElement("div");
        col.setAttribute("class","col-lg-3 col-sm-6");
        col.setAttribute("id", "col");
        row.append(col)

        col.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${data2[i].img}" class="card-img-top" alt="No image Found">
        <div class="card-body">
          <h5 class="card-title">Name: ${data2[i].name}</h5>
          <h5 class="card-text">Level: ${data2[i].level}</h5>
        </div>
      </div>`
    }
        
}
data()













