const images=[
    './images/images1.jpg',
    './images/images2.jpg',
    './images/images3.jpg',
];
const image=document.getElementById('slider-img');
let imgindex=0;
setInterval(function(){
    if(imgindex>=images.length){
      imgindex=0;  
    }
const imgUrl=images[imgindex];
console.log(imgUrl);
image.setAttribute('src', imgUrl)
imgindex++
}, 1000)
