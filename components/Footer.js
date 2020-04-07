import Link from 'next/link'

const Footer = () => (
  <div className="container-fluid">
    <hr />
    <br />
    <div className="row">
      <div className="col-lg">
        <h6><strong>Syandsign</strong></h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-secondary">About</a></li>
          <li><a href="#" className="text-secondary">Who</a></li>
          <li><a href="#" className="text-secondary">We</a></li>
          <li><a href="#" className="text-secondary">Are</a></li>
        </ul>
      </div>
      <div className="col-lg">
        <h6><strong>Get Started</strong></h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-secondary">Call</a></li>
          <li><a href="#" className="text-secondary">Email</a></li>
        </ul>
      </div>
      <div className="col-lg">
        <h6><strong>Resources</strong></h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-secondary">Documentation</a></li>
          <li><a href="#" className="text-secondary">Forums</a></li>
        </ul>
      </div>
      <div className="col-lg">
        <h6><strong>Company</strong></h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-secondary">Overview</a></li>
          <li><a href="#" className="text-secondary">About</a></li>
          <li><a href="#" className="text-secondary">Jobs</a></li>
          <li><a href="#" className="text-secondary">Blog</a></li>
        </ul>
      </div>
      <div className="col-lg">
        <h6><strong>Social</strong></h6>
        <ul className="list-unstyled">
          <li><a href="https://github.com/Syandana" target="_blank" className="text-secondary">Github</a></li>
          <li><a href="https://instagram.com/syandanax" target="_blank" className="text-secondary">Instagram</a></li>
          <li><a href="https://dribbble.com/syandanax" target="_blank" className="text-secondary">Dribbble</a></li>
        </ul>
      </div>
    </div>
    <br />
  </div>
)

export default Footer