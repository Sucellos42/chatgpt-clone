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
          <div>
          {/*  text p with class infoText*/}
            <p className="infoText">Explain hello</p>
          </div>
        </div>
      </div>
  )
}
