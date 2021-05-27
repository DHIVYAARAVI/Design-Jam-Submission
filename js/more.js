let flag=true
var h4 = document.getElementsByTagName("h4");
var p = document.getElementsByTagName('p');

document.querySelector('.slider').addEventListener('click',()=>{
    if(flag){
           document.getElementById('full').style.backgroundColor = "#000000";
           document.getElementById('navbar').classList.remove("bg-warning");
           document.getElementById('navbar').classList.add('bg-secondary'); 
           document.getElementById('card1').style.backgroundColor = "#383838";
           document.getElementById('card2').style.backgroundColor = "#383838";
           document.getElementById('card3').style.backgroundColor = "#383838";
           document.getElementById('card4').style.backgroundColor = "#383838";
           document.getElementById('card5').style.backgroundColor = "#383838";
           document.getElementById('card6').style.backgroundColor = "#383838";
           document.getElementById('card7').style.backgroundColor = "#383838";
           document.getElementById('card8').style.backgroundColor = "#383838";           
           for( i=0 ; i<h4.length ; i++){
               h4[i].style.color = "white";
           }
           for(i=0 ; i<p.length ; i++){
               p[i].style.color = "#4682B4";
           }
           flag=false;
    }
    else{
        document.getElementById('full').style.backgroundColor = "#ffffff";
        document.getElementById('navbar').classList.remove("bg-secondary");
        document.getElementById('navbar').classList.add('bg-warning'); 
        document.getElementById('card1').style.backgroundColor = "#BDB76B";
        document.getElementById('card2').style.backgroundColor = "#BDB76B";
        document.getElementById('card3').style.backgroundColor = "#BDB76B";
        document.getElementById('card4').style.backgroundColor = "#BDB76B";
        document.getElementById('card5').style.backgroundColor = "#BDB76B";
        document.getElementById('card6').style.backgroundColor = "#BDB76B";
        document.getElementById('card7').style.backgroundColor = "#BDB76B";
        document.getElementById('card8').style.backgroundColor = "#BDB76B";
        for( i=0 ; i<h4.length ; i++){
            h4[i].style.color = "#800000";
        }
        for(i=0 ; i<p.length ; i++){
            p[i].style.color = "white";
        }
        flag=true;
    }
})