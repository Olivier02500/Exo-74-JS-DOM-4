let catPic = document.getElementById("cat-pic");
let onCatClick = function(e) {
    let stashePic = document.getElementById("mustache-pic");
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    stashePic.style.top = (mouseY -20).toString()+ 'px';
    stashePic.style.left = (mouseX - 50).toString()+ 'px';
};

catPic.addEventListener("click", onCatClick);








