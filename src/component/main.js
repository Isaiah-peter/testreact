import React from "react";
import mobile from "./smartphone.png";
import wallet from "./wallet.png";
import bulb from "./lightbulb.png";

const Main = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="main-discription">
          <img src={mobile} alt="frame" width="60px" height="60px" />
          <h3 className="main-head">mobile optimize</h3>
          <h4 className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </h4>
          <a href="#" className="link">
            Learn-more &rarr;
          </a>
        </div>
        <div className="main-discription">
          <img src={wallet} alt="frame" width="60px" height="60px" />
          <h3 className="main-head">increase revernue</h3>
          <h4 className="text">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness
          </h4>
          <a href="#" className="link">
            Learn-more &rarr;
          </a>
        </div>
        <div className="main-discription">
          <img src={bulb} alt="frame" width="60px" height="60px" />
          <h3 className="main-head">smart idea</h3>
          <h4 className="text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </h4>
          <a href="#" className="link">
            Learn-more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
