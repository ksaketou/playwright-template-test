import fs from 'fs'

/**
 * This method reads the json file that matches the name of the test class that is
 * currently being executed and returns the value of the specified property.
 * 
 * @param propertyName the name of the property to be read
 * @id the id of the group from where the property should be retrieved
 * @returns a string with the property value
 */
export function getTestData(propertyName: string, id: number) : string {
    const testDataFile = loadJSONFile("./data/"+ getTestClassName() +".json")
    const testData = testDataFile.find( e => e.ID === id)
   
    return testData[propertyName]
}

/**
 * @returns the name of the currently executed test class
 */
function getTestClassName() {
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
