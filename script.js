function pocetna(){
	document.getElementById('sekcija-pocetna').style.display = "block";
	document.getElementById('sekcija-o-nama').style.display = "none";
	document.getElementById('sekcija-galerija').style.display = "none";
	document.getElementById('sekcija-auta').style.display = "none";
}
function oNama(){
	document.getElementById('sekcija-pocetna').style.display = "none";
	document.getElementById('sekcija-o-nama').style.display = "block";
	document.getElementById('sekcija-galerija').style.display = "none";
	document.getElementById('sekcija-auta').style.display = "none";
}
function galerija(){
	document.getElementById('sekcija-pocetna').style.display = "none";
	document.getElementById('sekcija-o-nama').style.display = "none";
	document.getElementById('sekcija-galerija').style.display = "block";
	document.getElementById('sekcija-auta').style.display = "none";
}
function auta(){
	document.getElementById('sekcija-pocetna').style.display = "none";
	document.getElementById('sekcija-o-nama').style.display = "none";
	document.getElementById('sekcija-galerija').style.display = "none";
	document.getElementById('sekcija-auta').style.display = "block";
}


function search(){
var pretraga = document.getElementById("search").value;
var auto1 = "bmw";
var auto2 = "vw";
var auto3 = "kia";	
	if(pretraga == auto1)
	{
		var x = document.getElementsByClassName("vw");
		var i;
		for (i = 0; i < x.length; i++) {
		    x[i].style.display = "none";
		}
		var y = document.getElementsByClassName("kia");
		var j;
		for (j = 0; j < y.length; j++) {
		    y[j].style.display = "none";
		}
	}
	else if(pretraga == auto2)
	{
		var x = document.getElementsByClassName("bmw");
		var i;
		for (i = 0; i < x.length; i++) {
		    x[i].style.display = "none";
		}
		var y = document.getElementsByClassName("kia");
		var j;
		for (j = 0; j < y.length; j++) {
		    y[j].style.display = "none";
		}
	}
	else if(pretraga == auto3)
	{
		var x = document.getElementsByClassName("vw");
		var i;
		for (i = 0; i < x.length; i++) {
		    x[i].style.display = "none";
		}
		var y = document.getElementsByClassName("bmw");
		var j;
		for (j = 0; j < y.length; j++) {
		    y[j].style.display = "none";
		}
	}
	else{
		document.getElementById("sekcija-auta").style.display = "block";
	}
}