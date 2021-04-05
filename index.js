var staJ1 = 100;
var staJ2 = 100;
const STA_MAX = 100;
const STA_MIN = 0;
var turnoActual = 'J1';
var j1hizoSwap = false;
var j2hizoSwap = false;

function Atacar(){
  if (turnoActual == 'J1'){
    staJ2 -= GetRandomEntre(5, 10);
    CheckStamina();
    document.getElementById("sta-j2").innerHTML = staJ2;
  }else{
    staJ1 -= GetRandomEntre(5, 10);
    CheckStamina();
    document.getElementById("sta-j1").innerHTML = staJ1;
  }
  CambiarTurno();
}
function Curar(){
  if (turnoActual == 'J1'){
    staJ1 += GetRandomEntre(1, 15);
    CheckStamina();
    document.getElementById("sta-j1").innerHTML = staJ1;
  }else{
    staJ2 += GetRandomEntre(1, 15);
    CheckStamina();
    document.getElementById("sta-j2").innerHTML = staJ2;
  }
  CambiarTurno();
}
function Swap(){
  let sta1 = staJ1;
  let sta2 = staJ2;

  staJ1 = sta2;
  staJ2 = sta1;
  document.getElementById("sta-j1").innerHTML = staJ1;
  document.getElementById("sta-j2").innerHTML = staJ2;

  if (turnoActual == 'J1'){
    j1hizoSwap = true;
    document.getElementById("btn-swap-J1").disabled = true;
  }else{
    j2hizoSwap = true;
    document.getElementById("btn-swap-J2").disabled = true;
  }
}
function CambiarTurno(){
  if (turnoActual == 'J1'){
    DesactivarComandos('J1');
    ActivarComandos('J2');
    turnoActual = 'J2';
  }else{
    DesactivarComandos('J2');
    ActivarComandos('J1');
    turnoActual = 'J1';
  }
}
function ActivarComandos(jug){
  if (!hasSwapped(jug)){
    document.getElementById('btn-atacar-'+jug).disabled = false;
    document.getElementById('btn-curar-'+jug).disabled = false;
    document.getElementById('btn-swap-'+jug).disabled = false;
  }else{
    document.getElementById('btn-atacar-'+jug).disabled = false;
    document.getElementById('btn-curar-'+jug).disabled = false;
  }
}
function DesactivarComandos(jug){
  if (!hasSwapped(jug)){
    document.getElementById('btn-atacar-'+jug).disabled = true;
    document.getElementById('btn-curar-'+jug).disabled = true;
    document.getElementById('btn-swap-'+jug).disabled = true;
  }else{
    document.getElementById('btn-atacar-'+jug).disbaled = true;
    document.getElementById('btn-curar-'+jug).disabled = true;
  }
}
function hasSwapped(jug){
  let resul = false;
  if (jug == 'J1' && j1hizoSwap){
    resul = true;
  }
  else if (jug == 'J2' && j2hizoSwap){
    resul = true;
  }
  return resul;
}
function GetRandomEntre(min, max) {
  return Math.random() * (max - min) + min;
}
function CheckStamina(){
  if (turnoActual == 'J1'){
    if (staJ1 > STA_MAX){
      staJ1 = STA_MAX;
    }
    else if (staJ1 < STA_MIN){
      alert("Jugador 2 gana");
      Reiniciar();
    }
  }else{
    if (staJ2 > STA_MAX){
      staJ2 = STA_MAX;
    }
    else if (staJ2 < STA_MIN){
      alert("Jugador 1 gana");
      Reiniciar();
    }
  }
}
function Reiniciar(){
  turnoActual = 'J1';
  staJ1 = 100;
  staJ2 = 100;
  document.getElementById("sta-j1").innerHTML = staJ1;
  document.getElementById("sta-j2").innerHTML = staJ2;

  document.getElementById('btn-atacar-J2').disabled = true;
  document.getElementById('btn-curar-J2').disabled = true;
  document.getElementById('btn-swap-J2').disabled = true;
  document.getElementById('btn-atacar-J1').disabled = false;
  document.getElementById('btn-curar-J1').disabled = false;
  document.getElementById('btn-swap-J1').disabled = false;
}
