const getAudienceAmblem = (audience: number): string => {
  switch (audience) {
    case 1: return "/assets/linuxforsomebody.svg"
    case 2: return "/assets/linuxfornerds.svg"
    default: return "/assets/linuxforeveryone.svg"
  }
}

export default getAudienceAmblem

export const getAudienceText = (audience: number): string => {
  switch (audience) {
    case 1: return "DKK"
    case 2: return "UKK"
    default: return "GKK"
  }
}