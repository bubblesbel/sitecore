
//function that can be invoked/called from the test stest.js file
let stest_pom = function(){

    //bundle save function
    this.clickBundleSave = function(){
        element(by.id('tab-package-tab-hp')).click();
    };

    //flight hotel function
    this.clickFlightHotel = function(){
        element(by.className('check col gcw-option')).click();
    };

    //origin function
    this.enterOrigin = function(value){
        element(by.id('package-origin-hp-package')).sendKeys(value);
    };
    
    //destination function
    this.enterDestination = function(value){
        element(by.id('package-destination-hp-package')).sendKeys(value);
    };

    //departure function
    this.departureDate = function(value){
        element(by.id('package-departing-hp-package')).sendKeys(value);
    };

    //return function
    this.returnDate = function(value){
        element(by.id('package-returning-hp-package')).sendKeys(value);
    };


    this.clickNumberTravellers = function(){
        element(by.className('trigger-utility menu-trigger btn-utility btn-secondary dropdown-toggle theme-standard pin-left menu-arrow gcw-component gcw-traveler-amount-select gcw-component-initialized')).click();
    };

    //search function
    this.searchAvailabilities = function(){
        element(by.id('search-button-hp-package')).click();
    };
    
};

module.exports = new stest_pom();