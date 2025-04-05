
const ANSI = {
  // Styling
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  blink: '\x1b[5m',
  inverse: '\x1b[7m',
  hidden: '\x1b[8m',
  strikethrough: '\x1b[9m',
  
  // Foreground (text) colors
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  
  // Bright foreground colors
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  brightWhite: '\x1b[97m',
  
  // Background colors
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
  
  // Bright background colors
  bgBrightBlack: '\x1b[100m',
  bgBrightRed: '\x1b[101m',
  bgBrightGreen: '\x1b[102m',
  bgBrightYellow: '\x1b[103m',
  bgBrightBlue: '\x1b[104m',
  bgBrightMagenta: '\x1b[105m',
  bgBrightCyan: '\x1b[106m',
  bgBrightWhite: '\x1b[107m'
};

/**
 * Color utility functions for terminal text
 */
const color = {
  // Basic colors
  red: text => ANSI.red + text + ANSI.reset,
  green: text => ANSI.green + text + ANSI.reset,
  blue: text => ANSI.blue + text + ANSI.reset,
  yellow: text => ANSI.yellow + text + ANSI.reset,
  magenta: text => ANSI.magenta + text + ANSI.reset,
  cyan: text => ANSI.cyan + text + ANSI.reset,
  white: text => ANSI.white + text + ANSI.reset,
  black: text => ANSI.black + text + ANSI.reset,
  gray: text => ANSI.gray + text + ANSI.reset,
  
  // Bright variations
  brightRed: text => ANSI.brightRed + text + ANSI.reset,
  brightGreen: text => ANSI.brightGreen + text + ANSI.reset,
  brightBlue: text => ANSI.brightBlue + text + ANSI.reset,
  brightYellow: text => ANSI.brightYellow + text + ANSI.reset,
  brightMagenta: text => ANSI.brightMagenta + text + ANSI.reset,
  brightCyan: text => ANSI.brightCyan + text + ANSI.reset,
  brightWhite: text => ANSI.brightWhite + text + ANSI.reset,
  
  // Background colors
  bgRed: text => ANSI.bgRed + text + ANSI.reset,
  bgGreen: text => ANSI.bgGreen + text + ANSI.reset,
  bgBlue: text => ANSI.bgBlue + text + ANSI.reset,
  bgYellow: text => ANSI.bgYellow + text + ANSI.reset,
  bgMagenta: text => ANSI.bgMagenta + text + ANSI.reset,
  bgCyan: text => ANSI.bgCyan + text + ANSI.reset,
  bgWhite: text => ANSI.bgWhite + text + ANSI.reset,
  bgBlack: text => ANSI.bgBlack + text + ANSI.reset,
  
  // Text styles
  bold: text => ANSI.bold + text + ANSI.reset,
  italic: text => ANSI.italic + text + ANSI.reset,
  underline: text => ANSI.underline + text + ANSI.reset,
  strikethrough: text => ANSI.strikethrough + text + ANSI.reset,
  dim: text => ANSI.dim + text + ANSI.reset,
  inverse: text => ANSI.inverse + text + ANSI.reset,
  
  // Combined styles
  success: text => ANSI.green + ANSI.bold + text + ANSI.reset,
  warning: text => ANSI.yellow + ANSI.bold + text + ANSI.reset,
  error: text => ANSI.red + ANSI.bold + text + ANSI.reset,
  info: text => ANSI.cyan + ANSI.bold + text + ANSI.reset,
  
  // Rainbow effect (for fun)
  rainbow: (text) => {
    const colors = [ANSI.red, ANSI.yellow, ANSI.green, ANSI.cyan, ANSI.blue, ANSI.magenta];
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
      const colorIndex = i % colors.length;
      result += colors[colorIndex] + text[i];
    }
    
    return result + ANSI.reset;
  },
  
  // Create a line with a specific color
  line: (length = 80, char = '─', colorFunc = color.white) => {
    return colorFunc(char.repeat(length));
  },
  
  // Raw ANSI codes for advanced usage
  ansi: ANSI
};

module.exports = color;