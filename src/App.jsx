import './App.css'

const links = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Email', href: 'mailto:you@example.com' },
]

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <h1>Abhijit Roy</h1>
        <p className="tagline">Software engineer. Builder of things.</p>
      </header>

      <section className="about">
        <h2>About</h2>
        <p>
          Hi, I'm Abhijit. This is my corner of the web — a work in progress.
          I write software and enjoy building tools that make hard things simple.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Coming soon</strong> — replace this list with your own work.
          </li>
        </ul>
      </section>

      <footer className="links">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </footer>
    </main>
  )
}
