console.log("heloooooooo");
let index=1;
let audioelement= new Audio("songs/1.mp3");
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById("progressbar");
let gif=document.getElementById("gif");
let mastersongname = document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName("songitem"));


let songs=  [
    {songname: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songname: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songname: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songname: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songname: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songname: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songname: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songname: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songname: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
];

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

    
});

masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity=1;

    }
    else{
        audioelement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }

})

audioelement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");

var progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
progressbar.value=progress;
});
progressbar.addEventListener("change",()=>{
    audioelement.currentTime=progressbar.value*audioelement.duration/100;
});


const makeallplays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeallplays();
        index=parseInt(e.target.id)+1;
e.target.classList.remove("fa-circle-play");
e.target.classList.add("fa-circle-pause");
   audioelement.src="songs/"+ index +".mp3";
   mastersongname.innerText = songs[index-1].songname;
   audioelement.currentTime=0;
   audioelement.play();
   gif.style.opacity=1;
   masterplay.classList.remove("fa-circle-play");
   masterplay.classList.add("fa-circle-pause");
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(index>9){
        index=1;
    }
    else
    index+=1;
    audioelement.src="songs/"+ index +".mp3";
    mastersongname.innerText = songs[index-1].songname;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click",()=>{
    if(index<=1){
        index=1;
    }
    else
    index-=1;
    audioelement.src="songs/"+ index +".mp3";
    mastersongname.innerText = songs[index-1].songname;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
});