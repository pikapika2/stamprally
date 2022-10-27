import React, { useState, useEffect } from 'react'

type Props = {
  allStamp: boolean
}

const Keyword: React.FC<Props> = (allStamp, onChange) => {
  const [keyword, setKeyword] = useState('')
  const [correct1, setCorrect1] = useState(false)
  function keywordCheck() {
    if (keyword === 'アイウエオ') {
      setCorrect1(true)
    }
  }

  return (
    <div>
      <p>キーワードを入力！</p>
      <input
        defaultValue=""
        onChange={() => setKeyword(event.target.value)}
        maxLength={20}
      />
      <button
        disabled={allStamp.allStamp}
        className="button_image"
        onClick={() => keywordCheck()}
      >
        キーワード送信
      </button>
      {correct1 && (
        <>
          <p>キーワード1正解!!!</p>
        </>
      )}
    </div>
  )
}

export default Keyword
