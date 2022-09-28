import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import Image from 'next/image'
import sampleImage from '../image/computer_woman.png'

const Home = () => {
  const delay = 500
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const handleScan = (result: any, error: Error | undefined | null) => {
    if (!!result) {
      setData(result?.getText())
      // TODO: We can redirect here to another
      // page since we have the result.
    } else {
      setData('')
    }
    if (!!error) {
      setError(error?.message)
    } else {
      // Reset the error since we don't
      // need it to be displayed as constant
      // error - only while it's occurring.
      setError('')
    }
  }

  return (
    <div className="App">
      <h1>QR Scanner demo</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '画面を閉じる' : 'QRコードを読み込む'}
      </button>
      <div>
        {visible && (
          <QrReader
            className={'videoStyle'}
            constraints={{
              facingMode: { ideal: 'environment' },
            }}
            scanDelay={delay}
            onResult={handleScan}
          />
        )}
        <p>Here are the results</p>
        {data && (
          <p>
            Read: <b>{data}</b>
          </p>
        )}
        {error && (
          <p>
            <b>{error}</b>
          </p>
        )}
      </div>
      <Image src={sampleImage} />
      <Image src={sampleImage} />
      <Image src={sampleImage} />
      <Image src={sampleImage} />
      <Image src={sampleImage} />
    </div>
  )
}

export default Home
