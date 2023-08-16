import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p>Well done, the correct work was <span>{solution}</span></p>
          <p>You found the solution in {turn} guesses 🥳 </p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind!</h1>
          <p>The correct word was <span>{solution}</span> </p>
          <p>Better luck next time 🤞 </p>
        </div>
      )}
    </div>
  )
}
