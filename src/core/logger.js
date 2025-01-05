import { stylize } from "../utils/stylize.js";
const defaultLogs = {
	warn: "[WARN]",
	error: "[ERROR]",
	info: "[INFO]",
	debug: "[DEBUG]",
	style: {
		warn: "yellow",
		error: "red",
		info: "blue",
		debug: "green",
	},
};

export class Octo {
	/**
	 * Constructs a new Octo logger object.
	 * @param {Object} [logs] - An object containing custom log messages and styles.
	 * @param {string} [logs.warn] - The message to display when calling `warn()`.
	 * @param {string} [logs.error] - The message to display when calling `error()`.
	 * @param {string} [logs.info] - The message to display when calling `info()`.
	 * @param {string} [logs.debug] - The message to display when calling `debug()`.
	 * @param {string|string[]|Object} [logs.style] - The style to apply to the log messages.
	 * If a string, the same style will be applied to all messages.
	 * If an array of strings, the same styles will be applied to all messages.
	 * If an object, the styles can be specified for each type of message individually.
	 * The styles should correspond to keys in the ansiStyles object.
	 */
	constructor(logs = {}) {
		this.logs = { ...defaultLogs, ...logs };

		this.logs.warn = logs.warn || defaultLogs.warn;
		this.logs.error = logs.error || defaultLogs.error;
		this.logs.info = logs.info || defaultLogs.info;
		this.logs.debug = logs.debug || defaultLogs.debug;
		if (typeof logs.style === "string" || Array.isArray(logs.style)) {
			this.logs.style = {
				warn: logs.style,
				error: logs.style,
				info: logs.style,
				debug: logs.style,
			};
		} else {
			this.logs.style = logs.style || {};
			this.logs.style.warn = logs.style?.warn || defaultLogs.style.warn;
			this.logs.style.error =
				logs.style?.error || defaultLogs.style.error;
			this.logs.style.info = logs.style?.info || defaultLogs.style.info;
			this.logs.style.debug =
				logs.style?.debug || defaultLogs.style.debug;
		}
	}

	/**
	 * Writes a warning message to the console.
	 * @param {string} message - The message to be written.
	 */
	warn(message) {
		console.warn(
			`${stylize(this.logs.warn, this.logs.style.warn)} ${message}`
		);
	}

	/**
	 * Writes an error message to the console.
	 * @param {string} message - The message to be written.
	 */
	error(message) {
		console.error(
			`${stylize(this.logs.error, this.logs.style.error)} ${message}`
		);
	}

	/**
	 * Writes an info message to the console.
	 * @param {string} message - The message to be written.
	 */
	info(message) {
		console.info(
			`${stylize(this.logs.info, this.logs.style.info)} ${message}`
		);
	}

	/**
	 * Writes a debug message to the console.
	 * @param {string} message - The message to be written.
	 */
	debug(message) {
		console.debug(
			`${stylize(this.logs.debug, this.logs.style.debug)} ${message}`
		);
	}
}
