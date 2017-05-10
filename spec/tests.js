var myApp = require('../app.js');
(function(){
  'use strict';

describe( "prime numbers", function () {
    
    it("it should contain [2,3,5,7]", function () {
    expect(myApp.getPrime(9)).toEqual([2,3,5,7]);


});
     it("it should contain [2,3,5,7]", function () {
    expect(myApp.getPrime(10)).toEqual([2,3,5,7]);

    
});
       it("it should contain [2,3,5,7,11]", function () {
    expect(myApp.getPrime(11)).toEqual([2,3,5,7,11]);

    
});
         it("it should contain [2, 3, 5, 7, 11, 13 ]", function () {
    expect(myApp.getPrime(15)).toEqual([2, 3, 5, 7, 11, 13 ]);

    
});
           it("it should contain [2, 3, 5, 7, 11, 13, 17, 19 ]", function () {
    expect(myApp.getPrime(21)).toEqual([2, 3, 5, 7, 11, 13, 17, 19 ]);

    
});
             it("it should contain [2, 3, 5, 7, 11, 13, 17, 19, 23 ]", function () {
    expect(myApp.getPrime(24)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23 ]);

    
});
               it("it should contain [2, 3, 5, 7, 11, 13, 17, 19, 23 ]", function () {
    expect(myApp.getPrime(25)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23 ]);

    
});
                 it("it should contain [2, 3, 5, 7, 11, 13, 17, 19, 23 ]", function () {
    expect(myApp.getPrime(27)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23 ]);

    
});
                   it("it should contain [2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]", function () {
    expect(myApp.getPrime(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);

    
});
                    it("it should contain [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]", function () {
    expect(myApp.getPrime(35)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]);

    
});
});
  
})();