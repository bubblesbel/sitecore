
let stest_pom = require('../sitecore1/stest_pom.js');

describe('Traveller search and book flight-hotel', function() {

        beforeEach(function() {
            browser.ignoreSynchronization = true; //mainly for non-angular pages
        });

    //Given I navigate to the expedia website
    it('Enters Expedia URL into the address bar', function() {
        browser.get('https://www.expedia.com/'); //loads Expedia Homepage 
    });

    //When click on Bundle/Save
    it('clicks bundle save', function() {
        stest_pom.clickBundleSave(); 
    });
    
     //And click on Fligth Hotel
    it('clicks Flight Hotel', function() {
         stest_pom.clickFlightHotel(); //clicks on Google search button
    });


    //And inputs origin
    it('enters origin', function() {
        stest_pom.enterOrigin('Brussels, Belgium (BRU-Brussels - National)');    
    });

    //And inputs destination
    it('enters destination', function() {
        stest_pom.enterDestination('New York, New York');    
    });

    //And inputs departure date 
    it('picks departure date', function() {
        stest_pom.departureDate('06/01/2020');  
    });

    //And inputs return date 
    it('it picks return date', function() {
        stest_pom.returnDate('06/04/2020'); 
    });

    //And click Search
    //Then results page displays
    it('clicks search', function() {
        stest_pom.searchAvailabilities(); 
        browser.sleep('10000');
    });
});
