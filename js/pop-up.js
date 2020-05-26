document.getElementsByClassName('order')[0].onclick = show;
document.getElementsByClassName('order')[1].onclick = show;
document.getElementsByClassName('order')[2].onclick = show;
document.getElementsByClassName('pop-up-close')[0].onclick = hide;

function show() {
    let element = document.querySelector(".pop-up");
    element.classList.add("show-pop-up");
}

function hide() {
    let element = document.querySelector(".pop-up");
    element.classList.remove("show-pop-up");
}
