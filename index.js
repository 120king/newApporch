
 /* document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li");

    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Remove the 'active' class from all links
        navLinks.forEach((el) => el.classList.remove("active"));
        // Add the 'active' class to the clicked link
        this.classList.add("active");
      });
    });
  });*/
  //moving images left and right
  let Gallery = document.querySelector(".Gallery");
  let isDragStart = false ,prevPageX, prevScrollLeft;

const dragstart = (e) =>{
   isDragStart = true;
   prevPageX = e.pageX
   prevScrollLeft = Gallery.scrollLeft
}

const dragging = (e) =>{
  if(!isDragStart) return;
  e.preventDefault();
   Gallery.classList.add("dragging");
    let possitionDiff = e.pageX - prevPageX;
    Gallery.scrollLeft =  prevScrollLeft - possitionDiff ;
}
const dragstop = () =>{
  isDragStart = false;
  Gallery.classList.remove("dragging");
}

  Gallery.addEventListener("mousemove", dragging);
  Gallery.addEventListener("mousedown", dragstart);
  Gallery.addEventListener("mouseup", dragstop);
