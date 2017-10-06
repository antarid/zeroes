module.exports = function zeros(expression) {
  function converting(expression){
    var begin = 0;
    var end;
    var multiply;    
    var obj = {}; 
    expression += ' ';
    for(var i = 0; i < expression.length; i++){
        if(expression.charAt(i) == '!'){
            end = i;
            var j;
           for(j = i; j < expression.length; j++){
                if(expression.charAt(j) == '*' || expression.charAt(j) == ' '){
                    multiply = j;
                
                    var number = expression.substring(begin , end);
                    if(!obj[multiply - end])
                        obj[multiply - end] = [];
                    obj[multiply - end].push(number);
  
                    begin = multiply + 1;
                    i = j;
                    break;
                }    
            }
        }
    }
    
    return obj;
  }
  
  
  function howManyTimesCanBeDivided(number , divisor){
    var count = 0;
    while(true){
        number/= divisor;
        if(Number.isInteger(number))
            count++;
        else
          return count;
    }
  }
  
  var numbers = [];
  var factorials = converting(expression);
  for(var i = 0; i < 10; i++){
      if(factorials[i]){
          factorials[i].forEach(function(element) {
              for(var j = Number(element); j >= 1; j-= i){
                  numbers.push(j);
              }
          });
      }
  }
  var numberOfTwo = 0;
  var numberOfFive = 0;

  for(var i = 0; i < numbers.length; i++){
      numberOfTwo += howManyTimesCanBeDivided(numbers[i] , 2);
      numberOfFive += howManyTimesCanBeDivided(numbers[i] , 5);
  }

  return(Math.min(numberOfTwo , numberOfFive));  

}
