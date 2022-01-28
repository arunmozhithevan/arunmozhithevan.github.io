
let url="https://dog.ceo/api/breeds/image/random";
let image=document.getElementById("image");
function show(params) {
    let api= fetch(url);

    api.then((res)=>{
        if(res.status!=200) throw "not found"
       return res.json();
    }).then((data)=>{
        image.src=data.message;
    }).catch((data)=>{
        console.error("404 Not found");
    })
}
