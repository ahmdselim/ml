import React from "react";
import {
  IoWalletOutline,
  IoGridOutline,
  IoBagOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";
import icon1 from "../images/icon1.jpg";
import icon2 from "../images/icon2.jpg";
import icon3 from "../images/icon3.jpg";

const Work = () => {
  return (
    <div className="work-area">
      <h3>HOW IT WORKS</h3>
      <ul className="items">
        <li className="item">
          <IoWalletOutline />
          <h3>Set up your wallet</h3>
          <p>
            Once you've set up your wallet of choice, connect it to OpenSea by
            clicking the NFT Marketplace in the top right corner. Learn about
            the wallets we support.
          </p>
        </li>

        <li className="item">
          <img src={icon2} alt="work" />
          <h3>Set up your wallet</h3>
          <p>
            Once you've set up your wallet of choice, connect it to OpenSea by
            clicking the NFT Marketplace in the top right corner. Learn about
            the wallets we support.
          </p>
        </li>

        <li className="item">
          <img src={icon3} alt="work" />
          <h3>Set up your wallet</h3>
          <p>
            Once you've set up your wallet of choice, connect it to OpenSea by
            clicking the NFT Marketplace in the top right corner. Learn about
            the wallets we support.
          </p>
        </li>

        <li className="item">
          <img src={icon1} alt="work" />
          <h3>Set up your wallet</h3>
          <p>
            Once you've set up your wallet of choice, connect it to OpenSea by
            clicking the NFT Marketplace in the top right corner. Learn about
            the wallets we support.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Work;
