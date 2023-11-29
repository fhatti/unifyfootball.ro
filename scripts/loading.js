let getToHomepageBtn = document.getElementById("toHomePage");
let count = 1;


setTimeout(animeHomepageBtn,5000);

    


function animeHomepageBtn(){
    getToHomepageBtn.style.visibility="visible";
    getToHomepageBtn.style.animation="saut 2s ease-out";
    getToHomepageBtn.style.animationFillMode="backwards";
}

function getToHome()
{
    location.replace("/pages/homepage.html");
}
