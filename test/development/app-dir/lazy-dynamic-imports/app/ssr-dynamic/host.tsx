'use client'

import dynamic from 'next/dynamic'

const SsrTarget = dynamic(() => import('./ssr-target'))

export function Host() {
  return <SsrTarget />
}
