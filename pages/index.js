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
          <h1 className="display-4">The fastest way to build an app</h1>
          <p>With Expo tools, services, and React, you can build, deploy, and quickly iterate on native Android, iOS, and web apps from the same JavaScript codebase.</p>
          <ul>
            <li>Access to device capabilities like camera, location, notifications, sensors, haptics, and much more, all with universal APIs.</li>
            <li>Access to device capabilities like camera, location, notifications, sensors, haptics, and much more, all with universal APIs.</li>
            <li>Access to device capabilities like camera, location, notifications, sensors, haptics, and much more, all with universal APIs.</li>
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

    <div className="container-fluid py-3">
      <div className="row">
        <div className="col">
          <img src="/sp.svg" className="img-fluid" width="200"></img>
        </div>
        <div className="col">
          <img src="/sda.svg" className="img-fluid" width="200"></img>
        </div>
        <div className="col">
          <img src="/kroku.svg" className="img-fluid" width="200"></img>
        </div>
        <div className="col">
          <img src="/blankon.svg" className="img-fluid" width="200"></img>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h3>Updates from us</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="card">
            <img src="/Wallpaper.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <img src="/Wallpaper.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <img src="/Wallpaper.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Home
