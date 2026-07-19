import { NavLink, Link, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/chat', label: 'Ask AI' },
]

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="nav">
        <Link to="/" className="nav-brand">
          Abhijit Roy
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Abhijit Roy</span>
        <a href="https://github.com/EmberCS15" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  )
}
