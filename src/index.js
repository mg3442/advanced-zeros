module.exports = function getZerosCount(number, base) {
  let firstArr = [], secondArr = [], thirdArr = [];
  let count = 0, result = 0;
 
     for (let i = 2; i <= base; i++){
        if (base%i === 0) {
         firstArr.push(i);
       }
         while (base%i === 0){
             base = base/i;
             count++;
         }
         if (count > 0) {
             secondArr.push(count);
         }
         count = 0;
     }
     let y = 2;
     for (let i = 0; i < firstArr.length; i++){
             let x = firstArr[i];
         while (number/x > 1){
             result += Math.floor(number/x);
             x = Math.pow(firstArr[i], y);
             y++;
         }
         thirdArr.push(result);
         result = 0;
         y = 2;
     }
     for (let i = 0; i < thirdArr.length; i++){
         thirdArr[i] = Math.floor(thirdArr[i]/secondArr[i]);
     }
     thirdArr.sort(function(a, b){return a-b;});
     return thirdArr[0]

}