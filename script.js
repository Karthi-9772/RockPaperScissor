/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
TotalScores={
  yourScore:0,
  CompScore:0
}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const comChoice=['Rock','Paper','Scissors']
  let computerChoice=Math.floor(Math.random()*3)
  // console.log(computerChoice)
  computerChoice=comChoice[computerChoice]
  // console.log({computerChoice})


return(computerChoice)
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  score=0
  
  if(playerChoice == computerChoice){
    // TotalScores['yourScore']+=0

    score=0
    console.log("It's a Tie!...")

  }
   // return the result of score based on if you won, drew, or lost
  else if(playerChoice=='Rock' && computerChoice=='Scissors'){
    score=1
    // TotalScores['yourScore']+=1
  //  let status='won!'
    console.log('you won!')
  } else if(playerChoice=='Paper' && computerChoice=='Rock'){
    score=1
    // TotalScores['yourScore']+=1
   console.log('you won!')
  //  let status='won!'

  } else if(playerChoice=='Scissors' && computerChoice=='Paper'){
    // TotalScores['yourScore']+=1
    score=1
    console.log('you won!')
    // let status='won!'

  }else{
    score=-1
    // TotalScores['yourScore']+=1  
    console.log('Computer Won!!!!')
    // let status='lose!!'

  }

  

  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  
return score
  // return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
//  const playerScore=document.getElementById('player-score')
 const Result=document.getElementById('result')
  // You should do result.innerText = 'You Lose!'
  if(score==-1){
    Result.innerText="You Lose!"
  }
  else if(score==1){
    Result.innerText='You Won!'
  }
  else{
    Result.innerText="Its a Tie!!!"
  }


  // if(status='won!'){
  //   Result.innerText='You Won!'
  // }
  // else if(score==0){
  //   Result.innerText='You Lose!'
  // }
  // else{
  //   Result.innerText="It's a Tie!"
  // }
  

  const hands=document.getElementById('hands')
  hands.innerText=`👨${playerChoice}   (VS)  🤖${computerChoice}`
  
  TotalScores['yourScore']+=Number(score)
  const playerScore=document.getElementById('player-score')
  playerScore.innerText=`YourScore: ${TotalScores['yourScore']}`
  
  // playerScore.innerText=TotalScores['yourScore']
  //hands.innerText=
  // Don't forget to grab the div with the 'result' id!
}
// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  
console.log({playerChoice})
computerChoice=getComputerChoice()
console.log({computerChoice})

getResult(playerChoice,computerChoice)
console.log({score})

showResult(score, playerChoice, computerChoice)


}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const  RPSbuttons=document.querySelectorAll('.rpsButton')
  // console.log(RPSbuttons)
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  //HERE we can set the event listeners to all those  nodes as one by one...but it will take time to dooo...
  //So we will use forEach loop to do the same things with easy...
  // RPSbuttons[0].onclick=()=>onClickRPS(RPSbuttons[0].value)

  RPSbuttons.forEach(buttons=>{
  buttons.onclick=()=>{onClickRPS(buttons.value); }
})

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
const end=document.getElementById('endGameButton')
end.onclick=()=>endGame()
function endGame() {
  const playerScore=document.getElementById('player-score')
  playerScore.innerText='' 
  const hands=document.getElementById('hands')
  hands.innerText=`GAME CLEARED`   
  TotalScores['yourScore']=0
  // TotalScores['yourScore']
  playerScore.innerText=TotalScores['yourScore']

}

playGame()
