function findMissingLetter(array)
{
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (array[0] === array[0].toLowerCase())
    alphabet = alphabet.toLowerCase();
  
  const splitedAlphabet = alphabet.substr(alphabet.indexOf(array[0]), array.length + 1);
  const alphabetArray = splitedAlphabet.split('');
  
  let missingLetter = alphabetArray.filter(value => {
    if (array.includes(value)) {
      return false;
    } else {
      return true;
    }
  });
  
  //for (let i = 0; i <= splitedAlphabet.length; i++)
  //  if (splitedAlphabet[i] !== array[i])
  //    missingLetter = array[i];
  
  return missingLetter[0];
}
