import $ from 'jquery';
import _ from 'lodash';
import './main.css'; // Import your CSS file

let counter = 0;

$("<div id='logo'></div>").prependTo('body'); // Add a div with id 'logo' at the top of the body
$("#logo").css({
  width: '200px',
  height: '200px',
  backgroundImage: 'url(assets/holberton-logo.jpg)',
  backgroundSize: 'cover', // Set the background image size to cover the div
});


$("<div id='logo'> </div>").appendTo('body');
$("<p>Holberton Dashboard</p>").appendTo('body');
$("<p>Dashboard data for the students</p>").appendTo('body');
$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');
$("<p>Copyright - Holberton School</p>").appendTo('body');

function updateCounter() {
  counter++;
  $('#count').html(`${counter} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));