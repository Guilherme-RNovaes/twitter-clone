import Header from '../../components/Header'
import Separator from '../../components/Separator'
import Tweet from '../../components/Tweet'

import './styles.css'

const answers = [
  'Concordo...',
  'Olha, faz sentido...',
  'Parabéns pelo progresso!' 
]

function Status() {
  return (
    <main className="timeline">
      <Header title='Tweet' />
      <Tweet content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tempora reiciendis iusto provident quam, illum distinctio! Eius iste, quo in, cupiditate temporibus, laboriosam accusantium impedit sequi minus corrupti tenetur alias?'  />
      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Guilherme-RNovaes.png" alt="Guilherme Novaes" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type='submit'>Answer</button>
      </form>
      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}

export default Status