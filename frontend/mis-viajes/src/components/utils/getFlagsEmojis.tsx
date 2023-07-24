const flagsEmojis = {
    "Mexico": "🇲🇽",
    "united states": "🇺🇸",
    "canada": "🇨🇦",
    "argentina": "🇦🇷",
    "brazil": "🇧🇷",
    "chile": "🇨🇱",
    "France": "🇫🇷",
    "germany": "🇩🇪",
    "italy": "🇮🇹",
    "spain": "🇪🇸",
    "united kingdom": "🇬🇧",
}

const getFlagsEmojis = (country) => {
  return flagsEmojis[country]
}

export default getFlagsEmojis