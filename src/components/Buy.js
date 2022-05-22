import './Components.css';

function Buy() {
  return (
    <div className="buy mb-5 p-4 row" >
      <div className="m-auto col-lg-3 col-12">
        <h3 className="buy-ape-title">BUY AN SC3</h3>
      </div>
      <div className="m-auto col-lg-4 col-12 offset-lg-1">
        <p className="common-p mb-lg-0">The initial sale has sold out. To get your Bored Ape, check out the collection on OpenSea.</p>
      </div>
      <div className="m-auto col-lg-3 col-12 offset-lg-1">
        <a href="https://opensea.io/collection/boredapeyachtclub">
          <button className="bayc-button mint" type="button">BUY AN APE ON OPENSEA</button>
        </a>
      </div>
    </div>
  );
}

export default Buy;
