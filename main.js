function isPalindrome(str) {
   let strSpaceless = str.replaceAll(" ", "")
   let strArr = strSpaceless.split('');
   let strRevArr = strArr.reverse()
   let strRev = strRevArr.join('')
   return strSpaceless === strRev
}

function factorize(event) {
   event.preventDefault()
   let form = event.target
   let num = form.num.value
   let str = `The factors of ${num} are `
   if (num < 1 || num % 1 != 0) {
      str = "Please enter a positive whole number."
   }
   if (num == 1) {
      str = `1 is a factor of itself.`
   } else {
      for (let i = 1; i <= num; i++) {
         if (num % i == 0 && i != num) {
            str += `${i}, `
         }
      }
      str += `and ${num}`
   }
   console.log(str)
   document.getElementById('factorize-output').innerText = str
   form.reset()
}

function timeMeasure(event) {
   event.preventDefault()
   let form = event.target
   let num = form.num.value
   let str = ''
   let hr = Math.floor(num / 60)
   let min = num % 60
   str = `${hr}:${min < 10 ? '0' + min : min}`
   console.log(str)
   document.getElementById('time-measure-output').innerText = str
   form.reset()
}

function battle(goodTeam, badTeam){
   let goodArmy = [1, 2, 3, 3, 4, 10]
   let badArmy = [1, 2, 2, 2, 3, 5, 10]
   let goodPower = goodTeam.split(" ")
   let badPower = badTeam.split(" ")
   let goodSum = 0
   let badSum = 0
   for(let i = 0; i < goodPower.length; i++){
      goodSum += parseFloat(goodPower[i]) * goodArmy[i]
   }
   for(let i = 0; i < badPower.length; i++){
      badSum += parseFloat(badPower[i]) * badArmy[i]
   }
   console.log(goodPower, goodSum, badPower, badSum)
   if (goodSum > badSum){
      return "Battle Result: Good triumphs over Evil"
   } else if (goodSum == badSum){
      return "Battle Result: No victor on this battle field"
   } else {
      return "Battle Result: Evil eradicates all trace of Good"
   }
}