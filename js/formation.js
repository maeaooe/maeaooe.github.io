const select1 = document.getElementById("name1");
const img1 = document.getElementById("img1");
select1.addEventListener("change", event => {
     const name = event.target.value;
     img1.src = "/img/" + name + ".png";
});
