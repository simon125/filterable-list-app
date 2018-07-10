var collLinks = document.links

var arrLinks = Array.prototype.slice.call( coll, 0 );

arr.forEach(element => {
    element.addEventListener('click', (e)=> e.preventDefault())
});
const filterNames = () => {
    let filterValue = document.getElementById('filter-input').value.toUpperCase()

    let ul = document.getElementById('names')

    let li = ul.querySelectorAll('li.collection-item')

    for(let i = 0; i < li.length; i++){
       
        let a = li[i].getElementsByTagName('a')[0]
        
      if(a.innerHTML.toUpperCase().indexOf(filterValue) !== (-1)){
        li[i].style.display=''
      }else {
        li[i].style.display='none'
      }
    }
}

let filterInput = document.getElementById('filter-input')
filterInput.addEventListener('keyup', filterNames)

