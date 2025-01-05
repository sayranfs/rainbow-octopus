# 🌈🐙 Rainbow Octopus

<div align="center"><img src="https://raw.githubusercontent.com/sayranfs/rainbow-octopus/refs/heads/main/src/assets/rainbow_octopus.png" alt="Rainbow Octopus Logo PNG" width="250" /></div>

**Rainbow Octopus** is a Node.js package inspired by [chalk](https://www.npmjs.com/package/chalk) and [colors](https://www.npmjs.com/package/colors). It is designed to make terminal message formatting easier, focusing on **quick and straightforward debugging**.

This package provides a simple and powerful API for styling and categorizing logs in the terminal, allowing you to customize colors, styles, and default messages for different log types.

---

## 📦 Installation

To install Rainbow Octopus, use the npm package manager:

```bash
npm install rbocto
```

## 🚀 Usage
**Basic configuration**
```js
import { Octo } from "rbocto";

const octo = new Octo();

// Using the default methods
octo.warn("This is a warning!");
octo.error("Something went wrong!");
octo.info("Here's some information.");
octo.debug("Debugging the code.");
```

**Custom configuration** - You can customize the default messages and styles for each log type:
```js
const octo = new Octo({
  warn: "[WARNING]",
  error: "[FAILURE]",
  style: {
    warn: ["bold", "yellow"],
    error: ["red", "underline"],
    info: ["blue"],
    debug: ["dim", "cyan"],
  },
});

octo.warn("This is a custom message.");
octo.error("Something really bad happened!");
octo.info("Styled information.");
octo.debug("Detailed debugging.");
```

## 🎨 Available styles
You can apply multiple styles simultaneously, such as bold, underline, and colors. Here's the list of available options:

## Text colors:
- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`
- `grey`
- `brightRed`
- `brightGreen`
- `brightYellow`
- `brightBlue`
- `brightMagenta`
- `brightCyan`
- `brightWhite`
## Background colors:
- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgGray`
- `bgGrey`
- `bgBrightRed`
- `bgBrightGreen`
- `bgBrightYellow`
- `bgBrightBlue`
- `bgBrightMagenta`
- `bgBrightCyan`
- `bgBrightWhite`
## Text styles:
- `bold`
- `dim`
- `underline`
- `inverse`
- `hidden`
- `strikethrough`

## 🛠️ API
`new Octo(options)`
Creates a new logger instance.

**Parâmetros**
- `options` *(optional)*: An object containing custom configurations.
  - `warn`: Default message for warning logs (e.g., `"[WARN]"`).
  - `error`: Default message for error logs (e.g., `"[ERROR]"`).
  - `info`: Default message for information logs (e.g., `"[INFO]"`).
  - `debug`: Default message for debug logs (e.g., `"[DEBUG]"`).
  - `style`: Custom styles for each log type.
**Example**
```js
const octo = new Octo({
  warn: "[ALERT]",
  style: { warn: "yellow", error: ["red", "bold"] },
});
```

## Métodos de Log
- `octo.warn(message)`: Displays a warning message.
- `octo.error(message)`: Displays a error message.
- `octo.info(message)`: Displays a informational message.
- `octo.debug(message)`: Displays a debug message.

**Example**
```js
octo.warn("This is a warning!");
octo.error("Critical error detected.");
octo.info("Connection established.");
octo.debug("Variable x has value 42.");
```

**🖥️ Advanced example**
```js
const octo = new Octo({
  warn: "[ALERT]",
  error: "[CRITICAL FAILURE]",
  info: "[INFO]",
  debug: "[DEBUG]",
  style: {
    warn: ["bold", "yellow"],
    error: ["red", "underline", "bold"],
    info: ["cyan"],
    debug: ["dim", "blue"],
  },
});

octo.warn("Warning! Something is wrong.");
octo.error("Fatal system error.");
octo.info("Process completed successfully.");
octo.debug("Debugging variable x.");
```

## 🤝 Contributions
Contributions are welcome! Follow the steps below to contribute:

1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## ✨ Acknowledgments
Inspired by packages like chalk and colors, but focused on quick debugging and simple styling.

**Have fun styling your logs with Rainbow Octopus! 🌈🐙**
