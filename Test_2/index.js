
function numberOneTriangle(a) {
    let result = "";
    for (let i = 1; i <= a; i++) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += "*";
      }
      result += row + "<br>";
    }
    return result;
  }



function laySoA (){
    const getNumberA = document.getElementById('soA');
    return getNumberA.value;
}


function clickBtn(){

    const numberA = +laySoA();
    console.log(numberA)
    const draw  = numberOneTriangle(numberA);
    console.log(draw)
    const total = document.getElementById("finish");
    total.innerHTML = draw;
    console.log(draw);

}