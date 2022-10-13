import React, { useState, useEffect } from 'react'
import { QrReader } from 'react-qr-reader'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Image from 'next/image'
import image1 from '../image/1.png'
import image2 from '../image/2.png'
import image3 from '../image/3.png'
import image4 from '../image/4.png'
import image5 from '../image/5.png'

const Home = () => {
  /*const cookies = parseCookies()
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
    console.log('bbb')
    s2 = true
  }
  if (cookies.fromClient3 !== undefined) {
    console.log('ccc')
    s3 = true
  }
  if (cookies.fromClient4 !== undefined) {
    console.log('ddd')
    s4 = true
  }
  if (cookies.fromClient5 !== undefined) {
    console.log('eee')
    s5 = true
  }*/

  const delay = 500
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const [stamp1, setStamp1] = useState(false)
  const [stamp2, setStamp2] = useState(false)
  const [stamp3, setStamp3] = useState(false)
  const [stamp4, setStamp4] = useState(false)
  const [stamp5, setStamp5] = useState(false)

  const handleScan = (result: any, error: Error | undefined | null) => {
    if (!!result) {
      setData(result?.getText())
    } else {
      setData('')
    }
    if (!!error) {
      setError(error?.message)
    } else {
      setError('')
    }
  }

  useEffect(() => {
    const cookies = parseCookies()
    if (cookies.fromClient1 !== undefined) {
      console.log('aaa')
      setStamp1(true)
    }
    if (cookies.fromClient2 !== undefined) {
      console.log('bbb')
      setStamp2(true)
    }
    if (cookies.fromClient3 !== undefined) {
      console.log('ccc')
      setStamp3(true)
    }
    if (cookies.fromClient4 !== undefined) {
      console.log('ddd')
      setStamp4(true)
    }
    if (cookies.fromClient5 !== undefined) {
      console.log('eee')
      setStamp5(true)
    }
    console.log(data)
    if (data === 'No1') {
      setStamp1(true)
      setCookie(null, 'fromClient1', process.env.NEXT_PUBLIC_KEYWORD1, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === 'No2') {
      setStamp2(true)
      setCookie(null, 'fromClient2', process.env.NEXT_PUBLIC_KEYWORD2, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === 'No3') {
      setStamp3(true)
      setCookie(null, 'fromClient3', process.env.NEXT_PUBLIC_KEYWORD3, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === 'No4') {
      setStamp4(true)
      setCookie(null, 'fromClient4', process.env.NEXT_PUBLIC_KEYWORD4, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === 'No5') {
      setStamp5(true)
      setCookie(null, 'fromClient5', process.env.NEXT_PUBLIC_KEYWORD5, {
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
        {stamp1 && (
          <>
            <Image src={image1} width={150} height={150} />{' '}
            <p>{process.env.NEXT_PUBLIC_KEYWORD1}</p>
          </>
        )}
        {stamp2 && (
          <>
            <Image src={image2} width={150} height={150} />{' '}
            <p>{process.env.NEXT_PUBLIC_KEYWORD2}</p>
          </>
        )}
      </div>
      <div>
        {stamp3 && (
          <>
            <Image src={image3} width={150} height={150} />{' '}
            <p>{process.env.NEXT_PUBLIC_KEYWORD3}</p>
          </>
        )}
        {stamp4 && (
          <>
            <Image src={image4} width={150} height={150} />{' '}
            <p>{process.env.NEXT_PUBLIC_KEYWORD4}</p>
          </>
        )}
      </div>
      {stamp5 && (
        <>
          <Image src={image5} width={150} height={150} />{' '}
          <p>{process.env.NEXT_PUBLIC_KEYWORD5}</p>
        </>
      )}
    </div>
  )
}

export default Home
