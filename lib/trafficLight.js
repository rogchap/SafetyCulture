
const COLOR = {
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
  RED: 'RED',
};

class TrafficLight {
  /**
   * The TrafficLight constructor
   * @param {COLOR} color
   */
  constructor(color, changeInterval, yellowDelay) {
    this.color = color;
    this.changeInterval = changeInterval;
    this.yellowDelay = yellowDelay;
  }

  /**
   * Return the opposite traffic light
   * @returns {TrafficLight} - The opposite traffic light
   */
  oppositeLight() {
    if (this.color === COLOR.RED) {
      return new TrafficLight(COLOR.GREEN);
    }
    return new TrafficLight(COLOR.RED);
  }

  /**
   * Change light color to next state
   * @returns {number} - Elapsed time
   */
  change() {
    switch (this.color) {
      case COLOR.GREEN:
        this.color = COLOR.YELLOW;
        return this.changeInterval;
      case COLOR.YELLOW:
        this.color = COLOR.RED;
        return this.yellowDelay;
      case COLOR.RED:
        this.color = COLOR.GREEN;
        return this.changeInterval - this.yellowDelay;
      // no default
    }
  }

  /**
   * String representation of this traffic light
   * @returns {string} - The traffic light string representation
   */
  toString() {
    return `${this.color}`;
  }
}

// Default to 300 seconds change interval and 30 seconds yellow light delay
const factory = color =>
  (changeInterval, yellowDelay) => {
    const interval = changeInterval || 300;
    const delay = yellowDelay || 30;
    if (interval < delay) throw new Error('TrafficLight change interval must be greater than yellow light delay');
    return new TrafficLight(color, interval, delay);
  };

module.exports = {
  Green: factory(COLOR.GREEN),
  Yellow: factory(COLOR.YELLOW),
  Red: factory(COLOR.RED),
};
