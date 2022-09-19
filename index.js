function updateClock(){
    var now=new Date();

    var dname=now.getDay(),
        mon=now.getMonth(),
        dnum=now.getDate(),
        year=now.getFullYear(),
        hours=now.getHours(),
        sec=now.getSeconds(),
        min=now.getMinutes(),
        
        pe="AM";
    // const sec=now.getSeconds(),
    
    if(hours===0){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
        pe="PM";
    }

    Number.prototype.pad=function(digits){
        for(var n=this.toString();n.length<digits;n=0+n);
        return n;
    }


    // console.log(sec)
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var weeks=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var ids=["dayname","months","daynum","year","hours","minutes","seconds","periods"];
    var value=[weeks[dname],months[mon],dnum,year,hours.pad(2),min.pad(2),sec.pad(2),pe];

    for(var i=0;i<ids.length;i++){
       document.getElementById(ids[i]).innerHTML=value[i];
    }

        
        
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()",1000);
}