'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched?','');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched already?', '');
    }
}


start();




const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true

};


function rememberMyFilms() {    
 for(let i = 0;i < 2;i++){

    const a = prompt('What did you watch there?', ''),
          b = prompt('What is your rating towards it?', '');
    if(a != null  && b != null && a !='' && b != ""  && a.length <50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}     }

rememberMyFilms();



function detectPersonalLevel() {
if (personalMovieDB.count < 10 ){
    console.log("you have watched a small ammount of movies");
   }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
    console.log("You are classic movie viewer");
  }else if (personalMovieDB.count >= 30){
    console.log("You are a  movie addict");
  }else{
    console.log("Error");
  }
}
detectPersonalLevel();


function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}



function writeYourGenres(){
    for(let i = 1;i < 4;i++){
        const genre = prompt (`What is your favorite genre on the number  ${i}?`);
        personalMovieDB.genres[i -1]= genre;
       
    }


}

writeYourGenres();





showMyDB(personalMovieDB.private);