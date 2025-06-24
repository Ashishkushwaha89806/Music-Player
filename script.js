let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('classItem'));
let songs = [
    {songName:"O-Mahi-O-Mahi",filePath:"songs/1.mp3",ConverPath:"images/O-Maahi.jpg"},
    {songName:"O-sajni",filePath:"songs/2.mp3",ConverPath:"images/o sajni.jpg"},
    {songName:"pehle bhi main ",filePath:"songs/3.mp3",ConverPath:"images/pehle bhi main.jpg"},
    {songName:"aaj ki raat ",filePath:"songs/4.mp3",ConverPath:"images/aaj ki raat.jpg"},
    {songName:"ve kamleya",filePath:"songs/5.mp3",ConverPath:"images/ve kamleya.jpg"},
    {songName:"husn tera tauba",filePath:"songs/6.mp3",ConverPath:"images/husn tera.jpg"},
    {songName:"o-mahi-o-mahi 2",filePath:"songs/7.mp3",ConverPath:"images/O-Maahi.jpg"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = song[i].ConverPath;
    element.getElementsByclassName('songName')[0].innerText = song[i].songName;

})
masterPlay.addEventListener('click',()=>{ 
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
         masterPlay.classList.remove( 'fa-play-circle');
         masterPlay.classList.add( 'fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
          masterPlay.classList.remove( 'fa-pause-circle');
         masterPlay.classList.add( 'fa-play-circle');
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;


 })
 myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
 })
 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
 }
 Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllPlays();

       songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove( 'fa-play-circle');
         masterPlay.classList.add( 'fa-pause-circle');
    })
 })
 document.getElementById('next').addEventListener('click',()=>{
     if(songIndex>=6){
         songIndex = 0
     }
     else{
         songIndex += 1;
     }
     audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove( 'fa-play-circle');
      masterPlay.classList.add( 'fa-pause-circle');
  })
 
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
     }
    else{
         songIndex -= 1;
     }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove( 'fa-play-circle');
      masterPlay.classList.add( 'fa-pause-circle');
     })