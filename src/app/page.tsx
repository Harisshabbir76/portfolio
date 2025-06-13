import Hero from '../components/Hero';
import Aboutme from '../components/About-me'
import Skill from '../components/Skill'
import Project from '../components/Projects'
import Contact from '../components/Contact-me'
export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutme/> 
      <Skill/>
      <Project />
      <Contact/>
    </main>
  );
}