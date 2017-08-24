
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
     var randNum = Math.floor(Math.random() * word.length);
     var rightWord = [];
     var wrongWord = [];
     var chosenLetter = letter[randNum];
     var underScore = [];
     
     console.log(choosenWord);
  
     var generateUnderscore = () =>{
         for(var i = 0; i < chosenLetter.length; i++) {
             underScore.push('_');
         }
         return underScore;
     }
  
     
     var chosenLetter = letter[randNum];
    
    
      
  document.addEventListener('keypress', (event) => {
      var keycode = event.keyCode;
      var keyword = String.fromCharCode(keycode);
     if(chosenLetter.indexOf(keyword) > -1) {
         rightWord.push(keyword);
         underScore[chosenLetter.indexOf(keyword)] = keyword;
         docUnderScore[0].innerHTML = underScore.join('');
         if(underScore.join("") == chosenLetter ) {
             alert('WINNER');
         }
          