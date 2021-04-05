var staJ1 = 100;
var staJ2 = 100;
const STA_MAX = 100;
const STA_MIN = 0;
var turnoActual = 'J1';
var j1hizoSwap = false;
var j2hizoSwap = false;
var jugadas = 0;

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
    DesactivarComandos();
    turnoActual = 'J2';
    ActivarComandos();
  }else{
    DesactivarComandos();
    turnoActual = 'J1';
    ActivarComandos();
  }
  jugadas += 1;
}
function ActivarComandos(){
  if (hasSwapped()){
    document.getElementById('btn-atacar-'+turnoActual).disabled = false;
    document.getElementById('btn-curar-'+turnoActual).disabled = false;
  }else{
    document.getElementById('btn-atacar-'+turnoActual).disabled = false;
    document.getElementById('btn-curar-'+turnoActual).disabled = false;
    document.getElementById('btn-swap-'+turnoActual).disabled = false;
  }
}
function DesactivarComandos(){
  if (hasSwapped()){
    document.getElementById('btn-atacar-'+turnoActual).disabled = true;
    document.getElementById('btn-curar-'+turnoActual).disabled = true;
  }else{
    document.getElementById('btn-atacar-'+turnoActual).disabled = true;
    document.getElementById('btn-curar-'+turnoActual).disabled = true;
    document.getElementById('btn-swap-'+turnoActual).disabled = true;
  }
}
function hasSwapped(){
  if (turnoActual == 'J1' && j1hizoSwap){
    return true;
  }
  else if (turnoActual == 'J2' && j2hizoSwap){
    return true;
  }
  else{
    return false;
  }
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
  jugadas = 0;
  document.getElementById("sta-j1").innerHTML = staJ1;
  document.getElementById("sta-j2").innerHTML = staJ2;

  document.getElementById('btn-atacar-J2').disabled = true;
  document.getElementById('btn-curar-J2').disabled = true;
  document.getElementById('btn-swap-J2').disabled = true;
  document.getElementById('btn-atacar-J1').disabled = false;
  document.getElementById('btn-curar-J1').disabled = false;
  document.getElementById('btn-swap-J1').disabled = false;
}
