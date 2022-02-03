//below is the infinite args sum() using REST OPERATOR can I refactor this?
function sum(...args){
   let total = 0;
   for(let number of args){
      total += number;
   }
   return total;
}