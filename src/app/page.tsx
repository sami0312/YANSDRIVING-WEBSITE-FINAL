import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import Testimonials from '@/components/Testimonials'
import HappyDrivers from '@/components/HappyDrivers'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Courses />
      <Testimonials />
      <HappyDrivers />
      <ContactForm />
      <Footer />
    </main>
  )
}