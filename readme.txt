‌1 install Java JDK(Prerequisite to running protractor)
2 install node js
3 install protractor
4 after successfully installing protractor use command: "webdriver-manager update" & "webdriver-manager start" to both update and start selenium server
5 use a different terminal window to run "protractor sconf.js"(make sure you are in the correct folder where you have the files)
Note: There are three files in total
    a. configuration file - this holds most configuration parameters of the test
    b. page objects file(functions) - this serves as a functios file which can be referenced or invoked in the main test file
    c. main test file - this is holds the actual test