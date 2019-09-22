let justInput = document.getElementsByTagName("input");
let justTextArea = document.getElementsByTagName("textarea");

let happyCounter = 0;
const justSwap = (text) => {
    console.log('dir', text);

   if(text.indexOf('just')!== -1){
       console.log(text)
       var answer = prompt('would you like to try to rephrase that?')
       console.log(answer)
        if(answer === 'yes'){
            //replacing softened language for empowering language
            return text.replace('just', 'absolutely');

        }else if(answer === 'no') {
            alert('no problem')
            return text;
        }

   }else {

       return text;
   }
  
}

for(i=0; i<justTextArea.length;i++){

    justTextArea[i].addEventListener('input', event => {
        const lowerText = event.target.value.toLowerCase();
        console.log(lowerText)
        event.target.value = justSwap(lowerText);  
        
    })    
}

for(i=0; i<justInput.length;i++){

    justInput[i].addEventListener('input', event => {
        const lowerText = event.target.value.toLowerCase();
        console.log(lowerText)
        event.target.value = justSwap(lowerText);  
        
    })    
}