import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div>
          <div>
          {/*  Sun icon */}
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
          {/*  text p with class infoText*/}
            <p className="infoText">&#34;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&#34;</p>
            <p className="infoText">&#34;Lorem ipsum dolor sit amet.&#34;</p>
            <p className="infoText">&#34;Explain hello, Lorem ipsum dolor sit.&#34;</p>
          </div>
        </div>
      </div>
  )
}
