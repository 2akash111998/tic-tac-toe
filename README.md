# tic-tac-toe
This is simple tic-tac-toe game front end with html and javasript
Simply open ```ttt.html```
![GitHub Logo](/images/img_tic.png)

There's a ```RESTART``` button 
We select these cell using js ```document``` object 
```
var cells = document.getElementsByTagName('td')
```
This outputs ```HTMLCollection``` of ```td```
```
HTMLCollection(9) [td, td, td, td, td, td, td, td, td]
```
On clicking the ```restart``` button, that event triggers  ```clearBoard()``` function
```
function clearBoard(){
	for(var i=0;i<cells.length;i++){
		cells[i].textContent = '';
	}
}

restart.addEventListener('click', clearBoard)
```
At the core of the game, lies the changes in the cells depending on the click of the mouse.
This is the event listener thats responds to the click on the board
```
for(var i =0;i<cells.length;i++){
	cells[i].addEventListener('click', clickBoard)
}
```
And this is the function it calls
```
function clickBoard(){
	if(this.textContent == ''){
		this.textContent = 'X'
	}else if(this.textContent == 'X'){
		this.textContent = 'O'
	}else{
		this.textContent = ''
	}
}
```
So on first click, ``` ``` is converted to ```X```
![GitHub Logo](/images/img_tic_tac.png)
and if you click one more time then ```X``` is converted to ```O```
![GitHub Logo](/images/img_tic1.png)
