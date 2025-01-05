interface Logs {
	warn?: (message: string) => void;
	error?: (message: string) => void;
	info?: (message: string) => void;
	debug?: (message: string) => void;
}

class Logger {
	private warn: (message: string) => void;
	private error: (message: string) => void;
	private info: (message: string) => void;
	private debug: (message: string) => void;

	constructor(logs: Logs = {}) {
		this.warn = logs.warn;
		this.error = logs.error;
		this.info = logs.info;
		this.debug = logs.debug;
	}
}
