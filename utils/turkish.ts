export const capitalizeTurkish:
  (input: string) => string =
  (input) => {
    const words = input.split(" ")
    const capitalizedWords = words.map((word) => {
      const firstLetter = word.charAt(0)
      const restOfWord = word.slice(1).toLocaleLowerCase("tr")
      return firstLetter.toLocaleUpperCase("tr") + restOfWord
    })
    return capitalizedWords.join(" ")
  }

export const decodeTurkishEntities:
  (input: string) => string =
  (input) => {
    const entities: { [key: string]: string } = {
      "&Ccedil;": "Ç",
      "&ccedil;": "ç",
      "&Uuml;": "Ü",
      "&uuml;": "ü",
      "&Ouml;": "Ö",
      "&ouml;": "ö",
      "&Iuml;": "İ",
      "&iuml;": "i",
      "&Gbreve;": "Ğ",
      "&gbreve;": "ğ",
      "&Scedil;": "Ş",
      "&scedil;": "ş",
    }
    return input.replace(/&[A-Za-z]+;/g, (entity) => {
      return entities[entity] || entity
    })
  }

export const decodeTurkishEntitiesInUrl:
  (url: string) => string =
  (url) => {
    const entities: { [key: string]: string } = {
      "%C3%87": "Ç",
      "%C3%A7": "ç",
      "%C3%9C": "Ü",
      "%C3%BC": "ü",
      "%C3%96": "Ö",
      "%C3%B6": "ö",
      "%C4%B0": "İ",
      "%C4%B1": "ı",
      "%C4%9E": "Ğ",
      "%C4%9F": "ğ",
      "%C5%9E": "Ş",
      "%C5%9F": "ş",
    }
    const decodedUrl = decodeURIComponent(url)
    return decodedUrl.replace(/%[A-Fa-f0-9]{2}/g, (entity) => {
      return entities[entity] || entity
    })
  }
