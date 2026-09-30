import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About, TechStack } from './components/About'
import { Projects } from './components/Projects'
import { GitHubSection, CurrentlyBuilding } from './components/GitHub'
import { Contact, Footer } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-accent focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-6 sm:px-6 sm:pb-28">
          <div className="space-y-6">
            <About />
            <TechStack />
            <Projects />
            <GitHubSection />
            <CurrentlyBuilding />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
