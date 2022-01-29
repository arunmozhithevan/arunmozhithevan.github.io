let url = "https://dog.ceo/api/breeds/image/random";
let container = document.getElementById("container");
let image = document.getElementById("image");
let link = document.getElementById("link");
let Dbtn = document.getElementById("Dbtn");
function show(params) {
  let api = fetch(url);

  api
    .then((res) => {
      if (res.status != 200) throw "not found";
      return res.json();
    })
    .then((data) => {
      image.src = data.message;
      link.href = data.message;
    })
    .catch((data) => {
      console.error("404 Not found");
    });
}
Dbtn.addEventListener("click", () => {
  link.click();
});
container.addEventListener("mouseover", () => {
  Dbtn.style.display = "flex";
});
container.addEventListener("mouseleave", () => {
  Dbtn.style.display = "none";
});
container.addEventListener("touchstart",(event) => {
  Dbtn.style.display = "flex";
});
document.body.addEventListener("mouseover", () => {
  Dbtn.style.display = "none";
});
