document.querySelector('#ell').addEventListener('click', convert) 

function convert() {
    
    let dolla = document.querySelector('#dolls').value
    
    nairaa = dolla * 800
    
    document.querySelector('#pell').innerText = nairaa
  }


  const hus = document.querySelector('#hus')

  document.querySelector('#nonsNext').addEventListener('click', nonsNext)

  function nonsNext(){
	hus.classList.toggle('hidden')
}