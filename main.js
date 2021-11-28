// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement! Be sure to use an absolute path to the image file.

// Image files
/*
1-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg

2-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg

3-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg

4-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg

5-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg

6-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg

7-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg

8-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg

9-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg
*/

// Variables
// 1 - get channel from the remote
// 2 - get the screen and change in the image in there

// Pseudo-code
// Variable1, listen to it for a click
// function() {Listener would update the image in the screen}

// Create JS variables of DOM elements - channel buttons and tv image screen
const button1 = document.querySelector('#one');
const button2 = document.querySelector('#two');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const button5 = document.querySelector('#five');
const button6 = document.querySelector('#six');
const button7 = document.querySelector('#seven');
const button8 = document.querySelector('#eight');
const button9 = document.querySelector('#nine');
const tv = document.querySelector('.tv-show img');

// Create event listeners for all buttons for mouse click and certain keydown events (checked with seaparate function keyboardInteraction below), to call updateChannel function
button1.addEventListener('click', updateChannel);
button1.addEventListener('keydown', function (e) {
  if (keyboardInteraction(e) === true) {
    updateChannel(e);
  }
});
button2.addEventListener('click', updateChannel);
button2.addEventListener('keydown', function (e) {
  if (keyboardInteraction(e) === true) {
    updateChannel(e);
  }
});
button3.addEventListener('click', updateChannel);
button3.addEventListener('keydown', function (e) {
  if (keyboardInteraction(e) === true) {
    updateChannel(e);
  }
});
button4.addEventListener('click', updateChannel);
button4.addEventListener('keydown', function (e) {
  if (keyboardInteraction(e) === true) {
    updateChannel(e);
  }
});
button5.addEventListener('click', updateChannel);
button5.addEventListener('keydown', function (e) {
  if (keyboardInteraction(e) === true) {
    updateChannel(e);
  }
});
button6.addEventListener('click', updateChannel);
button6.addEventListener('keydown', function (e) {
  if (keyboardInteraction(e) === true) {
    updateChannel(e);
  }
});
button7.addEventListener('click', updateChannel);
button7.addEventListener('keydown', function (e) {
  if (keyboardInteraction(e) === true) {
    updateChannel(e);
  }
});
button8.addEventListener('click', updateChannel);
button8.addEventListener('keydown', function (e) {
  if (keyboardInteraction(e) === true) {
    updateChannel(e);
  }
});
button9.addEventListener('click', updateChannel);
button9.addEventListener('keydown', function (e) {
  if (keyboardInteraction(e) === true) {
    updateChannel(e);
  }
});

// Create function to check if keyboard button pressed was enter or space, if so return true so that updateChannel function will run in the above event listeners
function keyboardInteraction(e) {
  if (e.keyCode === 13 || e.keyCode === 32) {
    return true;
  } else {
    return false;
  }
}

// Create function to switch image portrayed on TV, based on the channel button interacted with by the user
function updateChannel(e) {
  switch (e.target.textContent) {
    case "1":
      tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
      break;
    case "2":
      tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
      break;
    case "3":
      tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
      break;
    case "4":
      tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
      break;
    case "5":
      tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
      break;
    case "6":
      tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
      break;
    case "7":
      tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
      break;
    case "8":
      tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
      break;
    case "9":
      tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";
      break;
    default:
      console.log("Channel not selected.");
  }
}

// REMNANTS OF OLD SOLUTION TO EXERCISE. 
// Old solution did not incorporate accessibility (keyboard interactivity), also made code more readable
// let channelSelected;
// document.querySelector('#one').addEventListener('click', function (e) {
//   channelSelected = e.target.textContent;
//   changeChannel(channelSelected);
// });

// document.querySelector('#two').addEventListener('click', function (e) {
//   channelSelected = e.target.textContent;
//   changeChannel(channelSelected);
// });

// document.querySelector('#three').addEventListener('click', function (e) {
//   channelSelected = e.target.textContent;
//   changeChannel(channelSelected);
// });

// document.querySelector('#four').addEventListener('click', function (e) {
//   channelSelected = e.target.textContent;
//   changeChannel(channelSelected);
// });

// document.querySelector('#five').addEventListener('click', function (e) {
//   channelSelected = e.target.textContent;
//   changeChannel(channelSelected);
// });

// document.querySelector('#six').addEventListener('click', function (e) {
//   channelSelected = e.target.textContent;
//   changeChannel(channelSelected);
// });

// document.querySelector('#seven').addEventListener('click', function (e) {
//   channelSelected = e.target.textContent;
//   changeChannel(channelSelected);
// });

// document.querySelector('#eight').addEventListener('click', function (e) {
//   channelSelected = e.target.textContent;
//   changeChannel(channelSelected);
// });

// document.querySelector('#nine').addEventListener('click', function (e) {
//   channelSelected = e.target.textContent;
//   changeChannel(channelSelected);
// });
// function changeChannel(channelNo) {
//   switch (channelNo) {
//     case "1":
//       tv.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
//       break;
    
//     default:
//       console.log("Channel not selected.");
//   }
// }