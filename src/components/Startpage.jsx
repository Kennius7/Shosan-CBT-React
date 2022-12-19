import React from 'react'



function Startpage() {
  return (
    <div id="quizBody">
        <div id="warnText2" class="text-center text-light fw-light fst-italic">
            <span style={{fontWeight: "bolder"}}>NOTE OF WARNING!</span> 
            <br />
            <span style={{color: "red", fontWeight: "bolder"}}>
                PLEASE TAKE NOTE THAT CLICKING ON THE NEXT BUTTON 
                AFTER ANSWERING THE LAST <span style={{color: "white"}}>(Number 10)</span> QUESTION WILL SIGNAL THE END OF YOUR EXAM!
            </span> <br /> YOU CAN GO BACK TO PREVIOUS QUESTIONS ONLY IF YOU HAVE NOT DONE THE ABOVE. <br /> <br />
            So think it through thoroughly before clicking the last Next button!
        </div>
        <form action="quizPage.html" id="timerFrame">
            <button id="startTimer">START EXAM</button>
        </form>
        <div id="btmText">
            <h6 id="bottomText">When you're ready to start your exam, click on the <span style={{color: "rgb(82, 196, 231)", fontWeight: "bolder"}}>START EXAM</span> Button above. 
            Your exam questions will load after clicking the button.</h6>
        </div>
    </div>
  )
}

export default Startpage