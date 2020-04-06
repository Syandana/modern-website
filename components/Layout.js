import Head from 'next/head'
import Styles from './Styles'
import Navbar from './Navbar'

const Layout = (props) => (
  <div>
    <Head>
      <script src="https://kit.fontawesome.com/f2cb64a8aa.js" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
      <title>Modern Web</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
    </Head>
    <Styles/>
    <Navbar/>
    <div>
      {props.children}
    </div>
  </div>
);

export default Layout;