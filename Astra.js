"use strict"

// register the application module
b4w.register("Car_main", function(exports, require) {

// import modules used by the app
var m_app       = require("app");
var m_cfg       = require("config");
var m_data      = require("data");
var m_preloader = require("preloader");
var m_ver       = require("version");

var m_anim      = require("animation");
var m_cont      = require("container");
var m_mouse     = require("mouse");
var m_scenes    = require("scenes");
var m_mat       = require("material");
var m_cam      = require("camera");
var m_cam_anim = require("camera_anim");




// detect application mode
var DEBUG = (m_ver.type() == "DEBUG");

// automatically detect assets path
var APP_ASSETS_PATH = m_cfg.get_assets_path("Car");

/**
 * export the method to initialize the app (called at the bottom of this file)
 */
exports.init = function() {
    m_app.init({
        canvas_container_id: "main_canvas_container",
        callback: init_cb,
        show_fps: DEBUG,
        console_verbose: DEBUG,
        autoresize: true

    });
}

/**
 * callback executed when the app is initialized 
 */
function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }

    // ignore right-click on the canvas element
    canvas_elem.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    load();
}

/**
 * load the scene data
 */
function load() {
  var preloader_cont = document.getElementById("circle");             // Parse!!!!!!!!
    preloader_cont.style.visibility = "visible";
    m_data.load(APP_ASSETS_PATH + "Astra.json", load_cb, preloader_cb); // CAR JSON ATTENTION!
}
//P
//R
//E
//L                                                                       Parse!!!!!!!!!

 function preloader_cb(percentage) {
   $.fn.progressCircle.defaults.nPercent = percentage ;   
   $( '#circle' ).progressCircle()
    if (percentage == 100) {
        //var percent = document.getElementById("prog-circle .percenttext");
        var circle = document.getElementById("circle");
        //percent.style.visibility = "hidden";
  circle.style.visibility = "hidden";
        return;
    }
}
//O
//A
//D
//E
//R


function load_cb(data_id, success) {

    if (!success) {
        console.log("b4w load failure");
        return;
    }
    var vg = document.getElementById("vg").style.visibility = 'visible';
    var logo = document.getElementById("logo").style.visibility = 'visible';
    var colorPanelO = document.getElementById("colorPanel").style.visibility = 'visible';
    var carPanelO = document.getElementById("carSelect").style.visibility = 'visible';
    var calcPanelO = document.getElementById("calcPanel").style.visibility = 'visible';
    var rotcamid = document.getElementById("rotcamid").style.visibility = 'visible';
    

    m_app.enable_camera_controls();


    
    window.Ocar = m_scenes.get_object_by_name("car");
    window.mats = m_scenes.get_object_by_name("Mats");
    window.matType = 0;
    window.calc = "";
    window.currentMat = 0;
    window.buy = '<a href="http://www.rpcentrum.ru" target="_blank">КУПИТЬ</a> | <a href="http://www.rpbaza.ru" target="_blank">ПОКРАСИТЬ</a>';
    // auto-rotate camera======================================================
    var AUTO_ROTATE_RATIO = 0.3;
    m_cam_anim.auto_rotate(AUTO_ROTATE_RATIO);
    //m_app.set_onclick("auto_rotate_cam", auto_rotate_cam);
}
var rot = document.getElementById("rotcamid").addEventListener("click", rotcam, false);
function rotcam(){
  var AUTO_ROTATE_RATIO = 0.3;
    m_cam_anim.auto_rotate(AUTO_ROTATE_RATIO);

}

//------------------------------------------------------------------------Find_Element-------------------------------------------

var picColor = "Marusia";

var container0 = document.getElementById("container");



var full = document.getElementById("full").addEventListener("click", fullscreen, false);

function fullscreen(){

    if (container0.requestFullscreen) {
  container0.requestFullscreen();
} else if (container0.mozRequestFullScreen) {
  container0.mozRequestFullScreen();
} else if (container0.webkitRequestFullscreen) {
  container0.webkitRequestFullscreen();
}
}

var mar = document.getElementById("marusia").addEventListener("click", marusia, false);

var gol = document.getElementById("gold").addEventListener("click", gold, false);

var RP = document.getElementById("RedPerl").addEventListener("click", RedPerl, false);

var BP = document.getElementById("BluePerl").addEventListener("click", BluePerl, false);

var GP = document.getElementById("GreyPerl").addEventListener("click", GreyPerl, false);

var bai = document.getElementById("Baikal").addEventListener("click", Baikal, false);

var des = document.getElementById("Desert").addEventListener("click", Desert, false);

var jun = document.getElementById("Jungle").addEventListener("click", Jungle, false);

var kok = document.getElementById("Koka").addEventListener("click", Koka, false);

var lem = document.getElementById("Lemon").addEventListener("click", Lemon, false);

var lim = document.getElementById("Lime").addEventListener("click", Lime, false);

var pra = document.getElementById("Praga").addEventListener("click", Praga, false);

var urb = document.getElementById("Urban").addEventListener("click", Urban, false);

var amn = document.getElementById("Amnizia").addEventListener("click", Amnizia, false);

var bar = document.getElementById("Barca").addEventListener("click", Barca, false);

var kat = document.getElementById("Katrin").addEventListener("click", Katrin, false);

var sec = document.getElementById("Secret").addEventListener("click", Secret, false);

var red = document.getElementById("RedFire").addEventListener("click", RedFire, false);

var ora = document.getElementById("OrangeFire").addEventListener("click", OrangeFire, false);

var lil = document.getElementById("Lili").addEventListener("click", Lili, false);

var wht = document.getElementById("White").addEventListener("click", White, false);

var blk = document.getElementById("Black").addEventListener("click", Black, false);

var gry = document.getElementById("Grey").addEventListener("click", Grey, false);


var ButtonMate = document.getElementById("MateMat").addEventListener("click",Mate,false);
var ButtonGloss = document.getElementById("GlossMat").addEventListener("click",Gloss,false);
var ButtonTitan = document.getElementById("TitanMat").addEventListener("click",Titan,false);


 var BuMe = document.getElementById("MateMat").addEventListener("click",Selector,false);
 var BuGs = document.getElementById("GlossMat").addEventListener("click",Selector,false);
 var titan = document.getElementById("TitanMat").addEventListener("click",Selector,false);





 //---------------------------------------------------------------------Click_color------------------------------------------------

function marusia(){
    picColor = "Marusia";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Marusia", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "MARUSYA" на 2 литра - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "MARUSYA" на 2 литра - 1 шт.<br>Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
  Черная матовая база густая резина 1 литр - 4 шт.<br>\
  Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
  Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0.5);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "MARUSYA" на 2 литра - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
    }


function gold(){
    picColor = "Gold";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Gold", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Золотой перламутр колер  - 4 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Золотой перламутр колер  - 4 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Золотой перламутр колер  - 8 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function RedPerl(){
    picColor = "Red Perl";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "RedPerl", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Красный перламутр колер  - 4 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Красный перламутр колер  - 4 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Красный перламутр колер  - 8 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function BluePerl(){
    picColor = "Blue Perl";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "BluePerl", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Сине-фиолетовый перламутр колер  - 4  шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Сине-фиолетовый перламутр колер  - 4 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Сине-фиолетовый перламутр колер  - 8 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function GreyPerl(){
    picColor = "Grey Perl";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "GreyPerl", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Серебряный перламутр колер  - 4 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Серебряный перламутр колер  - 4 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Серебряный перламутр колер  - 8 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Baikal(){
    picColor = "Baikal";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Baikal", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "BAIKAL"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "BAIKAL"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "BAIKAL"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Desert(){
    picColor = "Desert";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Desert", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "DESERT"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "DESERT"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "DESERT"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Jungle(){
    picColor = "Jungle";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Jungle", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "JUNGLE"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "JUNGLE"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "JUNGLE"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Koka(){
    picColor = "Koka";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Koka", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "KOKA"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "KOKA"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "KOKA"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Lemon(){
    picColor = "Lemon";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Lemon", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "LEMON" - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "LEMON"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "LEMON"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Lime(){
    picColor = "Lime";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Lime", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "LIME" - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "LIME"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "LIME"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Praga(){
    picColor = "Praga";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Praga", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "PRAGA"- 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "PRAGA"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "PRAGA"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Urban(){
    picColor = "Urban";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Urban", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "URBAN"- 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "URBAN"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер перламутровый "URBAN" - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Amnizia(){
    picColor = "Amnesia";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Amnizia", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "AMNEZIA"- 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "AMNEZIA"  - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "AMNEZIA" - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Barca(){
    picColor = "Barca";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Barca", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "BARCA"- 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "BARCA" - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "BARCA"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Katrin(){
    picColor = "Katrin";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Katrin", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "KATRIN"- 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "KATRIN" - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "KATRIN"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Secret(){
    picColor = "Secret";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Secret", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "SECRET"- 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "SECRET" - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "SECRET"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function RedFire(){
    picColor = "Red Fire";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "RedFire", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "RED FIRE" - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "RED FIRE" - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "RED FIRE"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function OrangeFire(){
    picColor = "Orange Fire";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "OrangeFire", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "ORANGE FIRE" - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "ORANGE FIRE" - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "ORANGE FIRE"  - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function Lili(){
    picColor = "Lili";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Lili", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "LILI’ - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "LILI"   - 1 шт.<br>\
Прозрачная глянцевая база густая резина 1 литр для колеров - 2 шт.<br>\
Черная матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Колер хамелеон "LILI"    - 2 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 3 шт.<br>\
Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 4 шт.<br>' + buy;
         }
}

function White(){
    picColor = "White";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "White", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Серая матовая база густая резина 1 литр - 3 шт.<br>\
Белая матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Серая матовая база густая резина 1 литр - 3 шт.<br>\
Белая матовая база густая резина 1 литр - 4 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 5 шт.<br>\
Белый колер для покрытия Титан на 1 литр - 5 шт.<br>' + buy;
         }
}

function Black(){
    picColor = "Black";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Black", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Черная матовая база густая резина 1 литр - 6 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Черная матовая база густая резина 1 литр - 6 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Сверхпрочное полиуретановое покрытие ТИТАН (Черный глянец) + 1 отвердитель - 6 шт.<br>' + buy;
         }
}

function Grey(){
    picColor = "Grey";
     var colorId = document.getElementById("ColorID").innerHTML= picColor;
    console.log(picColor);
m_mat.inherit_material(mats, "Grey", Ocar, "Marusia");
if(matType == 1) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Серая матовая база густая резина 1 литр - 6 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Матовый - 3 шт.<br>' + buy;
}
if(matType == 0) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
 calc = document.getElementById("calcPanel").innerHTML = 'Серая матовая база густая резина 1 литр - 6 шт.<br>\
Разбавитель для жидкой резины, лака, ТИТАНа 1 литр - 15 шт.<br>\
Эластичный полиуретановый лак "Goodлак" Глянцевый - 3 шт.<br>' + buy;
}
if(matType == 2) {
 m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0 );
 m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
 calc = document.getElementById("calcPanel").innerHTML = 'Сверхпрочное полиуретановое покрытие ТИТАН (Колеруемая база) + 1 отвердитель - 5 шт.<br>\
Темно-серый колер для покрытия Титан на 1 литр - 5 шт.<br>' + buy;
         }
}

//-----------------------------------------------------------------mat_or_gloss----------------------------------------------------

function Mate(){
matType = 1;
   console.log("matType");
   m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
    m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
if(picColor === "Marusia") marusia();
if(picColor === "Gold") gold();
if(picColor === "Red Perl") RedPerl();
if(picColor === "Blue Perl") BluePerl();
if(picColor === "Grey Perl") GreyPerl();
if(picColor === "Baikal") Baikal();
if(picColor === "Desert") Desert();
if(picColor === "Jungle") Jungle();
if(picColor === "Koka") Koka();
if(picColor === "Lemon") Lemon();
if(picColor === "Lime") Lime();
if(picColor === "Praga") Praga();
if(picColor === "Urban") Urban();
if(picColor === "Amnisia") Amnizia();
if(picColor === "Barca") Barca();
if(picColor === "Katrin") Katrin();
if(picColor === "Secret") Secret();
if(picColor === "Red Fire") RedFire();
if(picColor === "Orange Fire") OrangeFire();
if(picColor === "Lili") Lili();
if(picColor === "Black") Black();
if(picColor === "White") White();
if(picColor === "Grey") Grey();

}

function Gloss(){
matType = 0;
   console.log("matType");
   m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 1);
    m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 0);
   if(picColor === "Marusia") marusia();
if(picColor === "Gold") gold();
if(picColor === "Red Perl") RedPerl();
if(picColor === "Blue Perl") BluePerl();
if(picColor === "Grey Perl") GreyPerl();
if(picColor === "Baikal") Baikal();
if(picColor === "Desert") Desert();
if(picColor === "Jungle") Jungle();
if(picColor === "Koka") Koka();
if(picColor === "Lemon") Lemon();
if(picColor === "Lime") Lime();
if(picColor === "Praga") Praga();
if(picColor === "Urban") Urban();
if(picColor === "Amnisia") Amnizia();
if(picColor === "Barca") Barca();
if(picColor === "Katrin") Katrin();
if(picColor === "Secret") Secret();
if(picColor === "Red Fire") RedFire();
if(picColor === "Orange Fire") OrangeFire();
if(picColor === "Lili") Lili();
if(picColor === "Black") Black();
if(picColor === "White") White();
if(picColor === "Grey") Grey();
}

function Titan(){
matType = 2;
   console.log("matType");
   m_mat.set_nodemat_value(Ocar, ["Marusia", "gloss"], 0);
   m_mat.set_nodemat_value(Ocar, ["Marusia", "NormalM"], 1);
   if(picColor === "Marusia") marusia();
if(picColor === "Gold") gold();
if(picColor === "Red Perl") RedPerl();
if(picColor === "Blue Perl") BluePerl();
if(picColor === "Grey Perl") GreyPerl();
if(picColor === "Baikal") Baikal();
if(picColor === "Desert") Desert();
if(picColor === "Jungle") Jungle();
if(picColor === "Koka") Koka();
if(picColor === "Lemon") Lemon();
if(picColor === "Lime") Lime();
if(picColor === "Praga") Praga();
if(picColor === "Urban") Urban();
if(picColor === "Amnisia") Amnizia();
if(picColor === "Barca") Barca();
if(picColor === "Katrin") Katrin();
if(picColor === "Secret") Secret();
if(picColor === "Red Fire") RedFire();
if(picColor === "Orange Fire") OrangeFire();
if(picColor === "Lili") Lili();
if(picColor === "Black") Black();
if(picColor === "White") White();
if(picColor === "Grey") Grey();
}


//---------------------------------------------------------Selector_Button--------------------------------------------------
function Selector(){
       var BM = document.getElementById("MateMat");
       var BG = document.getElementById("GlossMat");
       var TM = document.getElementById("TitanMat");

       if(matType == 1) {
    BM.style.backgroundColor = "#99CCFF";
    BG.style.backgroundColor = "#69839a";
    TM.style.backgroundColor = "#69839a";

  }
       if(matType == 0){
     BG.style.backgroundColor = "#99CCFF";
    BM.style.backgroundColor = "#69839a";
    TM.style.backgroundColor = "#69839a";
}
       if(matType == 2){
     BG.style.backgroundColor = "#69839a";
    BM.style.backgroundColor = "#69839a";
    TM.style.backgroundColor = "#99CCFF";
}
}

});

// import the app module and start the app by calling the init method
b4w.require("Car_main").init();
