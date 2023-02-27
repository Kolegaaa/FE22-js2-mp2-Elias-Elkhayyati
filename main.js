import { tamagotchi } from "./modules/tamagotchi.js";

const AddTamagotchi = document.getElementById('submitButton')
AddTamagotchi.addEventListener('click',(event)=>{
    event.preventDefault()
    const tamaGotchi = new tamagotchi()
    tamaGotchi.setHappiness(10)
    tamaGotchi.setHunger(10)
    tamaGotchi.getHappiness()
    tamaGotchi.getHunger()
    tamaGotchi.outputToDom()
    
    
  
  })
