let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

img1.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("img1ID", this.id)
})
img2.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("img2ID", this.id)
})
img3.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("img3ID", this.id)
})
img4.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("img4ID", this.id)
})

document.querySelectorAll(".area").forEach(x => {
    x.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})

document.querySelector(".meyve").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("img1ID");
    this.appendChild(document.getElementById(data));
})
document.querySelector(".meyve").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("img2ID");
    this.appendChild(document.getElementById(data));
})
document.querySelector(".terevez").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("img3ID");
    this.appendChild(document.getElementById(data));
})
document.querySelector(".terevez").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("img4ID");
    this.appendChild(document.getElementById(data));
})


document.querySelector(".Yesy").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("img1ID");
    this.appendChild(document.getElementById(data));
})
document.querySelector(".Yesy").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("img2ID");
    this.appendChild(document.getElementById(data));
})

document.querySelector(".Yesy").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("img3ID");
    this.appendChild(document.getElementById(data));
})

document.querySelector(".Yesy").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("img4ID");
    this.appendChild(document.getElementById(data));
})



