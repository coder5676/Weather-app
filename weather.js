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
function opendesc(){

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
/*scroll animation*/
var nightsky="linear-gradient(130deg,#4d5056,#191b1c)";
var cloudysky="linear-gradient(130deg,#76a5e3,#0162ff)";
var rainsky="linear-gradient(130deg,#9cb4c5,#2e3132)";
var daysky="linear-gradient(130deg,#b8f3ff,#00e5ff)";
var color="";
var textcolor="";
window.addEventListener('scroll',()=>{
const y=window.scrollY||window.pageYOffset;
if(y==0){

document.getElementById("scrollbox").style.backgroundColor="";
document.getElementById("main").style.background=color;
document.getElementById("descdata").style.background="#153542";
document.getElementById("scrollbox").style.transitionDuration="0.7s";
document.getElementById("main").style.filter="blur(0px)";


}
else{
document.getElementById("scrollbox").style.background="black";
document.getElementById("main").style.filter="blur(7px)";
document.getElementById("main").style.background="linear-gradient(20deg,black,black)";
document.getElementById("scrollbox").style.backgroundColor="";
document.getElementById("main").style.transitionDuration="0.7s";
document.getElementById("descdata").style.background="linear-gradient(120deg,rgb(0, 200, 255),rgb(153, 0, 255))";

}
})
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
document.getElementById("main").style.background=color;
document.getElementById("main1").style.color=textcolor;
const description=data2.weather[0].description;
desc(description);
document.getElementById("desc2").innerHTML="Humidity is "+data2.main.humidity+"% with "+data2.weather[0].description;
}
function setdata(data){
const week=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
const temparr=["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12","t13","t14","t15","t16","t17","t18","t19","t20","t21","t22","t23","t24","t25","t26","t27","t28","t29","t30","t31","t32","t33","t34","t35","t36","t37","t38","t39","t40"];
for (i=0;i<40;i++){
let des=data.list[i].weather[0].description;
document.getElementById(temparr[i]).innerHTML=Math.round(data.list[i].main.temp )+"°"+ weathericon(des);}
const d=getday();
document.getElementById("y2").innerHTML=week[d+2];
document.getElementById("y3").innerHTML=week[d+3];
document.getElementById("y4").innerHTML=week[d+4];
}
function weathericon(description){
    const desc=["clear sky","few clouds","scattered clouds","broken clouds","shower rain","rain","thunderstorm","snow","mist","overcast clouds","light rain","moderate rain","heavy intensity rain"];
    const descicon=["🪂","🌤️","🌨️","🌥️","🌧️","☔","⚡","☃️","😶‍🌫️","☁️","🌧️","☔","⛈️"];
    const position=desc.indexOf(description);
    return descicon[position];
}
function getday(){
let data=new Date;
let day=data.getDay();
return day;
}
function desc(description){
const quote=[" it's a nice day ","Clouds are beautiful outside","Don't forget your umbrella","Winds are speedy today","Look plants are so happy","Weather is wet today","Avoid going out it's lightning","Nice day for a snowman","Drive safe low visibility","It could rain just wait","Nice time for a tea","Outside is beautiful in rain.","Heavy rain avoid going out today"];
const desc=["clear sky","few clouds","scattered clouds","broken clouds","shower rain","rain","thunderstorm","snow","mist","overcast clouds","light rain","moderate rain","heavy intensity rain"];
const position=desc.indexOf(description);
document.getElementById("desc").innerHTML=quote[position];

};
function daynightanimations(sunrise,sunset,descr){
const rise= new Date(sunrise* 1000);
const set = new Date(sunset* 1000);
const rt=rise.getHours();
const st=set.getHours();
const day=new Date;
const d=day.getHours();
if(d<rt || d>st){
    color=nightsky;
    textcolor="white";
    norain();
}
else{
textcolor="black";
const desc=["clear sky","few clouds","scattered clouds","broken clouds","shower rain","rain","thunderstorm","snow","mist","overcast clouds","light rain","moderate rain","heavy intensity rain"];
const rainatm=["shower rain","rain","thunderstorm","light rain","moderate rain","heavy intensity rain"];
const normalday=["clear sky","few clouds"];
const nosun=["scattered clouds","broken clouds","overcast clouds"];
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
    norain();
}
}

};


