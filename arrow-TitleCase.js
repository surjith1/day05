let titlecase=function titleCase(str) {
    return str.toLowerCase().split(' ').map(word => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
    
  }
  console.log(titlecase('Convert all the strings to title caps in a string array'));