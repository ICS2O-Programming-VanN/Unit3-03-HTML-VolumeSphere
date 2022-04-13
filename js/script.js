// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the volume of a sphere.
 */
function calculate () {
  // Variables
  // Value is made into Float
  let radius = parseFloat(document.getElementById('radius').value) // Stores value from user

  // Process (calculates volume)
  let volume = (4 / 3) * (radius ** 3) * Math.PI

  // Outputs Volume
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}