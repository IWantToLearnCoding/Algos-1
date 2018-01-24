// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
	// Register an event handler
	constructor() {
		this.events = [];
	}
	on(eventName, callback) {
		if (!this.events[eventName]) {
			this.events[eventName] = [callback];
		} else {
			this.events[eventName].push(callback);
		}
	}

	// Trigger all callbacks associated
	// with a given eventName
	trigger(eventName) {
		this.events[eventName] && this.events[eventName].forEach(eventCb => eventCb());
	}

	// Remove all event handlers associated
	// with the given eventName
	off(eventName) {
		this.events[eventName] = null;
	}
}

module.exports = Events;
