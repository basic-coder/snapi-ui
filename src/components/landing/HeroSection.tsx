'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Sparkle } from 'lucide-react'
import BrowserComponentsButton from '../ui/browse-components-button'
import BrowserBlocksButton from '../ui/browse-blocks-button'
import Features from './Features'
import Link from 'next/link'
import Card08 from '../snapiui/cards/card-08'
import Card04 from '../snapiui/cards/card-04'
import AiInput09 from '../snapiui/ai-input/ai-input-09'
import Button03 from '../snapiui/buttons/button-03'
import Button07 from '../snapiui/buttons/button-07'
import Input07 from '../snapiui/inputs/input-07'
import Card10 from '../snapiui/cards/card-10'
import Input03 from '../snapiui/inputs/input-03'
import Tab05 from '../snapiui/tabs/tab-05'
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20'>

      {/* left side */}
      <div className="w-full lg:w-[45%] flex-col items-center text-left space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}  >

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-light leading-[1.1] text-zinc-900 dark:text-zinc-100'>
            Craft with <span className=' bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>
              Precision
            </span>
          </h1>
          <p className='mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg'>
            A curated collection of {" "}
            <span className='font-semibold'>
              100+ premium ui components
            </span> {" "} crafted with
            {" "}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>
              Tailwind Css
            </span> {" "} and {" "}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>
              shadcn ui
            </span> {" "} for modern React and Next.js application
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-col justify-start w-full'>
          <span className='text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2'>
            <span>
              Now updated for TAILWIND CSS 4.0
              <div className="inline-flex items-center justify-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-medium text-purple-700 dark:text-purple-300 ml-2"> {" "}
                <Sparkle className='h-3 w-4 mr-1' /> New
              </div>
            </span>
          </span>
          <div className="flex flex-col sm:flex-row item-start sm:items-center justify-start gap-3">
            <BrowserComponentsButton />
            <BrowserBlocksButton />
          </div>
        </motion.div>

        <Features />
      </div>

      {/* right side */}
       {/* Right side - Components Layout */}
      <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8">
        {/* Top row: Card + Action Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
        >
          {/* Card component */}
          <div className="w-full flex flex-col items-center justify-center ">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              {"Cards"}
            </span>
            <Card08 />
          </div>

          {/* Action Search Bar */}
          <div className="w-full max-w-[600px] bg-transparent">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Components
            </span>
           
            <Card10 />
          </div>
        </motion.div>

        {/* Middle row: AI Chat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
            AI Chat
          </span>
          <div className="w-full h-48 rounded-xlflex items-center justify-center">
            <AiInput09 />
          </div>
        </motion.div>

        {/* Bottom row: Buttons on left, Input on right */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left side - Buttons */}
          <div className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Buttons
            </span>
            <div className="w-full h-48 rounded-xl  border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-3">
              <Link href="/docs/components/button">
                <Button07  />
              </Link>
              <Link href="/docs/components/button">
                <Button03 />
              </Link>
            </div>
          </div>

          {/* Right side - Tabs */}
          <div className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Tabs
            </span>
            {/* <Link href="/docs/components/input"> */}
              <Tab05 />
            {/* </Link> */}
          </div>
        </motion.div>
        </div>
    </div>
  )
}

export default HeroSection