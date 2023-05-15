
function taoMang(a, b){
    const mang = [];
    for(let i=a; i<=b; i++){
        mang.push(i);
    }
    return mang;
}
// console.log(taoMang(1,10));
 
function timSNT (n){
    if(n<2){
        return false;
    }
    for(let j = 2; j < n; j++){
        if(n%j === 0){
            return false;
        }
        
    }
    return true
}
// // console.log(timSNT(3))
function tinhTong(mang){
    const sum = mang.reduce((result, num)=>{
       if (timSNT(num)){
         result += num;
       }
        return result;
    },0)
    return sum;
}

function laySoA (){
    const getNumberA = document.getElementById('soA');
    return getNumberA.value;
}

function laySoB (){
    const getNumberB = document.getElementById('soB');
    return getNumberB.value;
}

function clickBtn(){
    const numberA = +laySoA();
    const numberB = +laySoB();
    console.log(numberA, numberB);
    const mang = taoMang(numberA, numberB);
    console.log(mang);
    const sum1  = tinhTong(mang);
    console.log(sum1);
    const total = document.getElementById("total_1");
    total.innerHTML = sum1;

}