//get slider items |arry.form(es6)
let sliderimgs=Array.from(document.querySelectorAll('.slider-continers img'));


// number of slides
let slidecount=sliderimgs.length;

//set current index

let currentindex=1;

// slide number #slide1

let slidenumberelement=document.getElementById("slide-number");

//pervies and next

let nextbtn=document.getElementById("next");
let prevbtn=document.getElementById("prev");


//create the main ul element
let paginationelement=document.createElement('ul');
//set id to pagination ul
paginationelement.setAttribute('id','pagination-ul');


//create list items based on slides number
for(let i=1;i<=slidecount;i++){
    //create the li
let paginationeitems=document.createElement('li');
//set attriubte 
paginationeitems.setAttribute('dataindex',i);
      
//set itemc content
paginationeitems.appendChild(document.createTextNode(i));

//append items to the main ul

paginationelement.appendChild(paginationeitems);



}
//add tle created ul to the page
document.getElementById('indicators').appendChild(paginationelement);
 //get the new created ul
 let pagintioncreatedul=document.getElementById('pagination-ul');
//get pagination  items |arry.form(es6)
let pagintionBullets=Array.from(document.querySelectorAll('#pagination-ul li'));
 //loop throw all bullets item
 for(let i=0;i<pagintionBullets.length;i++){
    pagintionBullets[i].onclick=function(){
       currentindex=parseInt(this.getAttribute('dataindex'));
       thecheacker()
    }

 }
 

//trigger the cheacker function


thecheacker();
//handle click on previos and next button

nextbtn.onclick=nextslide;
prevbtn.onclick=prevslide;
//next slide function

function nextslide(){
  if(nextbtn.classList.contains('disabled')){
    return false;

  }
  else{
currentindex++;
thecheacker()
  }

}




//prev slide function
function prevslide(){
    if(prevbtn.classList.contains('disabled')){
        return false;
    
      }
      else{
    currentindex--;
    thecheacker()
      }
}


//create the chacker function
function thecheacker(){
    //set the slide number
    slidenumberelement.textContent='slide #'+(currentindex)+' of '+(slidecount);
    //remove all active class from img
    removeAllactive();
    //set active class on current slide
    sliderimgs[currentindex-1].classList.add('active');
   
    //set active class on current pagination item
    pagintioncreatedul.children[currentindex-1].classList.add('active');

    //cheack if the first slide
    if(currentindex==1){
        //add disable class to  reve btn
        prevbtn.classList.add('disabled');
    }
    else{
        //remove disable class to  reve btn

        prevbtn.classList.remove('disabled');

    }

     //cheack if the last slide
     if(currentindex==slidecount){
        //add disable class to  reve btn
        nextbtn.classList.add('disabled');
    }
    else{
        //remove disable class to  reve btn

        nextbtn.classList.remove('disabled');

    }


}
//create remove all active class 
function removeAllactive(){
   //loop throw imgs
   sliderimgs.forEach(function(img){
img.classList.remove('active');
   })

   //loop throw pagination Bullets
   pagintionBullets.forEach(function(bullets){
     bullets.classList.remove('active');
   })


}