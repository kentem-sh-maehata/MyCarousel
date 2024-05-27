{
  const next = document.getElementById('next')
  const prev = document.getElementById('prev')
  const ul  = document.querySelector('ul')
  const slides = ul?.children
  let currentIdx = 0

  function updateButtons(){
    prev?.classList.remove('hidden')
    next?.classList.remove('hidden')
    if(currentIdx === 0)
      prev?.classList.add('hidden')
    if(slides && currentIdx === slides?.length - 1)
      next?.classList.add('hidden')

  }

  updateButtons()
  next?.addEventListener('click',()=>{
    currentIdx ++
    let slideWidth:number = 0
    if(slides !== undefined){
      slideWidth = slides[0].getBoundingClientRect().width
    }
    if(ul !== null)ul.style.transform = `translateX(${-1 * slideWidth * currentIdx}px)`
    updateButtons()
  })
  prev?.addEventListener('click',()=>{
    let slideWidth:number = 0
    currentIdx --
    if(slides !== undefined){
      slideWidth = slides[0].getBoundingClientRect().width
    }
    if(ul !== null)ul.style.transform = `translateX(${-1 * slideWidth * currentIdx}px)`
    updateButtons()
  })


}