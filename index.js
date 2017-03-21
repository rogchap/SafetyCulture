const TrafficLight = require('./lib/trafficLight');
const time = require('./lib/time');

const start = (endingTime) => {
  let elapsedTime = 0;
  const lightNS = TrafficLight.Green();

  while (elapsedTime <= endingTime) {
    console.log(`Time: ${time(elapsedTime)}`);
    console.log(`N-S Traffic Light: ${lightNS.toString()}`);
    console.log(`E-W Traffic Light: ${lightNS.oppositeLight().toString()}`);

    elapsedTime += lightNS.change();
  }
};

module.exports = start;
