// url (required) https://livescore-api.com/api-client/scores/live.json?&key=yX7RePBkOb5lsHwQ&secret=oHjyBxTywRg9UlysjFkxvVSk7XFzFcq3
// api key: 	yX7RePBkOb5lsHwQ
const tableStanding = document.getElementById("data-output");
const nextMatch = document.getElementById("fixtures");
const playersContainer= document.getElementById("players");
const topScorers = document.getElementById("topscorers")
// fetch("https://livescore-api.com/api-client/leagues/table.json?competition_id=61&key=yX7RePBkOb5lsHwQ&secret=oHjyBxTywRg9UlysjFkxvVSk7XFzFcq3")
// .then(res =>{
//      return res.json();
// })
// //data.data.table));
// .then(data => {

//     console.log(data.data.table);
//     data.data.table.forEach(team => {
//         tableStanding.innerHTML += `
//         <tr>
//         <td> ${team.rank}</td>
//         <td> ${team.name}</td>
//         <td> ${team.matches}</td>
//         <td> ${team.won}</td>
//         <td> ${team.drawn}</td>
//         <td> ${team.lost}</td>
//         <td> ${team.points}</td>
        
      
//         </tr>
      
//         `
//     })

    
// });

// fetch("https://livescore-api.com/api-client/fixtures/matches.json?competition_id=61&key=yX7RePBkOb5lsHwQ&secret=oHjyBxTywRg9UlysjFkxvVSk7XFzFcq3")
// .then(resp => {return resp.json();})
// .then(data => {
//     console.log(data.data.fixtures);
//     data.data.fixtures.forEach(match => {
//         nextMatch.innerHTML += `
//         <div>${match.away_name} vs ${match.home_name}<div>
//         ${match.location}
//     `
//     })
  
// });

const apiKey = "897547d91a0541ac2fa3a973cfee5e490255ac1ec39b48477a7e25cdace8af23";
const urlCountries =`https:/   v2.allsportsapi.com/football/?met=Countries&APIkey=${apiKey}`;
const urlStandings = `https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=272&APIkey=${apiKey}`;
const urlLeagues = `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${apiKey}`;
const urlTeams = `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=190&APIkey=${apiKey}`;
const urlFixtures = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${apiKey}&from=2023-11-26&to=2023-11-27&leagueId=272&timezone=Europe/Bucharest`;
const urlTopScorers = `https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=272&APIkey=${apiKey}`;


fetch(urlCountries)
.then(resp => { return resp.json();})
.then(data => console.log(data));

fetch(urlStandings)
.then(resp => { return resp.json();})
.then(data => {

    console.log(data.result.total);
    data.result.total.forEach(team => {
        tableStanding.innerHTML += `
              <tr class=''>
            <td class='team-place'> ${team.standing_place}</td>
            <td class='team-log'> ${team.standing_team}</td>
              <td> ${team.standing_P}</td>
              <td> ${team.standing_W}</td>
              <td> ${team.standing_D}</td>
              <td> ${team.standing_L}</td>
            <td> ${team.standing_PTS}</td>
                </tr>
                `
    })
    

    
});

fetch(urlLeagues)
.then(resp => { return resp.json();})
.then(data => console.log(data));

// fetch(urlTeams)
// .then(resp => {return resp.json();})
// .then(data =>{
//     console.log(data.result[0].players);
//     data.result[0].players.forEach( player =>
//         {
//             playersContainer.innerHTML += `
//             <div>
//             <h2>Nume : ${player.player_name}
//             <img class='bg-img' src='${player.player_image}'>
//             <p>Numar : ${player.player_number}</p>
//             <p>${player.player_type}</p>
//             </div>
//             `
//         })
// });

fetch(urlFixtures)
.then(resp => {return resp.json();})
.then(data => {
    console.log(data.result);
    data.result.forEach(matches => {
        nextMatch.innerHTML += `
        <div class= 'item'>
        <p> ${matches.league_round} </p>
        <p> ${matches.event_home_team} vs ${matches.event_away_team} </p>
        <p> ${matches.event_time}</p>
        <p> Stadion: ${matches.event_stadium} <span>${matches.event_date}</span> </p>
        </div>
        `
    })
} );

fetch(urlTopScorers)
.then(resp => {return resp.json();})
.then(data => {
    console.log(data.result);
    data.result.forEach(playerstats  => {
        topScorers.innerHTML += `
        <div class='item'>
         <p>Nume: ${playerstats.player_name}</p>
         <p>Echipa : ${playerstats.team_name}</p>
         <p> Goluri : ${playerstats.goals} </p>
         <p> Pase de gol : ${playerstats.assists} </p>
        </div>
        `
    })
});
