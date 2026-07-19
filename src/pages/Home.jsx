import { Link } from 'react-router-dom'

const cards = [
  {
    to: '/about',
    eyebrow: '01',
    title: 'About & Journey',
    body: 'My background, the path I have taken, and what I care about building.',
    cta: 'Read my story',
  },
  {
    to: '/projects',
    eyebrow: '02',
    title: 'Projects',
    body: 'Selected work — what I built, the problems it solved, and the impact.',
    cta: 'See the work',
  },
  {
    to: '/contact',
    eyebrow: '03',
    title: 'Get in Touch',
    body: 'Open to collaboration, roles, and interesting conversations. Say hello.',
    cta: 'Reach out',
  },
  {
    to: '/chat',
    eyebrow: '04',
    title: 'Ask AI',
    body: 'Chat with an assistant that answers questions about my work in plain language.',
    cta: 'Start chatting',
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
        <div className="hero-actions">
          <Link to="/projects" className="btn btn--primary">
            View projects
          </Link>
          <Link to="/chat" className="btn btn--ghost">
            Ask AI anything
          </Link>
        </div>
      </section>

      <section className="cards" aria-label="Explore">
        {cards.map((card) => (
          <Link key={card.to} to={card.to} className="card">
            <span className="card-eyebrow">{card.eyebrow}</span>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-body">{card.body}</p>
            <span className="card-cta">{card.cta} →</span>
          </Link>
        ))}
      </section>
    </div>
  )
}
