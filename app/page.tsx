import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <p className='text-3xl text-sky-700 font-medium'> Hello World</p>
      <Button variant='destructive'>Click Me</Button>
    </>
  )
}
