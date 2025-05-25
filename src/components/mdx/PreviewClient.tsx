"use client"
import React, { useState } from 'react'
import { RefreshButton } from './RefreshButton';
import Preview from './Preview';

type Props = {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link?: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
}

const PreviewClient = (props: Props) => {
  const [key, setKey] = useState(0)
  const handleRefresh = () => {
    setKey((prev) => prev + 1)
  }
  return (
    <div className="relative">
      <RefreshButton 
      onRefresh={handleRefresh}
      />
      <Preview {...props} key={key}/>
    </div>
    
  )
}

export default PreviewClient