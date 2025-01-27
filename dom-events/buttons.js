'use strict';
function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('$clickButton query failed');
$clickButton.addEventListener('click', handleClick);
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event target', event.target);
}
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton query failed');
$hoverButton.addEventListener('mouseover', handleMouseover);
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('$doubleClickButton query failed');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
