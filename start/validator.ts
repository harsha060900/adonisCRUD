/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import { types } from '@ioc:Adonis/Core/Helpers'
import { validator } from '@ioc:Adonis/Core/Validator'

validator.rule('ageRule', (value, _, options) => {
  let age
  const dobDate=value.c
  if (types.isObject(value)) {
    const today = new Date()
  // console.log('value', value.c)
    age = today.getFullYear() - dobDate.year
    var m = today.getMonth() - dobDate.month
    if (m < 0 || (m === 0 && today.getDate() < dobDate.day)) {
      age--
    }
    // return age;
    console.log(age)
  }

  if (age<18) {
  console.log('value',options)

    options.errorReporter.report(
      options.pointer,
      'age',
      'age must be greater than 18!!'
    )
  }
})
