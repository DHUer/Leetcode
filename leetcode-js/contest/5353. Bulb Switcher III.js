/**
 * @param {number[]} light
 * @return {number}
 */
const numTimesAllBlue = function (light) {
    let moment = 0
    let max = -1
    for (let i = 0; i < light.length; i++) {
      max = Math.max(max, light[i])
      if (i + 1 === max) {
        moment += 1
      }
    }
    return moment
  }