require('should');
const time = require('../../lib/time');

describe('Time', () => {
  it('should convert seconds to HH:MM:SS format', () => {
    time(3600).should.be.equal('01:00:00');
  });

  it('should does time padding correctly', () => {
    time(0).should.be.equal('00:00:00');
  });
});
