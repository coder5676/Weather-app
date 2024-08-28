
function allow(){
    document.getElementById("perm").classList.add("open");
    showlocationdata();
}
function disallow(){
    document.getElementById("perm").classList.add("open");
}
function openswipebox(){
document.getElementById("swipebox").classList.add("openswipebox");
}
function closeswipebox(){
document.getElementById("swipebox").classList.remove("openswipebox");
showcitydata();
}
function closeswipebox2(){
document.getElementById("swipebox").classList.remove("openswipebox");
showlocationdata();
}

/*getting weather by location*/

/*function to get location*/
function getlocation(){
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else {
document.getElementById("locationinfo").style.backgroundColor = "red";
}
}
function showPosition(position) {
document.getElementById("latitude").innerHTML=position.coords.latitude;
document.getElementById("longitude").innerHTML=position.coords.longitude;
}

function showcity(){
if(document.getElementById("city").value!=""){
const city=document.getElementById("city").value;
document.getElementById("name").innerHTML=city;}


}
function showcitydata(){
if(document.getElementById("name").innerHTML!=""){
   const city=document.getElementById("name").innerHTML;
   getweatherbycity(city);}
}
function showlocationdata(){
if(document.getElementById("latitude").innerHTML!="none"){
    const lat=document.getElementById("latitude").innerHTML;
    const lon=document.getElementById("longitude").innerHTML;
    getweatherbylocation(lat,lon);
}
}
function raining(){
document.getElementById("r1").style.visibility="visible";
document.getElementById("r2").style.visibility="visible";
document.getElementById("r3").style.visibility="visible";
document.getElementById("r4").style.visibility="visible";
document.getElementById("r5").style.visibility="visible";
}
function norain(){
document.getElementById("r1").style.visibility="hidden";
document.getElementById("r2").style.visibility="hidden";
document.getElementById("r3").style.visibility="hidden";
document.getElementById("r4").style.visibility="hidden";
document.getElementById("r5").style.visibility="hidden";
}

/*function to check day night*/
function check(rt,st,d){
    var a=0;
   /*write your code here*/
   if(rt<st){
if(d>st || d<rt){
    a=0;
}else{
    a=1
}}
else{
    if(d>st && d<rt){
        a=0;
    }
    else{
        a=1;
    }
}
     return a;

}
/*scroll animation*/
var nightsky="linear-gradient(130deg,#4d5056,#191b1c)";
var cloudysky="linear-gradient(130deg,#76a5e3,#0162ff)";
var rainsky="linear-gradient(130deg,#9cb4c5,#2e3132)";
var daysky="linear-gradient(130deg,#b8f3ff,#00e5ff)";
var color="";
var textcolor="";
/*modyfying color*/
function daynightanimations(sunrise,sunset,descr){
    const rise= new Date(sunrise* 1000);
    const set = new Date(sunset* 1000);
    const rt=rise.getHours();
    const st=set.getHours();
    const day=new Date;
    const d=day.getHours();
    const rainatm=["shower rain","rain","thunderstorm","light rain","moderate rain","heavy intensity rain"];
    const normalday=["clear sky","few clouds"];
    const nosun=["scattered clouds","broken clouds","overcast clouds"];
    const res=check(rt,st,d);
    console.log(res);
    if(res==0){
        textcolor="white";
        color=nightsky;
        document.getElementById("cloud1").style.backgroundColor="grey";
        if(rainatm.indexOf(descr)>-1){
            document.getElementById("show").style.backgroundColor="white";
            document.getElementById("cloud1").style.visibility="visible";
            raining();
        }
        else if(normalday.indexOf(descr)>-1){
            document.getElementById("show").style.backgroundColor="white";
            document.getElementById("cloud1").style.visibility="hidden";
            norain();
        }
        else if(nosun.indexOf(descr)>-1){
            document.getElementById("show").style.backgroundColor="white";
            document.getElementById("cloud1").style.visibility="visible";
            norain();
        }
        else{
            document.getElementById("show").style.backgroundColor="white";
            document.getElementById("cloud1").style.visibility="visible";
            norain();
        }
    }
    else{
        textcolor="black";
        document.getElementById("cloud1").style.backgroundColor="white";
    if(rainatm.indexOf(descr)>-1){
        color=rainsky;
        document.getElementById("show").style.backgroundColor="white";
        document.getElementById("cloud1").style.visibility="visible";
        raining();
    }
    else if(normalday.indexOf(descr)>-1){
        color=daysky;
        document.getElementById("show").style.backgroundColor="Yellow";
        document.getElementById("cloud1").style.visibility="hidden";
        norain();
    }
    else if(nosun.indexOf(descr)>-1){
        color=cloudysky;
        document.getElementById("show").style.backgroundColor="bisque";
        document.getElementById("cloud1").style.visibility="visible";
        norain();
    }
    else{
        document.getElementById("show").style.backgroundColor="white";
        color="linear-gradient(130deg,#cfdef2,#b6bac3)";
        document.getElementById("cloud1").style.visibility="visible";
        norain();
    }
    }
    };
    
    /* response to swipe up*/


window.addEventListener('scroll',()=>{
const y=window.scrollY;
if(y==0){
document.getElementById("scrollbox").style.backgroundColor="";
document.getElementById("descdata").style.background="rgba(29, 26, 175, 0.297)";
document.getElementById("scrollbox").style.transitionDuration="0s";
document.getElementById("main").style.transitionDuration="0s";
document.getElementById("main").style.height="110%";
document.getElementById("main").style.zIndex="0";
document.getElementById("temp").style.transform="translate(0%,0%) scale(1)";
document.getElementById("temp").style.color=textcolor;
document.getElementById("description").style.transform="translate(0%,0%) scale(1)"
document.getElementById("cloud1").style.transform="translate(0%,0%)";
document.getElementById("show").style.transform="translate(0%,0%)";
document.getElementById("feels").style.visibility="visible"
document.getElementById("minmax").style.visibility="visible";
document.getElementById("svg").style.visibility="visible";
document.getElementById("main").style.background=color;
document.getElementById("description").style.color=textcolor;
document.getElementById("location").style.color=textcolor;
}

else{
document.getElementById("scrollbox").style.background="black";
document.getElementById("main").style.transitionDuration="0s";
document.getElementById("main").style.height="20%";
document.getElementById("main").style.zIndex="2";
document.getElementById("main").style.background="linear-gradient(120deg,black,black)";
document.getElementById("descdata").style.background="linear-gradient(120deg,rgb(0, 200, 255),rgb(153, 0, 255))";
document.getElementById("temp").style.transform="translate(-35%,-100%) scale(0.7)";
document.getElementById("temp").style.color="white";
document.getElementById("description").style.transform="translate(0%,-80%) scale(1.5)";
document.getElementById("description").style.color="white";
document.getElementById("location").style.color="white";
document.getElementById("cloud1").style.transform="translate(30%,140%)";
document.getElementById("show").style.transform="translate(40%,70%)";
document.getElementById("feels").style.visibility="hidden"
document.getElementById("minmax").style.visibility="hidden";
document.getElementById("hh").style.visibility="hidden";
document.getElementById("svg").style.visibility="hidden";

}
});

/*function to convert unix time to real time*/

function convert(unixTimestamp) {
const date = new Date(unixTimestamp * 1000);
const time=date.getHours();
const minutes=date.getMinutes();
return time+":"+minutes;
}
/*---------------------------------------------------------------------------------------------------------------------------------------------*/

const apikey="771268cf58226d55a8385e574cac8de9";
/*get weather by location*/
async function getweatherbylocation(lat,lon){
const url=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
const url2=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
const response=await fetch(url);
const response2=await fetch(url2);
var data=await response.json();
var data2=await response2.json();
console.log(data);
console.log(data2);
document.getElementById("place").innerHTML=data2.name;
setdetails(data2);
setdata(data);
}

/*getting weather by city name*/

async function getweatherbycity(cityname){
const url=`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apikey}&units=metric`;
const url2=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
const response=await fetch(url);
const response2=await fetch(url2);
var data=await response.json();
var data2=await response2.json();
console.log(data);
console.log(data2);
document.getElementById("citytemp").innerHTML=data2.main.temp;
document.getElementById("tempicon1").innerHTML=weathericon(data2.weather[0].description);
setdetails(data2);
setdata(data);
}

var fg="";
var todavg=0;
var tomavg=0;
var todarr=[];
var tomarr=[];
var weekarr=[];
var hum=0;
var descrp="";
var vis=0;
var maintemp=0;
var loc="";
var tmarr=[];
function setdetails(data2){
document.getElementById("temp").innerHTML=Math.round(data2.main.temp)+"°";
document.getElementById("location").innerHTML=data2.name +","+data2.sys.country;
document.getElementById("description").innerHTML=data2.weather[0].main;
document.getElementById("feels").innerHTML="Feels Like "+Math.round(data2.main.feels_like)+"°";
document.getElementById("minmax").innerHTML="Min:"+Math.round(data2.main.temp_min)+"°"+"|"+"Max:"+Math.round(data2.main.temp_max)+"°";
document.getElementById("f").innerHTML= Math.round(data2.main.feels_like)+"°";
document.getElementById("h").innerHTML=data2.main.humidity;
document.getElementById("s").innerHTML=data2.wind.speed;
document.getElementById("a").innerHTML=data2.wind.deg;
document.getElementById("p").innerHTML=data2.main.pressure;
document.getElementById("v").innerHTML=data2.visibility;
document.getElementById("sunrise").innerHTML=convert(data2.sys.sunrise);
document.getElementById("sunset").innerHTML=convert(data2.sys.sunset);
daynightanimations(data2.sys.sunrise,data2.sys.sunset,data2.weather[0].description);
const description=data2.weather[0].description;
desc(description);
fg="Humidity is "+data2.main.humidity+"% with "+data2.weather[0].description;
document.getElementById("desc2").innerHTML=fg;
document.getElementById("main").style.background=color;
document.getElementById("description").style.color=textcolor;
document.getElementById("location").style.color=textcolor;
document.getElementById("temp").style.color=textcolor;
hum=data2.main.humidity;
descrp=data2.weather[0].description;
vis=data2.visibility;
maintemp=Math.round(data2.main.temp)+"°";
loc=data2.name;

}
function setdata(data){
const week=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
const temparr=["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12","t13","t14","t15","t16","t17","t18","t19","t20","t21","t22","t23","t24","t25","t26","t27","t28","t29","t30","t31","t32","t33","t34","t35","t36","t37","t38","t39","t40"];
const timearr=["ti1","ti2","ti3","ti4","ti5","ti6","ti7","ti8","ti9","ti10","ti11","ti12","ti13","ti14","ti15","ti16","ti17","ti18","ti19","ti20","ti21","ti22","ti23","ti24","ti25","ti26","ti27","ti28","ti29","ti30","ti31","ti32","ti33","ti34","ti35","ti36","ti37","ti38","ti39","ti40"];

for (i=0;i<40;i++){
let des=data.list[i].weather[0].description;
document.getElementById(temparr[i]).innerHTML=Math.round(data.list[i].main.temp )+"°"+ weathericon(des);
document.getElementById(timearr[i]).innerHTML=String(data.list[i].dt_txt).slice(11,16);
}
var d=getday();
document.getElementById("y2").innerHTML=week[(d+2)%7];
document.getElementById("y3").innerHTML=week[(d+3)%7];
document.getElementById("y4").innerHTML=week[(d+4)%7];
var arr=[];
var arr2=[];
var xvalues=[];
for(j=0;j<8;j++){
    xvalues.push(String(data.list[j].dt_txt).slice(11,16));
    arr.push(data.list[j].main.temp);
    todarr.push(data.list[j].weather[0].main);
    tomarr.push(data.list[j+8].weather[0].main);
    
}

for(k=0;k<5;k++){
    arr2.push(data.list[k*8].main.temp);

    
}
var sum=0;
var sum2=0;
for (l=0;l<8;l++){
    sum=sum+data.list[l].main.temp;
    sum2=sum2+data.list[l+8].main.temp;
    tmarr.push(String(data.list[l].dt_txt).slice(11,13));
}
console.log(sum);
console.log(sum2);
if(sum>0 && sum2>0){
todavg=sum/8;
tomavg=sum2/8;}
else{
    todavg=sum;
    tomavg=sum2;
}

var x2values=["Today","Tommorow",week[(d+2)%7],week[(d+3)%7],week[(d+4)%7]];
plotgraph(arr,xvalues,"myChart");
plotgraph(arr2,x2values,"mychart2");
}
function weathericon(description){
    const desc=["clear sky","few clouds","scattered clouds","broken clouds","shower rain","rain","thunderstorm","snow","mist","overcast clouds","light rain","moderate rain","heavy intensity rain","haze"];
    const descicon=["🔆","🔅","🌨️","🌥️","🌧️","☔","⚡","☃️","😶‍🌫️","☁️","🌧️","☔","⛈️","😶‍🌫️"];
    const position=desc.indexOf(description);
    return descicon[position];
}
function getday(){
let data=new Date;
let day=data.getDay();
return day;
}
function desc(description){
const quote=[" it's a nice weather outside.","Clouds are beautiful outside","Don't forget your umbrella","Winds are speedy today","Look plants can dance too.","Weather is getting watery.","Avoid going out it's lightning.","Nice day for a snowman.","Drive safe low visibility","It could rain just wait","Nice time for a tea","Outside is beautiful in rain.","Heavy rain avoid going out today","It may be foggy outside"];
const desc=["clear sky","few clouds","scattered clouds","broken clouds","shower rain","rain","thunderstorm","snow","mist","overcast clouds","light rain","moderate rain","heavy intensity rain","haze"];
const position=desc.indexOf(description);
document.getElementById("desc").innerHTML=quote[position];
};

function readout(message){
    let speech= new SpeechSynthesisUtterance();
    let voices=speechSynthesis.getVoices();
    speech.voice=voices[3];
    speech.text=message;
    window.speechSynthesis.speak(speech);

};
/*recognising speech*/
const speechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
    const recognition=new speechRecognition();
function openassistant(){
    recognition.start();
    };
recognition.onstart=function(){ 
    document.getElementById("ask").classList.add("active");
    };

recognition.onend=function(){
    document.getElementById("ask").classList.remove("active");}

recognition.onresult=(event)=>{
    const transcript=String(event.results[0][0].transcript).toLowerCase();
    const keywords=["what is the weather?","how is my day today?","how's my day tomorrow?","how is my day today?","how is my day tomorrow?","what is the temperature today?","will it rain today?","will it rain tomorrow?","should i drive today?","should i drive to work?","any recommendations for today?"];
    const functions=[saytemp(),sayweathertoday(),sayweathertommorow(),sayweathertoday(),sayweathertommorow(),saytemp(),willraintoday(),willraintommorow(),drive(),reccomendtoday()];
    var result=keywords.indexOf(transcript);
    if(result>-1){
        functions[result];
    }
}
function closeassistant(){
    recognition.stop();
}

/*functions for response to audio*/
function saytemp(){
   var say="hi , Today in"+loc+"temperature is"+maintemp+"with"+"humidity of" +hum+"with"+descrp;
    readout(say);
}
function sayweathertoday(){
  var say="hi, today in"+loc+"temperature with average of"+todavg+"with"+descrp;
  console.log(todavg);
   readout(say);
}
function sayweathertommorow(){
    var say="Hello ,tommorow in "+loc+"temperature with average of"+tomavg+"with"+descrp;
   readout(say);

}
function willraintoday(){
    console.log(todarr);
    console.log(tomarr);
    var say="";
        if(todarr.indexOf("Rain")>-1){
          say="hi ,Today in"+loc+"it seems like their is slight possibility of raining around"+tmarr[todarr.indexOf("Rain")];

        }else{
          say=" hi, Today in"+loc+"it seems like their is no possibility of raining";
        }
        readout(say);
    }
        

function willraintommorow(){
    var say="";
        if(tomarr.indexOf("Rain")>-1){
          say="Today in"+loc+"their is slight possibility of raining around"+tmarr[tomarr.indexOf("Rain")];

        }else{
          say="Today in"+loc+"their is no possibility of raining";}
        
        readout(say);


    

}
function drive(){
  var say="";
    if(vis<=2000){
        say="Driving is not reccomended visibility is bad today around"+vis;
    }
    if(vis >2000 && vis<6000){
       say="visibility is average drive slowly with lights on";
    }
    else{
        say="you can drive today visibility is good around"+vis;
    }
    readout(say);
    

}
function reccomendtoday(){
   var say="";
     if(todarr.indexOf("Rain")>-1){
        say="sure Rain is possible around "+tmarr[todarr.indexOf("Rain")]+"grab an umbrella on your way out";
     }
     else if(todarr.indexOf("Mist")>-1){
        say="sure visibility is low today drive safely or stay at home";

        
     }
     else if(todarr.indexOf("Thunderstorm")>-1){
        say="sure Thunderstorm is possible around"+tmarr[todarr.indexOf("Thunderstorm")]+"stay at home";
        
     }
     else if(todarr.indexOf("Fog")>-1){
        say="sure Visibility is low due to fog avoid driving stay at home";
     }
     else if(todarr.indexOf("Snow")>-1){
        say=" sure It's cold outside wear extra clothings to prevent getting caught in cold";
     }
     else if(todarr.indexOf("Dust")>-1){
        say="sure Air is not clean wearing a mask is recommended before going out";

        
     }
     else{
        say="sure Its a beautiful day outside complete all your pending works today";

     }
     readout(say);

}

function plotgraph(arr,xvalues,chart){
const xValues = xvalues;
const yValues = arr;
new Chart(chart, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0.6,
        backgroundColor: "white",
        borderColor: "white",
        borderWidth:3,
        data: yValues,
       
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 0, max:60}}],
      }
    }
  }

)};

