const cards=["1","2","3","4","5","6","1","2","3","4","5","6"];
            
            
            let number=0,score1=0,score2=0;
            let first,second ;
            let tour=1;
            
            function shuffle(array) {
                document.getElementById('player1').style.color ="#ffff3f" ;
                                document.getElementById('score1').style.color ="#ffff3f" ;
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

            function flip(){
            
                let id = event.target.id ;
                
                console.log("i m in flip : "+document.getElementById(id).src);
                if (document.getElementById(id).src =="http://127.0.0.1/memorygametest/" + "back.jpg" ){
                    document.getElementById(id).src = cards[id] + ".jpg";
                    console.log("i m in flip1");
                    console.log(id);
                    number=number+1;
                    console.log(number);
                    if (number == 1){
                        first=id;
                    }
                    
                    
                    else{
                        second = id ;
                        
                        if (cards[first]!=cards[second] ){
                            setTimeout(after,1500);
                           
                        }
                        else{
                            if(tour==1){
                                score1++;
                            console.log(score1);
                    document.getElementById('score1').innerHTML=score1;

                            }else{
                                score2++;
                            console.log(score2);
                    document.getElementById('score2').innerHTML=score2;
                            }
                            
                            
                        }
                        number=0;
                    }
                    
                }
                console.log(number);

            }
            function after(){
                document.getElementById(first).src = "back.jpg";
                            document.getElementById(second).src = "back.jpg"; 
                            if (tour==1){
                                tour=2;
                                document.getElementById('player2').style.color ="#ffff3f" ;
                                document.getElementById('score2').style.color ="#ffff3f" ;
                                document.getElementById('player1').style.color ="#ffff" ;
                                document.getElementById('score1').style.color ="#ffff" ;
                            }else{
                                tour=1;
                                document.getElementById('player1').style.color ="#ffff3f" ;
                                document.getElementById('score1').style.color ="#ffff3f" ;
                                document.getElementById('player2').style.color ="#ffff" ;
                                document.getElementById('score2').style.color ="#ffff" ;
                            }

            }
            
         