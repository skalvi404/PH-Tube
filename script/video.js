// API FEATCH PROCESS FOR VIDEO BUTTON
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


// API FEATCH PROCESS FOR VIDEO 
const loadVideos=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then(data=>displayVideos(data.videos))
    .catch(error=>console.log(error))  
    
}

// DISPLAY VIDEO WITH LOOP
const displayVideos=(videos)=> {
const videoContainer=document.getElementById('videos')
videos.forEach(video=>{
   
    console.log(video);


    const card=document.createElement("div");
card.classList="card card-compact bg-base-100 shadow-xl"
card.innerHTML=`
  <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>

`
videoContainer.append(card)
    
})




 }

loadCategories();
loadVideos();

const carddemo=
{
    "category_id": "1001",
    "video_id": "aaal",
    "thumbnail": "https://i.ibb.co/hdtZYbB/enchnting.jpg",
    "title": "Enchanted Harmonies",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/jh1q2F3/shopia.jpg",
            "profile_name": "Sophia Williams",
            "verified": false
        }
    ],
    "others": {
        "views": "7.6K",
        "posted_date": "16450"
    },
    "description": "'Enchanted Harmonies' by Sophia Williams enchants listeners with its delicate, soothing sounds and melodic complexity. Garnering 7.6K views, this piece is perfect for those seeking an immersive musical experience that blends elegance with emotion, offering a unique soundscape that resonates deeply with its audience."
}