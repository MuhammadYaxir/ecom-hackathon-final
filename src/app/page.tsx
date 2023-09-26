import Hero from '@/components/sections/Hero'
import Newsletter from '@/components/sections/Newsletter'
import Products from '@/components/sections/Products'
import Promotion from '@/components/sections/Promotion'
import Unique from '@/components/sections/Unique'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Promotion/>
      <Products/>
      <Unique/>
      <Newsletter/>
    </main>
  )
}
