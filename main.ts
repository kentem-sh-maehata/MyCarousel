
{
  const next = document.getElementById('next')
  const prev = document.getElementById('prev')
  const ul  = document.querySelector('ul')
  const slides = ul?.children
  let currentIdx = 0
  let dots:HTMLButtonElement[] = []

  function updateButtons(){
    prev?.classList.remove('hidden')
    next?.classList.remove('hidden')
    if(currentIdx === 0)
      prev?.classList.add('hidden')
    if(slides && currentIdx === slides?.length - 1)
      next?.classList.add('hidden')

  }

  function moveSlides(){
    let slideWidth:number = 0
    if(slides !== undefined){
      slideWidth = slides[0].getBoundingClientRect().width
    }
    if(ul !== null)ul.style.transform = `translateX(${-1 * slideWidth * currentIdx}px)`
    updateButtons()
    updateDots()
  }

  function setupDots(){
    if(slides){
      
      for(let i=0; i<slides?.length;i++){
        const button = document.createElement('button')
        button.addEventListener('click',()=>{
          currentIdx = i
          updateDots()
          updateButtons()
          moveSlides()
        })
        dots.push(button)
        document.querySelector('nav')?.appendChild(button)
      }
      dots[0].classList.add('current')
    }
  }

  function updateDots(){
    dots.forEach(dot =>{
      dot.classList.remove('current')
    })
    dots[currentIdx].classList.add('current')
  }

  updateButtons()
  setupDots()
  next?.addEventListener('click',()=>{
    currentIdx ++
    moveSlides()
    
  })
  prev?.addEventListener('click',()=>{
    currentIdx --
    moveSlides()
  })


}