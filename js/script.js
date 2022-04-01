
function temporary2(t) {
  t.style.opacity = "0.9";
  if(t.id === "tone_do"){
    let tone_do = new Audio("do.wav");
    tone_do.play();
  }
  if(t.id === "tone_re"){
    let tone_re = new Audio("re.wav");
    tone_re.play();
  }
  if(t.id === "tone_mi"){
    let tone_mi = new Audio("mi.wav");
    tone_mi.play();
  }
  if(t.id === "tone_fa"){
    let tone_fa = new Audio("fa.wav");
    tone_fa.play();
  }
  if(t.id === "tone_sol"){
    let tone_sol = new Audio("sol.wav");
    tone_sol.play();
  }
  if(t.id === "tone_la"){
    let tone_la = new Audio("la.wav");
    tone_la.play();
  }
  if(t.id === "tone_si"){
    let tone_si = new Audio("si.wav");
    tone_si.play();
  }
}
function temporary3(t) {
  t.style.opacity = "0.0";
}
function t4() {
    let tone_do = new Audio("625.wav");
    tone_do.play();
}
function t5() {
let tone_do = new Audio("blue.mp3");
tone_do.play();
}
function t6() {
let tone_do = new Audio("2.mp3");
tone_do.play();
}
function t7() {
let tone_do = new Audio("3.mp3");
tone_do.play();
}
function s6() {
let tone_do = new Audio("s6.mp3");
tone_do.play();
}
function s5() {
let tone_do = new Audio("s5.mp3");
tone_do.play();
}
function s4() {
let tone_do = new Audio("s4.wav");
tone_do.play();
}
function s3() {
let tone_do = new Audio("s3.wav");
tone_do.play();
}
function s2() {
let tone_do = new Audio("s1.wav");
tone_do.play();
}
function s1() {
let tone_do = new Audio("s.wav");
tone_do.play();
}
let my_music = new Audio("play1.wav");
my_music.loop = true;
my_music.onended = function(){
my_music.play();
}

function play_music(t){
  if(music_paused){
      my_music.play();
      t.style.transform = "rotate(45deg)";
  }
  else{
      my_music.pause();
       t.style.transform = "rotate(0)";
  }
  music_paused = !music_paused;
}
let my_music2 = new Audio("drum.wav");
my_music2.loop = true;
my_music2.onended = function(){
my_music2.play();
}
function play_music2(t){
  if(music_paused){
      my_music2.play();
      t.style.transform = "rotate(45deg)";
  }
  else{
      my_music2.pause();
       t.style.transform = "rotate(0)";
  }
  music_paused = !music_paused;
}
let my_music3 = new Audio("pl3.wav");
my_music3.loop = true;
my_music3.onended = function(){
my_music3.play();
}
function play_music3(t){
  if(music_paused){
      my_music3.play();
      t.style.transform = "rotate(45deg)";
  }
  else{
      my_music3.pause();
       t.style.transform = "rotate(0)";
  }
  music_paused = !music_paused;
}
let my_music4 = new Audio("play4.mp3");
my_music4.loop = true;
my_music4.onended = function(){
my_music4.play();
}
function play_music4(t){
  if(music_paused){
      my_music4.play();
      t.style.transform = "rotate(45deg)";
  }
  else{
      my_music4.pause();
       t.style.transform = "rotate(0)";
  }
  music_paused = !music_paused;
}


function waves() {
    document.getElementById("wave1").style.display="none";
      document.getElementById("l1").style.display="block";
}
function waves_out() {
document.getElementById("l1").style.display="none";
  document.getElementById("wave1").style.display="block";
}
function waves2() {
document.getElementById("wave2").style.display="none";
  document.getElementById("l2").style.display="block";
}
function waves_out2() {
document.getElementById("l2").style.display="none";
document.getElementById("wave2").style.display="block";
}
function waves3() {
document.getElementById("wave3").style.display="none";
  document.getElementById("l3").style.display="block";
}
function waves_out3() {
document.getElementById("l3").style.display="none";
document.getElementById("wave3").style.display="block";
}
function waves4() {
document.getElementById("wave4").style.display="none";
  document.getElementById("l4").style.display="block";
}
function waves_out4() {
document.getElementById("l4").style.display="none";
document.getElementById("wave4").style.display="block";
}
function waves5() {
document.getElementById("wave5").style.display="none";
  document.getElementById("l5").style.display="block";
}
function waves_out5() {
document.getElementById("l5").style.display="none";
document.getElementById("wave5").style.display="block";
}
function waves6() {
document.getElementById("wave6").style.display="none";
  document.getElementById("l6").style.display="block";
}
function waves_out6() {
document.getElementById("l6").style.display="none";
document.getElementById("wave6").style.display="block";
}

let music_paused = false;
$(function () {
    $("#w1").draggable();
});
$(function () {
    $("#w2").draggable();
});
$(function () {
    $("#w3").draggable();
});
$(function () {
    $("#w4").draggable();
});
$(function () {
    $("#w5").draggable();
});
$(function () {
    $("#w6").draggable();
});
$(function () {
    $("#w7").draggable();
});
$(function () {
    $("#w8").draggable();
});
$(function () {
    $("#w9").draggable();
});
// <---
let flag = true;
// Вызывается при завершении анимации
function AnimationEndHandler(node, e) {
    if(flag) {
        node.style.display = "none";
    }
}

function f(){
    let cont = document.getElementById("cont");
    let nodes = cont.childNodes;
    for (let node of nodes) {
        if(node.nodeType === 1){
            node.addEventListener("animationend", AnimationEndHandler.bind(null, node));
            node.classList.add("disappear");
            node.style.display = "none";
        }
    }
}
// --->
$(document).ready(function(){
    $(".move-area").mousemove(function(event) {
        let eye = $(".eye");
        let x = (eye.offset().left) + (eye.width() / 2);
        let y = (eye.offset().top) + (eye.height() / 2);
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
        });
    });
    // <---
    $("#button").click(function () {
        let cont = document.getElementById("cont");
        let nodes = cont.childNodes;
        if(flag){
            for (let node of nodes) {
                if(node.nodeType === 1){
                    node.style.display = "block";
                    node.classList.remove("disappear");
                    node.classList.add("appear");

                }
            }
            flag = !flag;
        }
        else{
            for (let node of nodes) {
                if(node.nodeType === 1){
                    node.classList.remove("appear");
                    node.classList.add("disappear");
                }
            }
            flag = !flag;
        }
    });
    // --->
    $("#p3").click(function(){
        $("#p31").css("display", "block");
        $("#p3").css("display", "none");
    });

    $("#p31").click(function(){
        $("#p31").css("display", "none");
        $("#p3").css("display", "block");
    });

    $("#p2").click(function(){
        $("#p21").css("display", "block");
        $("#p2").css("display", "none");
    });

    $("#p21").click(function(){
        $("#p21").css("display", "none");
        $("#p2").css("display", "block");
    });

    $("#p1").click(function(){
        $("#p11").css("display", "block");
        $("#p1").css("display", "none");
    });

    $("#p11").click(function(){
        $("#p11").css("display", "none");
        $("#p1").css("display", "block");
    });
f()
});
