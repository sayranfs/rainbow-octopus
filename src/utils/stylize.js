import ansiStyles from "./styles.js";

/**
 * Applies ANSI styling to a given string.
*
* @param {string} str - The string to be styled.
* @param {string|string[]} style - A single style or an array of styles to apply.
*                                  The styles should correspond to keys in the ansiStyles object.
* @returns {string} - The styled string with ANSI codes applied.
*/

export function stylize(str, style) {
    let stylesCombined = [],
        opens = "",
        closes = "";
	if (Array.isArray(style)) {
		for (let i = 0; i < style.length; i++) {
			stylesCombined[i] = ansiStyles[style[i]];
            if (!stylesCombined[i]) return str;
			opens += stylesCombined[i].open;
			closes += stylesCombined[i].close;
		}
		return opens + str + closes;
	}
	var styleMap = ansiStyles[style];
	if (!styleMap) return str;
	return styleMap.open + str + styleMap.close;
}
