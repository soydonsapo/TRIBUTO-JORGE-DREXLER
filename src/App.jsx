import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ListeningWidget from './components/ListeningWidget.jsx'
import Hero from './sections/Hero.jsx'
import Biography from './sections/Biography.jsx'
import Timeline from './sections/Timeline.jsx'
import Discography from './sections/Discography.jsx'
import Media from './sections/Media.jsx'
import Community from './sections/Community.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="contenido" className="pt-20">
        <Hero />
        <Biography />
        <Timeline />
        <Discography />
        <Media />
        <Community />
      </main>
      <Footer />
      <ListeningWidget />
    </>
  )
}
