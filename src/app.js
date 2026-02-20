import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

 let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let final = ['.es', '.com', '.net'];

  for (let index = 0; index < pronoun.length; index++) {
    for (let i = 0; i < adj.length; i++) {
        for (let e = 0; e < noun.length; e++) {
            for (let x = 0; x < final.length; x++) {
              console.log(pronoun[index]+adj[i]+noun[e]+final[x]);  
                
            }
        }
    }
  }