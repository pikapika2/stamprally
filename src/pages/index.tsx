import React, { useState, useEffect } from 'react'
import { QrReader } from 'react-qr-reader'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Head from 'next/head'
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

  const loadCorrect = (id: string) => {
    const blueLeft = document.getElementById(id)!.getBoundingClientRect().left
    const blueTop = document.getElementById(id)!.getBoundingClientRect().top
    window.scrollTo({
      left: blueLeft,
      top: blueTop,
      behavior: 'smooth',
    })

    alert('読み込み成功！！')
  }

  useEffect(() => {
    const postData = async (message: string) => {
      await fetch('/api/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: message }),
      })
    }
    const cookies = parseCookies()
    if (cookies.fromClient1 !== undefined) {
      console.log('aaa')
      postData('test1')
      setStamp1(true)
    }
    if (cookies.fromClient2 !== undefined) {
      console.log('bbb')
      postData('test2')
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
      loadCorrect('firstStamp')
      setStamp1(true)
      setCookie(null, 'fromClient1', process.env.NEXT_PUBLIC_KEYWORD1, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === process.env.NEXT_PUBLIC_QR2) {
      loadCorrect('secondStamp')
      setStamp2(true)
      setCookie(null, 'fromClient2', process.env.NEXT_PUBLIC_KEYWORD2, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === process.env.NEXT_PUBLIC_QR3) {
      loadCorrect('thirdStamp')
      setStamp3(true)
      setCookie(null, 'fromClient3', process.env.NEXT_PUBLIC_KEYWORD3, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === process.env.NEXT_PUBLIC_QR4) {
      loadCorrect('fourthStamp')
      setStamp4(true)
      setCookie(null, 'fromClient4', process.env.NEXT_PUBLIC_KEYWORD4, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    if (data === process.env.NEXT_PUBLIC_QR5) {
      loadCorrect('fifthStamp')
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
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          key="stloader"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
    (function(e,r,n,t,s){var a=[];e[s]=function(){a.push(arguments)};e[s].queue=a;  var o=[];var i=[];var c=true;var p=void 0;if(window.PerformanceObserver&&  window.PerformanceObserver.supportedEntryTypes&&(  PerformanceObserver.supportedEntryTypes.indexOf("longtask")>=0||  PerformanceObserver.supportedEntryTypes.indexOf("element")>=0)){  p=new PerformanceObserver(function(e){e.getEntries().forEach(function(e){  switch(e.entryType){case"element":i.push(e);break;case"longtask":o.push(e);break;  default:break}})});p.observe({entryTypes:["longtask","element"]})}e[s+"lt"]={  longTasks:o,timingElements:i,inPageLoad:c,observer:p};if(t){var u=r.createElement(n);  u.async=1;u.src=t;var f=r.getElementsByTagName(n)[0];f.parentNode.insertBefore(u,f)}})
    (window,document,"script","//cdn.sematext.com/experience.js","strum");
  `,
          }}
        />
        <script
          key="stconfig"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
    strum('config', { token: 'a0d0ad0c-0b51-46e8-a428-0eedf94c6e80', 'receiverUrl': 'https://rum-receiver.sematext.com' });
    var oldPushState = history.pushState;
    history.pushState = function(state, title, url) {
      window['strum']('routeChange', url);
      return oldPushState.apply(history, arguments);
    };
 `,
          }}
        />
      </Head>
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
        <div className="horizon" id="firstStamp">
          {stamp1 && (
            <>
              <Image
                src={image1}
                alt="スタンプ1"
                width={stampSize}
                height={stampSize}
                id="testtest"
              />{' '}
              <p>{process.env.NEXT_PUBLIC_KEYWORD1}</p>
            </>
          )}
        </div>
        <div className="horizon" id="secondStamp">
          {stamp2 && (
            <>
              <Image src={image2} alt="スタンプ2" width={stampSize} height={stampSize} />{' '}
              <p>{process.env.NEXT_PUBLIC_KEYWORD2}</p>
            </>
          )}
        </div>
        <div className="image_center horizon" id="thirdStamp">
          {stamp3 && (
            <>
              <Image src={image3} alt="スタンプ3" width={stampSize} height={stampSize} />{' '}
              <p>{process.env.NEXT_PUBLIC_KEYWORD3}</p>
            </>
          )}
        </div>
        <br />
        <div className="horizon" id="fourthStamp">
          {stamp4 && (
            <>
              <Image src={image4} alt="スタンプ4" width={stampSize} height={stampSize} />{' '}
              <p>{process.env.NEXT_PUBLIC_KEYWORD4}</p>
            </>
          )}
        </div>
        <div className="horizon" id="fifthStamp">
          {stamp5 && (
            <>
              <Image src={image5} alt="スタンプ5" width={stampSize} height={stampSize} />{' '}
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
    </>
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
