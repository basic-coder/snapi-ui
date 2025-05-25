'use client'
import React, { useCallback, useEffect, useRef } from 'react'

type useAutoResizeTextareaProps = {
    minHeight: number;
    maxHeight: number;
}

const useAutoResizeTextarea = ({ minHeight, maxHeight }: useAutoResizeTextareaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const adjustHeight = useCallback((reset: boolean) => {
        const textarea = textareaRef.current;
        if (!textarea) return

        if (reset) {
            textarea.style.height = `${minHeight}px`;
            return
        }

        textarea.style.height = `${minHeight}px`;

        const newHeight = Math.max(minHeight, Math.min(maxHeight ?? Number.POSITIVE_INFINITY));

        textarea.style.height = `${newHeight}px`;
    }, [minHeight, maxHeight]);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height
        }
    }, [minHeight])
    return { textareaRef, adjustHeight }
}

export default useAutoResizeTextarea