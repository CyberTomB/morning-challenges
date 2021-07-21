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