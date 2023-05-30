import React from "react";

// import styles
import styles from "../assets/styles/Interest.module.css";

export default function Interest() {
  return (
    <div
      className={`${styles.skills}`}
      data-aos={`fade-up`}
      data-aos-duration={`1000`}
      data-aos-once={`true`}
    >
      {/* title - start */}
      <h3
        data-aos={`fade-down`}
        data-aos-duration={`1000`}
        data-aos-delay={`1000`}
        data-aos-once={`true`}
      >
        Interest
      </h3>
      {/* title - end */}

      {/*  */}
      <div>
        {/* psychology - start */}
        <div>
          <div className={`row`}>
            <div
              className={`col-1 d-flex justify-content-center ${styles.logo}`}
            >
              <img
                src={`https://res.cloudinary.com/biandamara/image/upload/v1665939993/Portfolio%20Web/Icons/psychology_nexc1x.png`}
                alt={``}
                data-aos={`fade-left`}
                data-aos-duration={`1000`}
                data-aos-delay={`1000`}
                data-aos-once={`true`}
              />
            </div>

            <div
              className={`col`}
              data-aos={`zoom-out`}
              data-aos-duration={`1000`}
              data-aos-delay={`1000`}
              data-aos-once={`true`}
            >
              <h5>Psychology</h5>
              <p>
                I'm a psychology graduate. I'm interested in studying human
                behavior and the factors that influence it. Studying psychology
                has helped me to understand myself better, and understand
                psychology why people act like they do in certain situations. I
                like to understand what motivates us, what makes us happy, what
                causes us to stress, and how we can be happier and not stressed.
              </p>
            </div>
          </div>
        </div>
        {/* psychology - end */}

        <hr></hr>

        {/* treveling - start */}
        <div className={`row`}>
          <div className={`col-1 d-flex justify-content-center ${styles.logo}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1665939993/Portfolio%20Web/Icons/footstep_f7sv5i.png`}
              alt={``}
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`1000`}
              data-aos-once={`true`}
            />
          </div>

          <div
            className={`col`}
            data-aos={`zoom-out`}
            data-aos-duration={`1000`}
            data-aos-delay={`1000`}
            data-aos-once={`true`}
          >
            <h5>Traveling</h5>
            <p>
              The adventure of a lifetime or just wanting to connect with
              someone new, traveling can be a very rewarding experience. It's
              also something I can do casually, at my own pace, with the people
              I'm friends with. I also really enjoy visiting new places,
              learning local history and culture, and tasting local food. The
              best travel experiences are those where I feel connected to people
              while I'm on the road. That's what travel is like for me: a
              journey.
            </p>
          </div>
        </div>
        {/* treveling - end */}

        <hr></hr>

        {/* photography - start */}
        <div className={`row`}>
          <div className={`col-1 d-flex justify-content-center ${styles.logo}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1665939993/Portfolio%20Web/Icons/camera_fa9lpn.png`}
              alt={``}
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`1000`}
              data-aos-once={`true`}
            />
          </div>

          <div
            className={`col`}
            data-aos={`zoom-out`}
            data-aos-duration={`1000`}
            data-aos-delay={`1000`}
            data-aos-once={`true`}
          >
            <h5>Photography</h5>
            <p>
              Photography has always been one of my favorite hobbies. When I
              take pictures, it's like seeing things from a new perspective
              literally and figuratively. Thing about the camera and the lens is
              that it lets you see people, places, etc. from a whole new
              perspective and it helps to see things from a different view. From
              photography, I realized that getting a different view of things
              means you have a more open mind to the world. Check out my{" "}
              <a href={`https://www.instagram.com/biandamara/`}>Instagram</a>.
            </p>
          </div>
        </div>
        {/* photography - end */}
      </div>
    </div>
  );
}
