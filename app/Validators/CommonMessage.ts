export default class CustomMessages {
  public messages = {
    // 'ageRule':() => {
    //   return 'age must be greater than 18!!'
    // },
    'date.format': 'age must be greater than 18!!',
    '*': (field, rule) => {
      return `${field} failed ${rule} validation !!`
    },
  }
}
