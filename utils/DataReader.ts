import fs from 'fs'

/**
 * This method reads the property file that matches the name of the test file that is
 * currently being executed and returns the value of the specified property.
 * 
 * @param propertyName the name of the property to be read
 * @returns a string with the property value
 */
export function getTestData(propertyName: string) : string{
    var PropertiesReader = require('properties-reader');
    var properties = PropertiesReader("./data/"+ getTestSuiteName() +".properties");
   
    return properties.get(propertyName)
}

/**
 * @returns the name of the currently executed test file
 */
function getTestSuiteName() {
    var err = new Error();
    const testSuiteID = err.stack?.substring(err.stack?.lastIndexOf("TS_"),err.stack?.lastIndexOf(".test"))
    return testSuiteID;
}

/**
 * This method parses and returns a given JSON file.
 * 
 * @param filepath the location of the json file to be read 
 */
export function loadJSONFile(filepath: string) {
    var dataArray = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    return dataArray
}
