require('should');
const TrafficLight = require('../../lib/trafficLight');

describe('TrafficLight', () => {
  it('should be able to create a Green traffic light', () => {
    TrafficLight.Green().color.should.be.equal('GREEN');
  });

  it('should be able to create a Yellow traffic light', () => {
    TrafficLight.Yellow().color.should.be.equal('YELLOW');
  });

  it('should be able to create a Red traffic light', () => {
    TrafficLight.Red().color.should.be.equal('RED');
  });

  it('should make sure the default traffic light change interval is 300 seconds', () => {
    TrafficLight.Green().changeInterval.should.be.equal(300);
  });

  it('should make sure the default traffic light yellow delay is 30 seconds', () => {
    TrafficLight.Yellow().yellowDelay.should.be.equal(30);
  });

  it('should be able to create a traffic light with customized change inteval and yellow delay', () => {
    TrafficLight.Yellow(400, 40).changeInterval.should.be.equal(400);
    TrafficLight.Yellow(400, 40).yellowDelay.should.be.equal(40);
  });

  it('should be able to return a opposite color traffic light', () => {
    TrafficLight.Green().oppositeLight().color.should.be.equal('RED');
    TrafficLight.Yellow().oppositeLight().color.should.be.equal('RED');
    TrafficLight.Red().oppositeLight().color.should.be.equal('GREEN');
  });

  it('should be able to change light color and return elapsed time', () => {
    const light = TrafficLight.Green(300, 30);
    light.change().should.be.equal(300);
    light.color.should.be.equal('YELLOW');

    light.change().should.be.equal(30);
    light.color.should.be.equal('RED');

    light.change().should.be.equal(270);
    light.color.should.be.equal('GREEN');
  });

  it('should be able to return its color as string', () => {
    TrafficLight.Red().toString().should.be.equal('RED');
  });

  it('should throw an error if yellow delay time is smaller than change interval', () => {
    (() => TrafficLight.Yellow(1, 3)).should.throw('TrafficLight change interval must be greater than yellow light delay');
  });
});
