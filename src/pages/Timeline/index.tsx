import Tweet from '../../components/Tweet'
import Header from '../../components/Header'
import Separator from '../../components/Separator'

import './styles.css'

const tweets = [
  'meu primeiro tweet',
  'Teste',
  'Deu certo tweetar!'
]

function index() {
  return (
    <main className="timeline">
      <Header title='Home' />
      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Guilherme-RNovaes.png" alt="Guilherme Novaes" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>
        <button type='submit'>Tweet</button>
      </form>
      <Separator />
      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}

export default index