/**
 * Padding num with leading 0
 * @param {number} num
 */
function pad(num) {
  return (`0${num}`).slice(-2);
}

/**
 * Convert seconds to HH:MM:SS
 * @param {number} seconds
 */
function secondToHMS(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
}

module.exports = secondToHMS;
