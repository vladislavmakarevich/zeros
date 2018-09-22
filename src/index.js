module.exports = function getZerosCount(number) {
  // your implementation
  var a= number.toString().length;
  var res=0;
  for(var i =1;i<a+4;i++){
    res+=Math.floor((number/Math.pow(5,i)));
  }
  return (res);
}
