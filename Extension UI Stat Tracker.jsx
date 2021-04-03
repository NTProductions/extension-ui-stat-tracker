var clickTrackerFile = File("~/Desktop/clickTrack.ctf");

// obj coming from JS looks like:
var uiObj = {
 		"previewBox": 0,
 		"menubar": 0,
 		"menubarTwo": 0,
 		"bottomHolder": 0
 	}

createTrackerFile(obj);

function createTrackerFile(elementNamesObj) {
    if(!clickTrackerFile.exists) {
        clickTrackerFile.open("w");
        clickTrackerFile.write(JSON.stringify(elementNamesObj));
        clickTrackerFile.close();
        }
    }

// to make this work, simply link it to an on click of your desired element to track
// for the name, the id usually works best
function addClickToElement(elementName) {
    var readData;
    var thisNum;
    if(clickTrackerFile.exists) {
        clickTrackerFile.open("r");
        readData = JSON.parse(clickTrackerFile.read());
        clickTrackerFile.close();
        
        thisNum = readData[elementName];
        thisNum++;
        
        readData[elementName] = thisNum;
        
        clickTrackerFile.open("w");
        clickTrackerFile.write(JSON.stringify(readData));
        clickTrackerFile.close();
        }
    }