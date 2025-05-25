'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from 'motion/react'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { ArrowDownRight } from 'lucide-react'

type Props = {}

const
    BrowserComponentsButton = (props: Props) => {
        return (
            <Link href={"/docs/components/action-search-bar"}>
                <motion.div initial={{x:200, opacity:0}}
                    animate={{x:0 ,opacity:1,transition:{duration:0.2}}}
                    whileHover={{x:5,transition:{duration:0.2}}}
                >
                    <Button className={cn("relative inline-flex items-center justify-center gap-4 rounded-xl font-medium",
                        "relative h-12 px-6 min-w-56", "bg-black dark:bg-white", "text-white dark:text-black", "border-2 border-orange-500/20 dark:border-orange-400/20 ",
                        "shadow-[0_8px_16px_-6px_rgba(251,113,133,0.3)]" ,
                        "dark:shadow-[0_8px_16px_-6px_rgba(251,113,133,0.2)]", 
                        "shadow-[0_15px_30px_-6px_rgba(251,113,133,0.4),0_0px_30px_-6px_rgba(168,85,247,0.4)]" ,
                        "dark:shadow-[0_15px_30px_-6px_rgba(251,113,133,0.3),0_0px_30px_-6px_rgba(168,85,247,0.3)]" ,
                        "backdrop-blur-xs"
                    )}>
                     <span className='font-medium'>Browse Components</span>
                     <ArrowDownRight  className='w-5 h-4 rotate-[270deg]'/>   
                    </Button>
                </motion.div>
            </Link>
        )
    }

export default
    BrowserComponentsButton