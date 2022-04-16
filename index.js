var images = [
    "./DUG/1.png",
    "./DUG/2.png",
    "./DUG/3.png",
    "./DUG/4.jpg",
    "./DUG/5.png",
    "./DUG/6.png",
    "./DUG/7.png",
    "./DUG/8.png",
    "./DUG/9.png",
    "./DUG/10.png",
    "./DUG/11.png",
    "./DUG/12.png",
    "./DUG/13.png",
    "./DUG/15.png"
]

function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('image').src = images[x];
}

randImg();
