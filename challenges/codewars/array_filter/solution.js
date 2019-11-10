function songDecoder(song){
  let titleArray = song.split('WUB'); 
  if (titleArray.includes(''))
     titleArray = titleArray.filter(value => value !== '')
     titleArray = titleArray.join(' ');
  return titleArray;
}
