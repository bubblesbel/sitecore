var screenShotUtils = require("protractor-screenshot-utils").ProtractorScreenShotUtils;
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub', //local selenium address
  specs: ['stest.js'], //test file name

  capabilities:{
    browserName : 'chrome', //browser to be used 
 },
    framework: 'jasmine2',
      onPrepare: function() {
          global.screenShotUtils = new screenShotUtils({
            browserInstance : browser
          });
      },

      jasmineNodeOpts: {
    defaultTimeoutInterval: 100000000,
    expectationResultHandler: function(passed, assertion) {
    }
  }

 
};