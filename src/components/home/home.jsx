import React from "react";
import style from './home.module.css'

const Home = (props) => {

  return (
    <div className={style.container}>
      <h1>My awesome store!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit diam blandit eros sodales, sit amet ultrices felis blandit. Praesent pharetra venenatis erat, in ornare arcu volutpat eu. Aliquam viverra lectus et urna luctus dictum. Aenean ornare lorem quis lacus feugiat, eu feugiat enim iaculis. Etiam non egestas orci. Morbi non orci ut augue faucibus hendrerit. Pellentesque lacinia quam a tortor sagittis, id feugiat augue commodo. Ut condimentum in ipsum consectetur placerat. Etiam non velit in neque laoreet maximus et a diam. Quisque vel neque libero. Vestibulum in congue sem, fermentum porta tellus. Phasellus viverra suscipit ex.
      </p>
      <p>Background photo: <a href="https://unsplash.com/es/@mercantile?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clark Street Mercantile</a> from <a href="https://unsplash.com/es/fotos/interior-de-la-tienda-de-ropa-P3pI6xzovu0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </p>
    </div>
  )
}

export default Home;