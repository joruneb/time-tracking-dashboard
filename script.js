var daily = document.getElementsByClassName('daily');
var weekly = document.getElementsByClassName('weekly');
var monthly = document.getElementsByClassName('monthly');
var dailybtn = document.getElementById('dailybtn');
var weeklybtn = document.getElementById('weeklybtn');
var monthlybtn = document.getElementById('monthlybtn');

function dailyShow(){
   for(var i = 0; i < daily.length; i++){
       daily[i].style.display = "flex";
       daily[i].style.flexDirection = "column";
       weekly[i].style.display = "none";
       monthly[i].style.display = "none";
   }
   dailybtn.classList.add('active');
   weeklybtn.classList.remove('active');
   monthlybtn.classList.remove('active');
}

function weeklyShow(){
   for(var i = 0; i < weekly.length; i++){
    daily[i].style.display = "none";
    weekly[i].style.display = "flex";
    monthly[i].style.display = "none";
   }
   dailybtn.classList.remove('active');
   weeklybtn.classList.add('active');
   monthlybtn.classList.remove('active');
}

function monthlyShow(){
    for(var i = 0; i < weekly.length; i++){
     daily[i].style.display = "none";
     weekly[i].style.display = "none";
     monthly[i].style.display = "flex";
    }
   dailybtn.classList.remove('active');
   weeklybtn.classList.remove('active');
   monthlybtn.classList.add('active');
 }
