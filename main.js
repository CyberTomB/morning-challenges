function isPalindrome(str) {
   let strSpaceless = str.replaceAll(" ", "")
   let strArr = strSpaceless.split('');
   let strRevArr = strArr.reverse()
   let strRev = strRevArr.join('')
   return strSpaceless === strRev
}