let flag=true;
const navbar=document.getElementById('navbar')

document.querySelector('.slider').addEventListener('click',()=>{
    if(flag){
        document.getElementById('full').style.backgroundColor = "#000000";
        document.getElementById('navbar').classList.remove('bg-warning');
        document.getElementById('navbar').classList.add('bg-secondary');
        document.getElementById('demo').style.backgroundColor = "#383838";
        document.getElementById('para').style.backgroundColor = "#383838";
        document.getElementById('para_h1').style.color = "#F5F5F5";
        document.getElementById('contacts_h1').style.backgroundColor = "#383838";        
        document.getElementById('contacts_img').style.backgroundColor = "#383838";
        flag=false;
    }
    else{
        document.getElementById('full').style.backgroundColor = "#ffffff";
        document.getElementById('navbar').classList.remove('bg-secondary');
        document.getElementById('navbar').classList.add('bg-warning');
        document.getElementById('demo').style.backgroundColor = "#FFFACD";
        document.getElementById('para').style.backgroundColor = "greenyellow";
        document.getElementById('para_h1').style.color = "#191970";
        document.getElementById('contacts_h1').style.backgroundColor = "gold";        
        document.getElementById('contacts_img').style.backgroundColor = "#FFE4B5";
        flag=true;
    }
})


