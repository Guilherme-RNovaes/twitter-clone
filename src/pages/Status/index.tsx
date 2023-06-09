import { FormEvent, KeyboardEvent, useState } from 'react'
import Header from '../../components/Header'
import Separator from '../../components/Separator'
import Tweet from '../../components/Tweet'

import './styles.css'
import { PaperPlaneRight } from 'phosphor-react'

function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers ] = useState([
    'Concordo...',
    'Olha, faz sentido...',
    'Parabéns pelo progresso!'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('') 
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  } 

  return (
    <main className="timeline">
      <Header title='Tweet' />
      <Tweet content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tempora reiciendis iusto provident quam, illum distinctio! Eius iste, quo in, cupiditate temporibus, laboriosam accusantium impedit sequi minus corrupti tenetur alias?'  />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Guilherme-RNovaes.png" alt="Guilherme Novaes" />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }} 
          />
        </label>
        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}

export default Status