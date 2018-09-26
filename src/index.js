module.exports = function getZerosCount(number) {
  // your implementation
  let res = 0,i=1;
  while(Math.trunc(number/Math.pow(5,i))>=1){
    res+=Math.floor(number/Math.pow(5,i));
    i++;
  }
  return res;
}
