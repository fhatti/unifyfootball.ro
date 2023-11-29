const videoBg = document.getElementById("bg-video"); 
const videoBtn = document.getElementById("video-btn");



videoBtn.addEventListener("click",function ()
{
    if(videoBg.paused)
    {
        videoBg.play();
        videoBtn.innerHTML = `<span class="material-symbols-outlined">
        play_circle
        </span>`
        videoBtn.style.color="#2A9B59";
    }
    else
    {
        videoBg.pause();
        videoBtn.innerHTML=`<span class="material-symbols-outlined">
        pause_circle
        </span>`;
        videoBtn.style.color="red";
    }
  

})