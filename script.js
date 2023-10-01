let images=["1","2","3","4","5","6"];
let compteur=[0,0,0,0,0,0];
let cards=[];
//const cards=["1","2","3","4","5","6","1","2","3","4","5","6"];
            
            
            let number=0,score1=0,score2=0;
            let first,second ;
            let tour=1;
            function shuffle(){
                for (let i=0;i< images.length*2;i++){
                    while(true){
                        let x=Math.floor(Math.random()*images.length);
                        if (compteur[x]<2){
                            cards.push(images[x]);
                            compteur[x]++;
                            break;
                        }
                    }
                    
                }
                console.log("cards first call :",cards);
            }
            


            function flip(){
            
                let id = event.target.id ;
                
                
               
                
                let t=document.getElementById(id).src.split("/");
                if (t[t.length-1]== "back.jpg" ){
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
                            setTimeout(after,1200);
                           
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
            
            
         