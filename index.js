class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const allowed = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const splitString = string.split(" ")
    let titleArray = []

    for (let i = 0; i < splitString.length; i++) {
      if (i === 0) {
        titleArray.push(this.capitalize(splitString[i]))
      } else {
        if (allowed.includes(splitString[i])) {
          titleArray.push(splitString[i])
        } else {
          titleArray.push(this.capitalize(splitString[i]))
        }
      }
    }
    return titleArray.join(" ")
  }
}