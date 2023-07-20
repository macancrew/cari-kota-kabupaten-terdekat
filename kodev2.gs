//hanya dicari dari 3 prov terdekat
//artinya proses distance7 akan bekurang dibanding jika proses semua kab/kota
///////////////////////////////////////////
function getp1(o){
  var sss = SpreadsheetApp.openById('16aa20AkUsbZQadOPVxxxxxxxxxxxxxxxxxxxxx');  //id spreadsheet
  var sh4 = sss.getSheetByName('Sheet4');

o = o.split(",")
let x = o[0];
let z = o[1];
var pr1 = []
var pr2 = []
var pidd = []
var ppna = []

  for(var i=1;i<35;i++){
    var pid = sh4.getRange("A"+i).getValue();  
    var pna = sh4.getRange("C"+i).getValue();  
    var la = sh4.getRange("F"+i).getValue();  
    var lo = sh4.getRange("G"+i).getValue();  
  var a = distance7(x,z,la,lo)
  pr1.push(a)
  pr2.push(a)
  pidd.push(pid)
  ppna.push(pna)

  }

pr1.sort(function(a, b){return a-b});
//3 prov terdekat
var p1 = pr2.indexOf(pr1[0])
var p2 = pr2.indexOf(pr1[1])
var p3 = pr2.indexOf(pr1[2])

var kb1 = []
var kb2 = []
var ktn = []
var kpr = []

var yy = sh4.getLastRow()    //cari baris paling bawah
  for(var i=36;i<yy;i++){
    var la = sh4.getRange("F"+i).getValue();  
    var lo = sh4.getRange("G"+i).getValue();  
    var kt = sh4.getRange("C"+i).getValue();  
    var par = sh4.getRange("B"+i).getValue();  
  if(par==pidd[p1] || par==pidd[p2] || par==pidd[p3] ){
    var a = distance7(x,z,la,lo)
    kb1.push(a)
    kb2.push(a)
    ktn.push(kt)
    kpr.push(par)
  }
  }
  kb1.sort(function(a, b){return a-b});
  var k1 = kb2.indexOf(kb1[0])
  k1 = ktn[k1]+gv(kpr[k1])
  console.log(k1)
  return k1

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
}//end-function
