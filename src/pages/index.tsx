import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const Home = () => {
  //const [data, setData] = useState('No result')

  /*return (
    <>
      <QrReader

        onResult={(result, error) => {
          if (!!result) {
            setData(result?.getText())
          }

          if (!!error) {
            console.info(error)
          }
        }}
      />
      <p>{data}</p>
    </>
  )*/

  const delay = 500
  const [data, setData] = useState('')
  const [error, setError] = useState('')
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

      <div>
        <QrReader
          className={'videoStyle'}
          constraints={{
            facingMode: { ideal: 'environment' },
          }}
          scanDelay={delay}
          onResult={handleScan}
        />
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
    </div>
  )
}

export default Home
