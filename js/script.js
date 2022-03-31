



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
    // Выполняем по завершении загрузки страницы
window.addEventListener("load", function onWindowLoad() {
    // Инициализируем переменные
    // Генерируем палитру в элемент #palette
    generatePalette(document.getElementById("palette"));

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // переменные для рисования
    context.lineCap = "round";
    context.lineWidth = 8;

    // вешаем обработчики на кнопки
    // очистка изображения
    document.getElementById("clear").onclick = function clear() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };

    // На любое движение мыши по canvas будет выполнятся эта функция
    canvas.onmousemove = function drawIfPressed (e) {
      // в "e"  попадает экземпляр MouseEvent
      var x = e.offsetX;
      var y = e.offsetY;
      var dx = e.movementX;
      var dy = e.movementY;

      // Проверяем зажата ли какая-нибудь кнопка мыши
      // Если да, то рисуем
      if (e.buttons > 0) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - dx, y - dy);
        context.stroke();
        context.closePath();
      }
    };

    function generatePalette(palette) {
      // генерируем палитру
      // в итоге 5^3 цветов = 125
      for (var r = 0, max = 4; r <= max; r++) {
        for (var g = 0; g <= max; g++) {
          for (var b = 0; b <= max; b++) {
            var paletteBlock = document.createElement('div');
            paletteBlock.className = 'button';
            paletteBlock.addEventListener('click', function changeColor(e) {
              context.strokeStyle = e.target.style.backgroundColor;
            });

            paletteBlock.style.backgroundColor = (
              'rgb(' + Math.round(r * 255 / max) + ", "
              + Math.round(g * 255 / max) + ", "
              + Math.round(b * 255 / max) + ")"
            );

            palette.appendChild(paletteBlock);
          }
        }
      }
    }

});

});
