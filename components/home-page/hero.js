import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/programmer.jpg"}
          alt="programmer image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi i am Alireza</h1>
      <p>
        This is a blog about web development. spacialy front end frame works
        like NextJs or ReactJs or VueJs
      </p>
    </section>
  );
}

export default Hero;
