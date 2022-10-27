import React, { useState, useEffect } from 'react'
import { QrReader } from 'react-qr-reader'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Keyword from './keyword'
import Image from 'next/image'
import image1 from '../image/1.png'
import image2 from '../image/2.png'
import image3 from '../image/3.png'
import image4 from '../image/4.png'
import image5 from '../image/5.png'

const stampSize = 100

const Home = () => {
  const delay = 500
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const [stamp1, setStamp1] = useState(false)
  const [stamp2, setStamp2] = useState(false)
  const [stamp3, setStamp3] = useState(false)
  const [stamp4, setStamp4] = useState(false)
  const [stamp5, setStamp5] = useState(false)
  const [allStamp, setAllStamp] = useState(true)

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
    if (data === process.env.NEXT_PUBLIC_QR1) {
      setStamp1(true)
      setCookie(null, 'fromClient1', process.env.NEXT_PUBLIC_KEYWORD1, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === process.env.NEXT_PUBLIC_QR2) {
      setStamp2(true)
      setCookie(null, 'fromClient2', process.env.NEXT_PUBLIC_KEYWORD2, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === process.env.NEXT_PUBLIC_QR3) {
      setStamp3(true)
      setCookie(null, 'fromClient3', process.env.NEXT_PUBLIC_KEYWORD3, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === process.env.NEXT_PUBLIC_QR4) {
      setStamp4(true)
      setCookie(null, 'fromClient4', process.env.NEXT_PUBLIC_KEYWORD4, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === process.env.NEXT_PUBLIC_QR5) {
      setStamp5(true)
      setCookie(null, 'fromClient5', process.env.NEXT_PUBLIC_KEYWORD5, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
  }, [data])

  useEffect(() => {
    if (
      stamp1 === true &&
      stamp2 === true &&
      stamp3 === true &&
      stamp4 === true &&
      stamp5 === true
    ) {
      setAllStamp(false)
    }
  }, [stamp1, stamp2, stamp3, stamp4, stamp5])

  return (
    <div className="App">
      <h1>讃工祭スタンプラリー</h1>
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
      </div>
      <div className="horizon">
        {stamp1 && (
          <>
            <Image src={image1} width={stampSize} height={stampSize} />{' '}
            <p>{process.env.NEXT_PUBLIC_KEYWORD1}</p>
          </>
        )}
      </div>
      <div className="horizon">
        {stamp2 && (
          <>
            <Image src={image2} width={stampSize} height={stampSize} />{' '}
            <p>{process.env.NEXT_PUBLIC_KEYWORD2}</p>
          </>
        )}
      </div>
      <div className="image_center horizon">
        {stamp3 && (
          <>
            <Image src={image3} width={stampSize} height={stampSize} />{' '}
            <p>{process.env.NEXT_PUBLIC_KEYWORD3}</p>
          </>
        )}
      </div>
      <br />
      <div className="horizon">
        {stamp4 && (
          <>
            <Image src={image4} width={stampSize} height={stampSize} />{' '}
            <p>{process.env.NEXT_PUBLIC_KEYWORD4}</p>
          </>
        )}
      </div>
      <div className="horizon">
        {stamp5 && (
          <>
            <Image src={image5} width={stampSize} height={stampSize} />{' '}
            <p>{process.env.NEXT_PUBLIC_KEYWORD5}</p>
          </>
        )}
      </div>
      <Keyword allStamp={allStamp} />
      <link
        href="https://fonts.googleapis.com/earlyaccess/nicomoji.css"
        rel="stylesheet"
      />
    </div>
  )
}

/*
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
*/

export default Home
