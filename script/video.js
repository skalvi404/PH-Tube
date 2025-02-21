// // API FEATCH PROCESS FOR VIDEO BUTTON
// const loadCategories = () => {
//     fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
//         .then(res => res.json())
//         .then(data => displayCategories(data.categories))
//         .catch(error => console.log(error))



// }

// // DISPLAY CATEGOREIS WITH LOOP

// function displayCategories(categories) {

//     const showCategories = document.getElementById('categories')

//     categories.forEach(item => {
//         console.log(item);

//         const videobutton = document.createElement("button");
//         videobutton.classList = "btn";
//         videobutton.innerText = item.category;


//         // displaying api catagory section in screen
//         showCategories.append(videobutton);

//     })

// }


// // API FEATCH PROCESS FOR VIDEO 
// const loadVideos = () => {
//     fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
//         .then(res => res.json())
//         .then(data => displayVideos(data.videos))
//         .catch(error => console.log(error))

// }

// // DISPLAY VIDEO WITH LOOP
// const displayVideos = (videos) => {
//     const videoContainer = document.getElementById('videos')
//     videos.forEach(video => {

//         console.log(video);


//         const card = document.createElement("div");
//         card.classList = "card card-compact bg-base-100 shadow-xl"
//         card.innerHTML = `
//   <figure class="h-[200px] relative">
//     <img
//       src=${video.thumbnail}
//       class="w-full h-full object-cover"
//       alt="Shoes" />
//       <span class="absolute  right-2 bottom-2 bg-black text-white rounded-sm p-1">${video.others.posted_date}</span>
//   </figure>
//   <div class="px-0 py-2 flex">
//   <div>
//   <image class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
//   <div>
//   <div>
//   <h2 class="font-bold">${video.title}</h2>
//   <div class="flex items-center gap-1">
//   <p class="text-gray-400 ">${video.authors[0].profile_name}</p>
//   ${video.authors[0].verified === true ? '<img class="h-5 w-" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>' : ""}
  
//   </div>
  
//   <p></p>
//   </div>

//   </div>
// `
//         videoContainer.append(card)

//     })




// }

// loadCategories();
// loadVideos();

// const carddemo =
// {
//     "category_id": "1001",
//     "video_id": "aaal",
//     "thumbnail": "https://i.ibb.co/hdtZYbB/enchnting.jpg",
//     "title": "Enchanted Harmonies",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/jh1q2F3/shopia.jpg",
//             "profile_name": "Sophia Williams",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "7.6K",
//         "posted_date": "16450"
//     },
//     "description": "'Enchanted Harmonies' by Sophia Williams enchants listeners with its delicate, soothing sounds and melodic complexity. Garnering 7.6K views, this piece is perfect for those seeking an immersive musical experience that blends elegance with emotion, offering a unique soundscape that resonates deeply with its audience."
// }

// --------------------------------------------------------------------------------------

// create lodCategories
function getTimeString(time){
    const hour= parseInt(time/3600);
    let remainingTime=time%3600;
    const minute=remainingTime%60;
    return `${hour} Hour ${minute}minute ago`
    
   }
   console.log(getTimeString(4320));
const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=> displayCateogries(data.categories))
    .catch(error=>console.log(error));
    
};

const loadVideos= () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res=>res.json())
    .then(data=>displayVidoes(data.videos))
    .catch(error=>console.log(error));
    
};

//Display Vidoes

const displayVidoes =(videos)=>{

    const videoContainer=document.getElementById("videos")
    videos.forEach((video)=>{
    console.log(video);
    
    const card=document.createElement("div")
    card.classList="card card-compact ";
    card.innerHTML=`
    <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      alt="Shoes"
      class="h-full w-full object-cover" />
      
      ${video.others.posted_date?.length==0?"":`<span class="absolute btn-black right-2 bottom-4 bg-black text-white rounded-1px p-2px ">
      ${getTimeString(video.others.posted_date)}
      </span>`}
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>
  <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
  </div>
  <div>
 <h2 class="font-bold">${video.title}</h2>
 <div class="flex gap-2 ite.0ms-center">
 <p>${video.authors[0].profile_name}</p>
 

${video.authors[0].verified== true? `<img class="w-5 h-5 rounded-full " src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>`:""}
 <p></p>
 </div>
 
  </div>

 
  </div>
    `
    videoContainer.append(card);     
 });
    
}


// Display Categories

const displayCateogries= (categories) =>{
 const categoryContainer=document.getElementById('categories')
   categories.forEach( (item)=>{
    console.log(item);
    
//create a button

const buttonContainer=document.createElement("div");
buttonContainer.innerHTML=`
<button onclick="loadCategoryVideoes(${item.category_id})" class="btn">${item.category}</button>`;


//add button in catagory container
categoryContainer.append(buttonContainer);
});
    
};
const loadCategoryVideoes=(id)=>{
    alert(id);
    
};


loadCategories();
loadVideos();