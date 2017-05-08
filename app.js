
let getPrime = (n)=> {
  let arrayPrimes = [];
  let primeCounter = 0;
  for(let i=0;i<=n;i++){
    if (i === 0 || i === 1 || i===2 ){
      arrayPrimes.push(i);
    }
    else{
      for(let innerCounter = 1 ; innerCounter <=i; innerCounter++){
        if(i % innerCounter === 0 )
        {
          primeCounter++;
          
        }
        
      }
      if(primeCounter == 2) 
      {
    
        arrayPrimes.push(i);
        
      }
      
      
      
      
      
      primeCounter =0;
      
    }
    
  }
  
  return arrayPrimes;
  
  
}

getPrime(10);

exports.getPrime =getPrime;