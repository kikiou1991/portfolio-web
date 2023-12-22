import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#372E29] container mx-auto px-12 py-4">
      {/* <Navbar /> */}
      <div class='container mt-20 mx-auto px-12 py-4'>
        <HeroSection />
        {/* <AboutSection />
        <ProjectSection /> */}
      </div>
    </main>
  )
}
