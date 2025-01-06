let pass1 = document.getElementById("password1");


function generate(){
    
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    const passwordLength = 15; 
    pass1.textContent = "";
    
    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        pass1.textContent += characters[randomIndex];
         
    }
}


