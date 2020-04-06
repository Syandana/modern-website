import Link from 'next/link'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top sticky-top bg-white border-bottom">
    <a className="navbar-brand" href="#"><strong>Poppins</strong></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end">
      <ul className="nav nav-pills nav-fill navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Much longer nav link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Link</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar