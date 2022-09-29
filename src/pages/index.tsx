import React, { useState, useEffect } from 'react'
import { QrReader } from 'react-qr-reader'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Image from 'next/image'
import sampleImage from '../image/computer_woman.png'

const Home = () => {
  const cookies = parseCookies()
  let s1,
    s2,
    s3,
    s4,
    s5: boolean = false
  if (cookies.fromClient1 !== undefined) {
    console.log('aaa')
    s1 = true
  }
  if (cookies.fromClient2 !== undefined) {
    console.log('aaa')
    s2 = true
  }
  if (cookies.fromClient3 !== undefined) {
    console.log('aaa')
    s3 = true
  }
  if (cookies.fromClient4 !== undefined) {
    console.log('aaa')
    s4 = true
  }
  if (cookies.fromClient5 !== undefined) {
    console.log('aaa')
    s5 = true
  }
  const delay = 500
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const [stamp1, setStamp1] = useState(s1)
  const [stamp2, setStamp2] = useState(s2)
  const [stamp3, setStamp3] = useState(s3)
  const [stamp4, setStamp4] = useState(s4)
  const [stamp5, setStamp5] = useState(s5)

  const handleScan = (result: any, error: Error | undefined | null) => {
    if (!!result) {
      setData(result?.getText())
      //stampVisible(result?.getText())
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

  useEffect(() => {
    console.log(data)
    if (data === 'No1') {
      setStamp1(true)
      setCookie(null, 'fromClient1', 'keyword', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === 'No2') {
      setStamp2(true)
      setCookie(null, 'fromClient2', 'keyword', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === 'No3') {
      setStamp3(true)
      setCookie(null, 'fromClient3', 'keyword', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === 'No4') {
      setStamp4(true)
      setCookie(null, 'fromClient4', 'keyword', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === 'No5') {
      setStamp5(true)
      setCookie(null, 'fromClient5', 'keyword', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
  }, [data])

  /*  const stampVisible = (qrData) => {
    console.log(qrData)
    if(qrData === 'No1'){
      setStamp1(true)
      setCookie(null, 'fromClient1', 'keyword', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
  }}*/

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
      <div>
        {stamp1 && <Image src={sampleImage} width={150} height={150} />}
        {stamp2 && <Image src={sampleImage} width={150} height={150} />}
      </div>
      <div>
        {stamp3 && <Image src={sampleImage} width={150} height={150} />}
        {stamp4 && <Image src={sampleImage} width={150} height={150} />}
      </div>
      {stamp5 && <Image src={sampleImage} width={150} height={150} />}
    </div>
  )
}

export default Home
