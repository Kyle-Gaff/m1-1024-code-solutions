'use strict';
let numberOfClicks = 0;
const $clickCount = document.querySelector('.click-count');
function incClick() {
  numberOfClicks++;
  console.log('Number of clicks:', numberOfClicks);
  if (!$clickCount) throw new Error('$click-count query failed');
  $clickCount.textContent = 'Clicks:' + numberOfClicks;
  if (!$hotButton) throw new Error('.hot-button query failed');
  if (numberOfClicks <= 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberOfClicks <= 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberOfClicks <= 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberOfClicks <= 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberOfClicks <= 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
const $hotButton = document.querySelector('.hot-button');
if (!$hotButton) throw new Error('.hot-button query failed');
$hotButton.addEventListener('click', incClick);
if (!$clickCount) throw new Error('$click-count query failed');
