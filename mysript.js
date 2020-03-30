var restart = document.querySelector('#b')
//<a id="b" class="btn btn-primary btn-lg" href="#" role="button">Restart!</a>

var cells = document.getElementsByTagName('td')
// HTMLCollection(9) [td, td, td, td, td, td, td, td, td]

function clearBoard(){
	for(var i=0;i<cells.length;i++){
		cells[i].textContent = '';
	}
}

restart.addEventListener('click', clearBoard)

// On Click
cells[0].addEventListener("click",function(){
	if (cells[0].textContent == ''){
		cells[0].textContent = 'X'
	}else if(cells[0].textContent == 'X'){
		cells[0].textContent = 'O'
	}else{
		cells[0].textContent = ''
	}
})

cells[1].addEventListener("click",function(){
	if (cells[1].textContent == ''){
		cells[1].textContent = 'X'
	}else if(cells[1].textContent == 'X'){
		cells[1].textContent = 'O'
	}else{
		cells[1].textContent = ''
	}
})

cells[2].addEventListener("click",function(){
	if (cells[2].textContent == ''){
		cells[2].textContent = 'X'
	}else if(cells[2].textContent == 'X'){
		cells[2].textContent = 'O'
	}else{
		cells[2].textContent = ''
	}
})

cells[3].addEventListener("click",function(){
	if (cells[3].textContent == ''){
		cells[3].textContent = 'X'
	}else if(cells[3].textContent == 'X'){
		cells[3].textContent = 'O'
	}else{
		cells[3].textContent = ''
	}
})

cells[4].addEventListener("click",function(){
	if (cells[4].textContent == ''){
		cells[4].textContent = 'X'
	}else if(cells[4].textContent == 'X'){
		cells[4].textContent = 'O'
	}else{
		cells[4].textContent = ''
	}
})

cells[5].addEventListener("click",function(){
	if (cells[5].textContent == ''){
		cells[5].textContent = 'X'
	}else if(cells[5].textContent == 'X'){
		cells[5].textContent = 'O'
	}else{
		cells[5].textContent = ''
	}
})

cells[6].addEventListener("click",function(){
	if (cells[6].textContent == ''){
		cells[6].textContent = 'X'
	}else if(cells[6].textContent == 'X'){
		cells[6].textContent = 'O'
	}else{
		cells[6].textContent = ''
	}
})

cells[7].addEventListener("click",function(){
	if (cells[7].textContent == ''){
		cells[7].textContent = 'X'
	}else if(cells[7].textContent == 'X'){
		cells[7].textContent = 'O'
	}else{
		cells[7].textContent = ''
	}
})

cells[8].addEventListener("click",function(){
	if (cells[8].textContent == ''){
		cells[8].textContent = 'X'
	}else if(cells[8].textContent == 'X'){
		cells[8].textContent = 'O'
	}else{
		cells[8].textContent = ''
	}
})








