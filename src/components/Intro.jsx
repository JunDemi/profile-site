import React, { useRef } from "react";

const Intro = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="intro-container">
        <div>
          <img src="/bannerbg.jpeg" alt="" />
          <h1>Hi. I'm</h1>
          <h2>Frontend Developer.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            corrupti, facilis fugit quam voluptate omnis, impedit id nisi
            voluptas cupiditate autem numquam quo odio laudantium rerum,
            perferendis in excepturi nobis.
          </p>
          <button onClick={handleClick}>Read More</button>
        </div>
      </div>

      <div className="nono" ref={ref}>dsadasd</div>
    </>
  );
};

export default Intro;
