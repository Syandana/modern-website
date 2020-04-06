import Link from 'next/link'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top sticky-top bg-white border-bottom">
    <a className="navbar-brand" href="#"><strong>Syandsign</strong></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end">
      <ul className="nav nav-pills nav-fill navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">This</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">is</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">the navigation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">bar</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar