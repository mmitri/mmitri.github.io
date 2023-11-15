const row = 9; const col = 9;
let currentPlayer = "X";
let arr = initializeBoard(row,col);
let winArr = [];
var XWin = false; var OWin = false; var largeTie = false; var smallTie = false;

const box = document.getElementsByClassName("box");

for(let i = 0; i < box.length; i++){
    box[i].onclick = function(evt){
        var buttonId = evt.target.id;
        console.log("Button ", buttonId, " Clicked!");
        var button = document.getElementById(buttonId);
        // Create a new text node
        var textNode = document.createTextNode(currentPlayer);
        var charArray = buttonId.split(""); // Convert string to array of characters
        var first = charArray[0]; // Access the first element of the array
        var second = charArray[1]; // Access the second element of the array
        arr[first][second] = currentPlayer;
        printBoard(arr);
        // Replace the button with the text node
        button.parentNode.replaceChild(textNode, button);
        checkSmallWin(arr, buttonId, winArr, smallTie);
        checkLargeWin(winArr, XWin, OWin, largeTie);
        switchPlayers();
        makeClickable(buttonId);
    }
}

function printBoard(arr){
    console.log(arr);
}

function initializeBoard(row,col){
    var arr = Array(row);
    for(var i=0;i<row;i++){
        arr[i]=Array(col).fill(2); // 2 means not clicked
    }
    return arr;
}

function checkSmallWin(arr, buttonId, winArr, smallTie){
    var charArray = buttonId.split(""); // Convert string to array of characters
    var first = charArray[0]; // Access the second element of the array
    if(arr[first][0]=="X" && arr[first][1]=="X" && arr[first][2]=="X" || // first small row
       arr[first][3]=="X" && arr[first][4]=="X" && arr[first][5]=="X" || // second small row
       arr[first][6]=="X" && arr[first][7]=="X" && arr[first][8]=="X" || // third small row
       arr[first][0]=="X" && arr[first][3]=="X" && arr[first][6]=="X" || // first small column
       arr[first][1]=="X" && arr[first][4]=="X" && arr[first][7]=="X" || // second small column
       arr[first][2]=="X" && arr[first][5]=="X" && arr[first][8]=="X" || // third small column
       arr[first][0]=="X" && arr[first][4]=="X" && arr[first][8]=="X" || // small diagonal 1
       arr[first][2]=="X" && arr[first][4]=="X" && arr[first][6]=="X" ){ // small diagonal 2
        winArr[first] = "X";
        const bigBox = document.getElementById("bigBox"+first);
        var text = "X";
        bigBox.innerHTML = text;
    }
    if(arr[first][0]=="O" && arr[first][1]=="O" && arr[first][2]=="O" || // first small row
       arr[first][3]=="O" && arr[first][4]=="O" && arr[first][5]=="O" || // second smallrow
       arr[first][6]=="O" && arr[first][7]=="O" && arr[first][8]=="O" || // third small row
       arr[first][0]=="O" && arr[first][3]=="O" && arr[first][6]=="O" || // first small column
       arr[first][1]=="O" && arr[first][4]=="O" && arr[first][7]=="O" || // second small column
       arr[first][2]=="O" && arr[first][5]=="O" && arr[first][8]=="O" || // third small column
       arr[first][0]=="O" && arr[first][4]=="O" && arr[first][8]=="O" || // small diagonal 1
       arr[first][2]=="O" && arr[first][4]=="O" && arr[first][6]=="O" ){ // small diagonal 2
        winArr[first] = "O";
        const bigBox = document.getElementById("bigBox"+first);
        var text = "O";
        bigBox.innerHTML = text;
    }
    if(/* condition for tie*/){
        smallTie = true;
    }
}

function checkLargeWin(winArr, XWin, OWin, largeTie){
    if(winArr[0]=="X" && winArr[1]=="X" && winArr[2]=="X" || // first large row
       winArr[3]=="X" && winArr[4]=="X" && winArr[5]=="X" || // second large row
       winArr[6]=="X" && winArr[7]=="X" && winArr[8]=="X" || // third large row
       winArr[0]=="X" && winArr[3]=="X" && winArr[6]=="X" || // first large column
       winArr[1]=="X" && winArr[4]=="X" && winArr[7]=="X" || // second large column
       winArr[2]=="X" && winArr[5]=="X" && winArr[8]=="X" || // third large column
       winArr[0]=="X" && winArr[4]=="X" && winArr[8]=="X" || // large diagonal 1
       winArr[2]=="X" && winArr[4]=="X" && winArr[8]=="X" ){ // large diagonal 2
        console.log(winArr);
        XWin = true; OWin = false; largeTie = false;
        console.log("XWin: ", XWin); console.log("OWin: ", OWin); console.log("LargeTie: ", largeTie);
        endGame(XWin, OWin, largeTie);
    }
    if(winArr[0]=="O" && winArr[1]=="O" && winArr[2]=="O" || // first large row
       winArr[3]=="O" && winArr[4]=="O" && winArr[5]=="O" || // second large row
       winArr[6]=="O" && winArr[7]=="O" && winArr[8]=="O" || // third large row
       winArr[0]=="O" && winArr[3]=="O" && winArr[6]=="O" || // first large column
       winArr[1]=="O" && winArr[4]=="O" && winArr[7]=="O" || // second large column
       winArr[2]=="O" && winArr[5]=="O" && winArr[8]=="O" || // third large column
       winArr[0]=="O" && winArr[4]=="O" && winArr[8]=="O" || // large diagonal 1
       winArr[2]=="O" && winArr[4]=="O" && winArr[8]=="O" ){ // large diagonal 2
        console.log(winArr);
        XWin = false; OWin = true; largeTie = false;
        console.log("XWin: ", XWin); console.log("OWin: ", OWin); console.log("LargeTie: ", largeTie);
        endGame(XWin, OWin, largeTie);
    }
    for (var i = 0; i < winArr.length; i++) {
        if (winArr[i] === '') {
            console.log(winArr);
            console.log("winArr length: ", winArr.length);
            XWin = false; OWin = false; largeTie = true;
            console.log("XWin: ", XWin); console.log("OWin: ", OWin); console.log("LargeTie: ", largeTie);
            endGame(XWin, OWin, largeTie);
        }
    }
}

function endGame(XWin, OWin, largeTie){
    // Disable all buttons
    var allButtons = document.getElementById('container').getElementsByTagName('button');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].style.pointerEvents = 'none';
    }
    if(XWin){
        // Display that X Won
        // Create the <div> element
        var div = document.createElement('div');
        // Create the <p> element
        var p = document.createElement('p');
        p.textContent = 'X Won Ultimate TicTacToe!';
        // Append the <p> element to the <div> element
        div.appendChild(p);
        // Add any necessary styling or class to the <div> element
        div.style.fontWeight = 'bold';
        div.style.color = 'blue';
        // Append the <div> element to the document body or any other parent element
        document.body.appendChild(div);
        // Display play again button
        // Create the "Play Again" button
        var button = document.createElement('button');
        button.textContent = 'Play Again?';
        // Add a click event listener to the button
        button.addEventListener('click', function() {
            // Refresh the page
            location.reload();
        });
        return;
    }
    if(OWin){
        // Display that O Won
        // Create the <div> element
        var div = document.createElement('div');
        // Create the <p> element
        var p = document.createElement('p');
        p.textContent = 'O Won Ultimate TicTacToe!';
        // Append the <p> element to the <div> element
        div.appendChild(p);
        // Add any necessary styling or class to the <div> element
        div.style.fontWeight = 'bold';
        div.style.color = 'blue';
        // Append the <div> element to the document body or any other parent element
        document.body.appendChild(div);
        // Display play again button
        // Create the "Play Again" button
        var button = document.createElement('button');
        button.textContent = 'Play Again?';
        // Add a click event listener to the button
        button.addEventListener('click', function() {
            // Refresh the page
            location.reload();
        });
        return;
    }
    if(largeTie){
        // Display that there was a tie
        // Create the <div> element
        var div = document.createElement('div');
        // Create the <p> element
        var p = document.createElement('p');
        p.textContent = 'There was a Tie!';
        // Append the <p> element to the <div> element
        div.appendChild(p);
        // Add any necessary styling or class to the <div> element
        div.style.fontWeight = 'bold';
        div.style.color = 'blue';
        // Append the <div> element to the document body or any other parent element
        document.body.appendChild(div);
        // Display play again button
        // Create the "Play Again" button
        var button = document.createElement('button');
        button.textContent = 'Play Again?';
        // Add a click event listener to the button
        button.addEventListener('click', function() {
            // Refresh the page
            location.reload();
        });
        return;
    }
}

function switchPlayers(){
    if(currentPlayer == "X"){
        currentPlayer = "O";
        return;
    }
    if(currentPlayer == "O"){
        currentPlayer = "X";
        return;
    }
}

function makeClickable(buttonId){
    // Disable the grid from clicking
    var allButtons = document.getElementById('container').getElementsByTagName('button');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].style.pointerEvents = 'none';
    }
    var charArray = buttonId.split(""); // Convert string to array of characters
    var clickableZone = charArray[1]; // Access the second element of the array
    console.log("Second number:", clickableZone);
    // Enable only the clickableZone
    if(winArr[clickableZone] == "X" || winArr[clickableZone] == "O"){
        for(var i=0; i <9;i++){
            var enableButtons = document.getElementById('bigBox'+i).getElementsByTagName('button');
            for (var j = 0; j < enableButtons.length; j++) {
                enableButtons[j].style.pointerEvents = 'auto';
            }
            document.getElementById('bigBox'+i).className = "clickable";
        }
    }
    else{
        var enableButtons = document.getElementById('bigBox'+clickableZone).getElementsByTagName('button');
        for (var i = 0; i < enableButtons.length; i++) {
            enableButtons[i].style.pointerEvents = 'auto';
        }
        for(var i = 0; i <9; i++){
            document.getElementById('bigBox'+i).className = "unclickable";
        }
        document.getElementById('bigBox'+clickableZone).className = "clickable";
    }
}