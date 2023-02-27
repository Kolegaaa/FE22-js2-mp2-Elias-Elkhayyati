export class tamagotchi {
  #name;
  #type;
  #hunger;
  #happiness;
  #alive;
  #div
  #img
  #container
  #paraForTitle
  #paraForHunger
  #paraForHappiness
  #currentStarve
  #currentHappiness
  #buttonForFood
  #buttonForHappiness
  #intervalForHappiness
  #intervalForStarve
  intervalForStarve
  #deadTamaMessage
  #happyDeadMessage
  hp;
  constructor(name, type,div) {
    this.#name = name;
    this.#type = type;
    this.#alive = true;
    this.#div = div;
    this.#hunger = 5;
    this.#happiness = 5;
  }

  getHunger() {
    console.log(this.#hunger);
    return this.#hunger;
  }

  getHappiness() {
    console.log(this.#happiness);
    return this.#happiness;
  }

  setHunger(newHunger) {
    this.#hunger = newHunger;
  }

  setHappiness(newHappiness) {
    this.#happiness = newHappiness;
  }

  starve() {
    this.#hunger--
    this.#container = document.getElementById('container')
    let p = document.createElement('p')
    p.innerText = `${this.#hunger}`
    this.#container.appendChild(p)

    if(this.#hunger < 1 && this.#hunger === 0) {
      alert("han dogde")
      return;
    }



  }
  droppingHappiness() {
    if (this.#happiness < 1) return;

    this.#happiness--;
    console.log(this.#happiness);
    if (this.#happiness < 1) {
      confirm("Happiness reached 0");
    }
  }
  outputToDom(){
    //Alla containers
   this.#name = document.getElementById ('name').value
   this.#type = document.getElementById('select').value
   this.#div = document.createElement('div')
   this.#div.setAttribute("id", "container")
   this.#div.setAttribute('class',this.#type)
   this.#img = document.createElement('img')
   this.#img.setAttribute('id','img')
  //  this.#img.src= '/images/monkey.png'
   this.#div.append(this.#img)
   document.body.append(this.#div)
   console.log(this.#div)
   
   if(this.#type === 'Monkey'){
    this.#img.src= '/FE22-js2-mp2-Elias-Elkhayyati/images/monkey.png'
   }
   if(this.#type === 'Bear'){
    this.#img.src= '/FE22-js2-mp2-Elias-Elkhayyati/images/bear.png'
   }
   if(this.#type === 'Goat'){
    this.#img.src= '/FE22-js2-mp2-Elias-Elkhayyati/images/goat.png'
   }
   
   this.#paraForTitle = `${this.#name} ${this.#type}`
   this.#div.append(this.#paraForTitle)
   
   this.#paraForHunger = document.createElement('p')
   this.#div.append(this.#paraForHunger)
   
   this.#paraForHappiness = document.createElement('p')
   this.#div.append(this.#paraForHappiness)
   
   this.#currentStarve = this.getHunger()
   this.#currentHappiness = this.getHappiness()
 
 
   this.#buttonForFood = document.createElement('button')
   this.#buttonForFood.innerText = 'Feed'
   this.#buttonForFood.setAttribute('id','buttonForFood')
   this.#div.append(this.#buttonForFood)
   console.log(this.#buttonForFood);
 
   this.#buttonForHappiness = document.createElement('button')
   this.#buttonForHappiness.innerText = 'Play'
   this.#buttonForHappiness.setAttribute('id','buttonForHappiness')
   this.#div.append(this.#buttonForHappiness)
   console.log(this.#buttonForHappiness);
   
   this.#paraForHunger.innerHTML = `Hunger: ${this.#currentStarve}`
   this.#paraForHappiness.innerHTML = `Happiness: ${this.#currentHappiness}`
   //intervalfor starve
   this.#intervalForStarve = setInterval( ()=> {
     this.#buttonForFood.addEventListener('click',()=>{
           if(this.#currentStarve >= 11){
 
           }
           else {
             this.#currentStarve++
           }
         
     })
     this.setHunger(this.#currentStarve --)
     this.#paraForHunger.innerHTML = `Hunger: ${this.#currentStarve}`
     
     console.log(this.#currentStarve)
     if(this.#currentStarve <= 0) {
       this.#deadTamaMessage = document.createElement('p')
       this.#deadTamaMessage.innerHTML = `Tama is dead - RIP `
       this.#buttonForFood.disabled = true
       this.#buttonForHappiness.disabled = true
       clearInterval(this.#intervalForStarve)
       this.#div.append(this.#deadTamaMessage)
     }
     },2000)
 
 
   //intervalfor happiness
 
   this.#intervalForHappiness = setInterval( () => {
     this.#buttonForHappiness.addEventListener('click',()=>{
       if(this.#currentHappiness >= 11){
 
       }
       else {
         this.#currentHappiness++
       }
     
 })
       this.setHappiness(this.#currentHappiness --)
       this.#paraForHappiness.innerHTML = `Happiness: ${this.#currentHappiness}`
   
     if(this.#currentHappiness <= 0) {
       this.#happyDeadMessage = document.createElement('p')
       this.#happyDeadMessage.innerHTML = `I Didnt get any attention !!! So I ran away `
       this.#buttonForHappiness.disabled = true
       this.#buttonForFood.disabled = true
       clearInterval(this.#intervalForHappiness)
       this.#div.append(this.#happyDeadMessage)
     }
     },3000) 
  }
}
