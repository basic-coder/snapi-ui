'use client'

import { Textarea } from '@/components/ui/textarea'
import useAutoResizeTextarea from '@/hooks/use-auto-resize-textarea'
import { cn } from '@/lib/utils'
import { CornerRightUp, Mic } from 'lucide-react'
import React, { useState } from 'react'

type Props = {}

const AiInput01 = (props: Props) => {
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
    const [inputValue, setInputValue] = useState("");

    const resetHandler = () => {
        setInputValue(""); // Clear the input after sending
        adjustHeight(true); // Reset height after sending
    }
    return (
        <div className='w-full py-4'>
            <div className="relative max-w-xl w-full mx-auto">
                <Textarea id='ai-input-01' placeholder='Type your message'
                    className={cn(
                        "max-w-xl bg-black/5 dark:bg-white/5 rounded-3xl pl-6 pr-14", "placeholder:text-black/50 dark:placeholder:text-white/50",
                        "text-black dark:text-white text-wrap",
                        "overflow-y-auto resize-none",
                        "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
                        "transition-[height] duration-200 ease-in-out",
                        "leading-[1.2] py-[16px]", "min-h-[52px]", "max-h-[200px]"
                    )} ref={textareaRef}
                    value={inputValue} onChange={(e) => {
                        setInputValue(e.target.value)
                        adjustHeight(false);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            resetHandler()
                        }
                    }
                    } />
                    <div className={cn(
                        "absolute top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1 transition-all duration-300",
                        inputValue ? "right-10" : "right-3"
                    )}>
                        <Mic className='w-4 h-4 text-black/70 dark:text-white/70' />
                    </div>
                    <button onClick={resetHandler} type='button'
                    className={cn("absolute top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1 transition-all duration-700", inputValue ? 
                        "block right-3 animate-slide-in cursor-pointer" : "hidden"
                    )}
                    >
                        <CornerRightUp className='w-4 h-4 text-black/70 dark:text-white/70'/>
                    </button>
            </div>

        </div>
    )
}

export default AiInput01
