
const homeTeam = document.getElementById("home-team");
const awayTeam = document.getElementById("away-team");

fetch("https://livescore-api.com/api-client/fixtures/matches.json?competition_id=61&key=yX7RePBkOb5lsHwQ&secret=oHjyBxTywRg9UlysjFkxvVSk7XFzFcq3")
.then(resp => {return resp.json();})
.then(data => {
    console.log(data.data.fixtures);
    data.data.fixtures.forEach(match => {
        homeTeam.textContent = `
       ${match.home_name}
    `;
        awayTeam.textContent = `
        ${match.away_name}
     `;
    })
  
});
const apiKey = "897547d91a0541ac2fa3a973cfee5e490255ac1ec39b48477a7e25cdace8af23";
const urlCountries =`https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=${apiKey}`;
const urlStandings = `https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=272&APIkey=${apiKey}`;
const urlLeagues = `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${apiKey}`;
fetch(urlCountries)
.then(resp => { return resp.json();})
.then(data => console.log(data));

fetch(urlStandings)
.then(resp => { return resp.json();})
.then(data => console.log(data));

fetch(urlLeagues)
.then(resp => { return resp.json();})
.then(data => console.log(data));