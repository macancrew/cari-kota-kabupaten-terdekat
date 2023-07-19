function getkab(o){

//var o = "-2.39,139.36" //sarmi
//o = "-8.91,109.98" //bantul
//o = "-10.11,119.73" //NTT
//o = "-4.65,135.25" //dogiyai
//o = "-3.24,129.00" //maluku tengah

var sss = SpreadsheetApp.openById('16aa20AkUsbZQxxxxxxxxxxxxxxxx');  //id spreadsheet
var sh4 = sss.getSheetByName('Sheet4');
var o = o.split(",")
let x = o[0];
let z = o[1];
var ala = []
var ala2 = []
var alo = []
var apr = []
var ala3 = []

var yy = sh4.getLastRow()               
  for(var i=35;i<yy;i++){
    var la = sh4.getRange("F"+i).getValue();  
    var lo = sh4.getRange("G"+i).getValue();  
    var kt = sh4.getRange("C"+i).getValue();  
    var par = sh4.getRange("B"+i).getValue();  
  var a = distance7(x,z,la,lo)
  ala.push(a)
  ala2.push(a)
  ala3.push(kt+"#"+par)
  alo.push(kt)
  apr.push(par)
  }

ala.sort(function(a, b){return a-b});
var orx = ala[0]
console.log(orx)
let ix = ala2.indexOf(orx);
var kk = ala3[ix].split("#")
var kx = kk[0]+gv(kk[1])
console.log(kx)
return kx

function gv(iii){
var pr = []
var pr2 = []
  for(var m=2;m<36;m++){
    pr.push(sh4.getRange("A"+m).getValue())
    pr2.push(sh4.getRange("C"+m).getValue())
  }

let iu = pr.indexOf(Number(iii));
return "-"+pr2[iu]
}/////////


}/////////

function distance7(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    dist = dist * 1.609344
    //if (unit=="M") { dist = dist * 0.8684 }
    return dist
}//////
