
let getPrime = (n)=> {
  let arrayPrimes = [];
  let primeCounter = 0;
  for(let i=0;i<=n;i++){
    
    
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
  
  return arrayPrimes;
  
  
}

getPrime(56);



exports.getPrime = getPrime;