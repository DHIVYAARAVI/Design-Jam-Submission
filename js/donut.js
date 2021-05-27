let flag = true
var h4 = document.getElementsByTagName("h4");
var p = document.getElementsByTagName('p');

document.querySelector('.slider').addEventListener('click',()=>{
    if(flag){
        document.getElementById('navbar').classList.remove('bg-warning');
        document.getElementById('navbar').classList.add('bg-secondary');
        document.getElementById('full').style.backgroundColor = "#000000";
        document.getElementById('h3_style').style.color = "white";
        document.getElementById('card1').style.backgroundColor = "#383838";
        document.getElementById('card2').style.backgroundColor = "#383838";
        document.getElementById('card3').style.backgroundColor = "#383838";
        document.getElementById('card4').style.backgroundColor = "#383838";        
        for( i=0 ; i<h4.length ; i++){
            h4[i].style.color = "white";
        }
        for(i=0 ; i<p.length ; i++){
            p[i].style.color = "#4682B4";
        }
        document.getElementById('view_btn').style.backgroundColor = "darkblue";
        flag=false;
    }
    else{
        document.getElementById('navbar').classList.remove('bg-secondary');
        document.getElementById('navbar').classList.add('bg-warning');
        document.getElementById('full').style.backgroundColor = "#ffffff";        
        document.getElementById('h3_style').style.color = "#800000";
        document.getElementById('card1').style.backgroundColor = "#BDB76B";
        document.getElementById('card2').style.backgroundColor = "#BDB76B";
        document.getElementById('card3').style.backgroundColor = "#BDB76B";
        document.getElementById('card4').style.backgroundColor = "#BDB76B";
        for( i=0 ; i<h4.length ; i++){
            h4[i].style.color = "#800000";
        }
        for(i=0 ; i<p.length ; i++){
            p[i].style.color = "white";
        }
        document.getElementById('view_btn').style.backgroundColor = "#FF8C00";
        flag=true;
    }
})