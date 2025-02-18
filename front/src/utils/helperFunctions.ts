export function capitalizeWord(word:string|undefined):string|null{
    
    if(typeof word !== 'string') return null;
    
    const capitalizedWord =
      word.charAt(0).toUpperCase()
      + word.slice(1);
    
      return capitalizedWord;
    }