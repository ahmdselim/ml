import React from "react";
import {
  IoWalletOutline,
  IoGridOutline,
  IoBagOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";
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
          <IoGridOutline />
          <h3>Set up your wallet</h3>
          <p>
            Once you've set up your wallet of choice, connect it to OpenSea by
            clicking the NFT Marketplace in the top right corner. Learn about
            the wallets we support.
          </p>
        </li>

        <li className="item">
          <IoBagOutline />
          <h3>Set up your wallet</h3>
          <p>
            Once you've set up your wallet of choice, connect it to OpenSea by
            clicking the NFT Marketplace in the top right corner. Learn about
            the wallets we support.
          </p>
        </li>

        <li className="item">
          <IoTrendingUpOutline />
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
