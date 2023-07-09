export const getAuthorPicture = (name: string) => {
  return "/writers/" + name.toLocaleLowerCase("tr").replace(" ", "_") + ".png"
}