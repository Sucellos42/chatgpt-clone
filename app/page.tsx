import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className="flex space-x-3 text-center">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8"/>
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              {/*  text p with class infoText*/}
              <p className="infoText">&#34;Do you like Horse Riding ?&#34;</p>
              <p className="infoText">&#34;What&#39;s the color of an orange&#34;</p>
              <p className="infoText">&#34;What&#39;s the thing the most done on Earth ?&#34;</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className="h-8 w-8"/>
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              {/*  text p with class infoText*/}
              <p className="infoText">Change the ChatGPT Model to use</p>
              <p className="infoText">Messages are stored in Firebase&#39;s Firestore</p>
              <p className="infoText">Hot toast notifications when ChatGPT is thinking!</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="h-8 w-8"/>
              <h2>Limitaions</h2>
            </div>
            <div className="space-y-2">
              {/*  text p with class infoText*/}
              <p className="infoText">May occasionally generate incorrect information</p>
              <p className="infoText">May occasionally produce harmful instructions or biased content</p>
              <p className="infoText">Limited knowledge of world and event after 2021</p>
            </div>
          </div>
        </div>

      </div>
  )
}
