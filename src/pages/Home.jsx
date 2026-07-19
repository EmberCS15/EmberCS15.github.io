import { Link } from 'react-router-dom'

const entries = [
  {
    to: '/about',
    index: '01',
    title: 'About & Journey',
    body: 'My background, the path I have taken, and what I care about building.',
  },
  {
    to: '/projects',
    index: '02',
    title: 'Projects',
    body: 'Selected work — what I built, the problems it solved, and the impact.',
  },
  {
    to: '/contact',
    index: '03',
    title: 'Get in Touch',
    body: 'Open to collaboration, roles, and interesting conversations.',
  },
  {
    to: '/chat',
    index: '04',
    title: 'Ask AI',
    body: 'Chat with an assistant that answers questions about my work.',
  },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <p className="hero-eyebrow">Software Engineer</p>
        <h1 className="hero-title">
          Hi, I'm Abhijit — I build software that makes hard things simple.
        </h1>
        <p className="hero-subtitle">
          Welcome to my corner of the web. Explore my journey, the projects I've
          shipped, or just ask my AI assistant anything about my work.
        </p>
      </section>

      <nav className="directory" aria-label="Explore">
        {entries.map((entry) => (
          <Link key={entry.to} to={entry.to} className="directory-row">
            <span className="directory-index">{entry.index}</span>
            <span className="directory-text">
              <span className="directory-title">{entry.title}</span>
              <span className="directory-body">{entry.body}</span>
            </span>
            <span className="directory-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
