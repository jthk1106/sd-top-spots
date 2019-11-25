$(document).ready(function() {
  // write your code here
  $.getJSON("data.json", (data) => {
    console.log('hi')
    console.log(data)
    data.forEach((entry, i) => {
      console.log('entry.name: ', entry.name, ' i: ', i);
      var theTable = document.getElementById('theTable');
      var theRow = theTable.insertRow(i + 1);
      var name = theRow.insertCell(0);
      var description = theRow.insertCell(1);
      var link = theRow.insertCell(2);
      var latitude;
      var longitude;
      var googleMapsString = `https://www.google.com/maps?q=${latitude},${longitude}`

      name.innerHTML = entry.name;
      description.innerHTML = entry.description;
      link.innerHTML = entry.location;
    });
  });
});

console.log(data)

/*
🤷‍♂️🤷‍♂️
  Use the $.getJSON method to download the contents of the data.json file.


🤷‍♂️🤷‍♂️
  Iterate through the top spots and create a table row for each spot.


🤷‍♂️🤷‍♂️
  Create a link to the location using the longitude and latitude provided. (Example https://www.google.com/maps?q=33.09745,-116.99572)

*/
