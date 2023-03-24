export const makeStars = () => {
    if(typeof window !== "undefined"){
      const count = 200;
      const section = document.querySelector('section')
      let i = 0
  
      while (i < count){
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth)
        const y = Math.floor(Math.random() * window.innerHeight)
        const size = Math.random() * 4;
  
        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = size+'px';
        star.style.height = size+'px';
      
        const duration = Math.random()*50;
        star.style.animationDuration = 2+duration+'s';
        star.style.animationDelay = duration+'s';
        section?.appendChild(star)
  
        i++
      }
    }
  }
export const clearStars = () => {
    const stars = document.querySelectorAll('i')
  
    for (let i = stars.length; i--; ){
      stars[i].remove()
    }
}