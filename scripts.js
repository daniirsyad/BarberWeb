var scrollContainer = document.querySelector('.container-block');

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

function scrollLeft1() {
  scrollContainer.scrollLeft += -300;
}
function scrollRight() {
  scrollContainer.scrollLeft += 300;
}
