import Head from 'next/head'
import Layout from '../components/Layout'

const Home = () => (
  <Layout>
    <div className="container-fluid one">
      <div className="row">
        <div className="col-lg-6">
          <img src="/cycle.svg" className="img-fluid"></img>
        </div>
        <div className="col-lg-6">
          <h1 className="display-4">The most efficient way to build a website</h1>
          <p>With Syandsign, you can build, deploy, and quickly iterate on website with a simple methods</p>
          <ul>
            <li>Access to wide customers around the world</li>
            <li>Build service gives you focus on the design. We do the coding.</li>
            <li>Over-the-air updates let you know when your web have problems at any time without the hassle and delays.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="jumbotron jumbotron-fluid text-center bg-black text-light">
      <div className="container">
        <img src="/Syandsign.png" className="img-fluid" width="100"></img>
        <br />
        <br />
        <h3>Try Syandsign Now</h3>
        <p className="lead">Gak ada ruginya kok</p>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h3>Updates from us</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg mb-3">
          <div className="card">
            <img src="/Wallpaper.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-lg mb-3">
          <div className="card">
            <img src="/Wallpaper.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-lg mb-3">
          <div class="card">
            <img src="/Wallpaper.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Home
