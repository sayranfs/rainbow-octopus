import { Octo } from "../index.js";

let octo = new Octo({
	warn: "A WARN BRO!!! 🚨🚨🚨",
	error: "A error bruh >:( -",
	style: {
        info: ["italic", "bold", "magenta"],
		debug: ["dim", "underline", "white", "bgRed"],
	},
});

octo.warn("OMG no way!");
octo.info("@sayranfs on github! ;)");
octo.error("You don't follow me!");
octo.debug(30112024);
