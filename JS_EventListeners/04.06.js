// 04.06 JavasScript code

var earth;

function initialize() {
    var options = {atmosphere: true, center: [0, 0], zoom: 0};
    earth = new WE.map('earth_div', options);
    
    /* old map resource
    WE.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg',{
		  attribution: 'Tiles Courtesy of MapQuest'
    }).addTo(earth);
    */
    
    // new map resource
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);
}

//
// DO NOT MODIFY THE CODE ABOVE!
// - Add your own code to the two functions below
//

function goHome() {
    earth.setView([60.211724, 24.728878]);
    earth.setZoom(13);
    // TODO: Set the map center to the latitude / longitude position of your own home


    // TODO: Zoom the map close enough

}

function showCoords() {
    alert(earth.getCenter());
    // TODO: Show the current coordinates of the map center in an alert dialog box

}

// NB! The web browser executes the code below 
// when the HTML page is loaded/refreshed
initialize();