/*
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }*/

const images = document.querySelectorAll(".imgs");

images.forEach(image => {
  const newURL = image.getAttribute("data-src");
  image.src = newURL;
});

let imageOptions = {};

let observer = new IntersectionObserver((entries, observer) =>{
  entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const image = entry.target;
      const newURL = image.getAttribute("data-src");
      image.src = newURL;
      observer.unobserve(image);
  });
}, imageOptions);

images.forEach(image => {
  observer.observe(image);
});