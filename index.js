const Calculate = {
    factorial(number){
      var result = number;
        if(number < 0){
          result =-1;
        }else if(number == 0 || number == 1){
          result=1;
        }else{
          for ( let i = 5; i>1; i--){
        result *=(i-1);
        
          }
        }
        return result;
    }
  } 
  module.exports = Calculate