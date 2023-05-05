import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './styles.css'

interface TweetProps {
  content: string
}

function Tweet(props: TweetProps) {
  return (
    <a href='#' className='tweet'>
      <img src="https://github.com/Guilherme-RNovaes.png" alt="" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Guilherme Novaes</strong>
          <span>
            @Guilherme-RNovaes
          </span>
        </div>
        <p>
          {props.content}
        </p>
        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>
          <button type='button'>
            <ArrowClockwise />
            20
          </button>
          <button type='button'>
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  )
}

export default Tweet