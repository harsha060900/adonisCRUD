export default class CustomMessages {
  public messages = {
    '*': (field, rule) => {
      return `${field} failed ${rule} validation !!`
    },
  }
}
