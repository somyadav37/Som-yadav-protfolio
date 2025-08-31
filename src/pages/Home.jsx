import React from 'react'
import { ThemeToggle } from '../Components/ThemeToggle'
import StarBackground from '../Components/StarBackground'
import { Navbar } from '../Components/Navbar'
import { HeroSection } from '../Components/HeroSection'
import { AboutSection } from '../Components/Aboutme'
import { SkillsSection } from '../Components/SkillsSection'
import { ProjectsSection } from '../Components/ProjectsSection'
import { ContactSection } from '../Components/ContactSection'
import { Footer } from '../Components/Footer'
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-hidden'>

      <ThemeToggle/>
     
     <StarBackground />
     <Navbar ></Navbar>
     <main>
     <HeroSection></HeroSection>
     <AboutSection ></AboutSection>
     <SkillsSection></SkillsSection>
     <ProjectsSection></ProjectsSection>
     <ContactSection ></ContactSection>
     <Footer ></Footer>
     </main>
   
    </div>
  )
}

export default Home
