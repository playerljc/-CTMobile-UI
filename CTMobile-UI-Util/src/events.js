/**
 * Events
 * @class
 * @classdesc
 */
class Events {
  /**
   * @constructor
   */
  constructor() {
    this.events = {};
  }

  /**
   * remove
   * @param {type} type
   * @param {Function} handler
   */
  remove(type, handler) {
    if (this.events[type]) {
      let index = this.events[type].handlers.findIndex((item) => {
        return item === handler;
      });

      if (index !== -1) {
        this.events[type].handlers.splice(index, 1);
      }
    }
  }

  /**
   * on
   * @param {string} type
   * @param {Function} handler
   */
  on(type, handler) {
    if (!this.events[type]) {
      this.events[type] = {
        handlers: []
      };
    }
    this.events[type].handlers.push(handler);
  }

  /**
   * trigger
   * @param {string} type
   * @param {Object} params
   */
  trigger(type, ...params) {
    if (this.events[type]) {
      this.events[type].handlers.forEach((handler) => {
        handler(...params);
      });
    }
  }
}

/**
 * 消息通知
 */
export default Events;