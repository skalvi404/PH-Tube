// API FEATCH PROCESS
const loadCategories=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
    .catch(error=>console.log(error))
    
    
    
}
// DISPLAY CATEGOREIS WITH LOOP

function displayCategories(categories){

const showCategories=document.getElementById('categories')
    
   categories.forEach(item=>{
   console.log(item);
   
   const videobutton=document.createElement("button");
   videobutton.classList="btn";
   videobutton.innerText=item.category;


// displaying api catagory section in screen
   showCategories.append(videobutton);

    })
    
}


loadCategories();