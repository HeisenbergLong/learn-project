import _ from 'lodash';
import './style.css';
import ico from './ico.png';
import $ from '../bower_components/jquery/dist/jquery.min.js';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = ico;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());