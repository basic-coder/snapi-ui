import { CheckCircle2 } from 'lucide-react'
import React from 'react'

type Props = {}

const Alert01 = (props: Props) => {
  return (
    <div className='w-full max-w-xl max-auto'>
        <div className="relative bg-zinc-50 dark:zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_1px_6px_0_rgba(0,0,0,.02)] rounded-xl p-4">
            <div className="flex gap-4">
                <div className="p-2 rounded-full">
                    <div className="rounded-full bg-white dark:bg-zinc-900">
                        <CheckCircle2 className='w-6 h-6 text-zinc dark:text-zinc-500'/>
                    </div>
                </div>
                <div className="space-y-0.5">
                    <h3>
                        Snapi Ui
                    </h3>
                    <p className='text-[13px] text-zinc-500 dark:text-zinc-400'>
                        Use the CLI to install this!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Alert01