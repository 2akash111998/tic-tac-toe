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

function clickBoard(){
	if(this.textContent == ''){
		this.textContent = 'X'
	}else if(this.textContent == 'X'){
		this.textContent = 'O'
	}else{
		this.textContent = ''
	}
}

for(var i =0;i<cells.length;i++){
	cells[i].addEventListener('click', clickBoard)
}