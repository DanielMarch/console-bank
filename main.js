var b = 1000;
var response = query();

while(!q()){
  if(response === 'd'){
    var d = deposit();
    d = bonus(d);
    b += d;
    console.log('Balance ' + b);
  }else if(response === 'w'){
    var w = withdrawl();
    w = fee(w);
    b -= w;
    console.log('Balance ' + b);
    if(!overdraft()){
      alert("closed")
      break;
    }
  }else{
    alert("invalid")
  }
  response = query();
}

function query(){
  var response = prompt("(d)eposit, (w)ithdrawl, (q)uit");
  return response;
}

function q(){
  return response === 'q';
}

function deposit(){
  return prompt("How Much?") * 1;
}

function withdrawl(){
  return prompt("How much?") * 1;
}

function bonus(d){
  if(d > 500){
    return d += 25;
  }
  return d;
}

function fee(w){
  if(b - w < 0){
    return w += 50;
  }
  return w;
}

function overdraft(){
  return b >= -750;
}
