'use strict';

let photos = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg"];
let imgTag = document.querySelector("img");

let count = 0;
function next(){
  count++;
  if (count >= photos.length){
    count = 0;
    imgTag.src = photos[count];
  }else {
    imgTag.src = photos[count];
  }
  
}
function prev(){
  count--;
  if (count < 0){
    count = photos.length - 1;
    imgTag.src = photos[count];
  }else {
    imgTag.src = photos[count];
  }
}