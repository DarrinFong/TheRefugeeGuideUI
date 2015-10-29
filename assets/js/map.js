// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 34.972232, lng: 38.504639}
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var redcross = [
  ['redcross1', 34.112544, 40.141602, 1],
  ['redcross2', 33.592487, 38.076172, 4],
  ['redcross3', 34.264765, 37.243958, 4],
  ['redcross4', 34.518609, 38.216248, 5],
  ['redcross5', 35.948718, 39.036102, 2]
];

var police = [
  ['police1', 35.630122, 40.141602, 1],
  ['police2', 35.334902, 40.131989, 4],
  ['police3', 35.106035, 39.681549, 4],
  ['police4', 34.903559, 38.885040, 5],
  ['police5', 36.235025, 37.160187, 2]
];

var criminal = [
  ['criminal1', 35.982063, 38.994904, 1],
  ['criminal2', 34.592487, 37.076172, 4],
];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'images/icons/redcrossicon.png',
    // This marker is 32 pixels wide by 32 pixels high.
    size: new google.maps.Size(32, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (70, 0).
    anchor: new google.maps.Point(16, 32)
  };
  var image1 = {
    url: 'images/icons/policeicon.png',
    // This marker is 32 pixels wide by 32 pixels high.
    size: new google.maps.Size(32, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (70, 0).
    anchor: new google.maps.Point(16, 32)
  };
  var image2 = {
    url: 'images/icons/criminalicon.png',
    // This marker is 32 pixels wide by 32 pixels high.
    size: new google.maps.Size(32, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (70, 0).
    anchor: new google.maps.Point(16, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < redcross.length; i++) {
    var point = redcross[i];
    var marker = new google.maps.Marker({
      position: {lat: point[1], lng: point[2]},
      map: map,
      icon: image,
      shape: shape,
      title: point[0],
      zIndex: point[3]
    });
  }
  for (var i = 0; i < police.length; i++) {
    var point = police[i];
    var marker = new google.maps.Marker({
      position: {lat: point[1], lng: point[2]},
      map: map,
      icon: image1,
      shape: shape,
      title: point[0],
      zIndex: point[3]
    });
  }
  for (var i = 0; i < criminal.length; i++) {
    var point = criminal[i];
    var marker = new google.maps.Marker({
      position: {lat: point[1], lng: point[2]},
      map: map,
      icon: image2,
      shape: shape,
      title: point[0],
      zIndex: point[3]
    });
  }
}