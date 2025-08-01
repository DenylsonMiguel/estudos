let valor = 0
const asciiMap = {
  0: 'NUL', 1: 'SOH', 2: 'STX', 3: 'ETX', 4: 'EOT', 5: 'ENQ', 6: 'ACK', 7: 'BEL',
  8: 'BS', 9: 'TAB', 10: 'LF', 11: 'VT', 12: 'FF', 13: 'CR', 14: 'SO', 15: 'SI',
  16: 'DLE', 17: 'DC1', 18: 'DC2', 19: 'DC3', 20: 'DC4', 21: 'NAK', 22: 'SYN', 23: 'ETB',
  24: 'CAN', 25: 'EM', 26: 'SUB', 27: 'ESC', 28: 'FS', 29: 'GS', 30: 'RS', 31: 'US',
  32: 'SPACE', 33: '!', 34: '"', 35: '#', 36: '$', 37: '%', 38: '&', 39: "'", 40: '(',
  41: ')', 42: '*', 43: '+', 44: ',', 45: '-', 46: '.', 47: '/', 48: '0', 49: '1',
  50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9', 58: ':',
  59: ';', 60: '<', 61: '=', 62: '>', 63: '?', 64: '@', 65: 'A', 66: 'B', 67: 'C',
  68: 'D', 69: 'E', 70: 'F', 71: 'G', 72: 'H', 73: 'I', 74: 'J', 75: 'K', 76: 'L',
  77: 'M', 78: 'N', 79: 'O', 80: 'P', 81: 'Q', 82: 'R', 83: 'S', 84: 'T', 85: 'U',
  86: 'V', 87: 'W', 88: 'X', 89: 'Y', 90: 'Z', 91: '[', 92: '\\', 93: ']', 94: '^',
  95: '_', 96: '`', 97: 'a', 98: 'b', 99: 'c', 100: 'd', 101: 'e', 102: 'f', 103: 'g',
  104: 'h', 105: 'i', 106: 'j', 107: 'k', 108: 'l', 109: 'm', 110: 'n', 111: 'o',
  112: 'p', 113: 'q', 114: 'r', 115: 's', 116: 't', 117: 'u', 118: 'v', 119: 'w',
  120: 'x', 121: 'y', 122: 'z', 123: '{', 124: '|', 125: '}', 126: '~', 127: 'DEL',
  128: '€', 129: '', 130: '‚', 131: 'ƒ', 132: '„', 133: '…',
  134: '†', 135: '‡', 136: 'ˆ', 137: '‰', 138: 'Š', 139: '‹',
  140: 'Œ', 141: '', 142: 'Ž', 143: '', 144: '', 145: '‘',
  146: '’', 147: '“', 148: '”', 149: '•', 150: '–', 151: '—',
  152: '˜', 153: '™', 154: 'š', 155: '›', 156: 'œ', 157: '',
  158: 'ž', 159: 'Ÿ', 160: ' ', 161: '¡', 162: '¢', 163: '£', 164: '¤',
  165: '¥', 166: '¦', 167: '§', 168: '¨', 169: '©', 170: 'ª', 171: '«', 172: '¬',
  173: '\xad', 174: '®', 175: '¯', 176: '°', 177: '±', 178: '²', 179: '³', 180: '´',
  181: 'µ', 182: '¶', 183: '·', 184: '¸', 185: '¹', 186: 'º', 187: '»', 188: '¼',
  189: '½', 190: '¾', 191: '¿', 192: 'À', 193: 'Á', 194: 'Â', 195: 'Ã', 196: 'Ä',
  197: 'Å', 198: 'Æ', 199: 'Ç', 200: 'È', 201: 'É', 202: 'Ê', 203: 'Ë', 204: 'Ì',
  205: 'Í', 206: 'Î', 207: 'Ï', 208: 'Ð', 209: 'Ñ', 210: 'Ò', 211: 'Ó', 212: 'Ô',
  213: 'Õ', 214: 'Ö', 215: '×', 216: 'Ø', 217: 'Ù', 218: 'Ú', 219: 'Û', 220: 'Ü',
  221: 'Ý', 222: 'Þ', 223: 'ß', 224: 'à', 225: 'á', 226: 'â', 227: 'ã', 228: 'ä',
  229: 'å', 230: 'æ', 231: 'ç', 232: 'è', 233: 'é', 234: 'ê', 235: 'ë', 236: 'ì',
  237: 'í', 238: 'î', 239: 'ï', 240: 'ð', 241: 'ñ', 242: 'ò', 243: 'ó', 244: 'ô',
  245: 'õ', 246: 'ö', 247: '÷', 248: 'ø', 249: 'ù', 250: 'ú', 251: 'û', 252: 'ü',
  253: 'ý', 254: 'þ', 255: 'ÿ'
}

function interruptor(number) {
  let interruptor = document.getElementById(`interruptor-${number}`).checked
  let lampada = document.getElementById(`lampada-${number}`)
  let result
  switch (number) {
    case 1:
      result = 1
      break;

    case 2:
      result = 2
      break;

    case 3:
      result = 4
      break;

    case 4:
      result = 8
      break;

    case 5:
      result = 16
      break;

    case 6:
      result = 32
      break;

    case 7:
      result = 64
      break;

    case 8:
      result = 128
      break;

    default:
      result = null
  }

  if (interruptor === true) {
    lampada.style.backgroundColor = "rgb(223,210,33)"
    valor += result
  } else {
    lampada.style.backgroundColor = "rgb(59,59,59)"
    valor -= result
  }
  document.getElementById("value").textContent = valor.toString()



  let caractere = asciiMap[valor]
  document.getElementById("data").textContent = caractere

}

function adicionarLetra() {
  let valor = 0
  for (let i = 1; i <= 8; i++) {
    let isChecked = document.getElementById(`interruptor-${i}`).checked
    let peso = Math.pow(2, i - 1)
    if (isChecked) {
      valor += peso
    }
  }

  let caractere = asciiMap[valor]
  let mensagem = document.getElementById("texto").textContent || ""

  if (caractere === "DEL" || caractere === "BS") {
    mensagem = mensagem.slice(0, -1)
  } else if (caractere === "TAB") {
    mensagem += "\t"
  } else if (caractere === "LF" || caractere === "CR") {
    mensagem += "\n"
  } else if (caractere === "SPACE") {
    mensagem += " "
  } else if (caractere && caractere.length === 1) {
    mensagem += caractere
  } else if (caractere === "ESC") {
    mensagem = ""
  } else if (caractere === "LF") {
    mensagem += "\n";
  } else {
    console.log(`Comando ${caractere} ignorado`)
  }

  document.getElementById("texto").textContent = mensagem
}