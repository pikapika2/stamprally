import React, { useState, useEffect } from 'react'

type Props = {
  allStamp: boolean
}

const Keyword: React.FC<Props> = (allStamp, onChange) => {
  const [keyword, setKeyword] = useState('')
  const [correct1, setCorrect1] = useState(false)
  const [hint, setHint] = useState(false)
  function keywordCheck() {
    if (keyword === process.env.NEXT_PUBLIC_ANSWER) {
      setCorrect1(true)
    }
  }
  function keywordSetting(event: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value)
  }

  return (
    <div>
      <p>キーワードをにゅうりょく！</p>
      <input
        defaultValue=""
        onChange={(e) => keywordSetting(e)}
        maxLength={10}
      />
      <button
        disabled={allStamp.allStamp}
        className="button_image"
        onClick={() => keywordCheck()}
      >
        こたえる(ひらがなでかいてね)
      </button>
      {correct1 && (
        <>
          <p>せいかい!!!</p>
        </>
      )}
      {!allStamp.allStamp && (
        <>
          <br />
          <button className="button_image" onClick={() => setHint(true)}>
            ヒント
          </button>
        </>
      )}
      {hint && <p>それぞれのキーワードのさいしょのもじをみてみよう</p>}
    </div>
  )
}

export default Keyword
