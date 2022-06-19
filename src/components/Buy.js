import './Components.css';

function Buy() {
  return (
    <div className="buy sc3-bg mb-5 p-4 row" >
      <div className="text-center col-lg-3 col-12 mb-2 m-lg-auto">
        <h3 className="fw-bold">BUY AN SC3</h3>
      </div>
      <div className="col-lg-4 col-12 offset-lg-1 mb-2 m-lg-auto ">
        <p className="common-p mb-lg-0">
          To get your STUPID CAT CHARITY CLUB, check out the collection on OpenSea.
        </p>
      </div>
      <div className="m-auto text-center col-lg-3 col-12 offset-lg-1">
        <a href="https://opensea.io/collection/dominant-cat-charity-club">
          <button className="sc3-button" type="button">BUY AN SC3 ON OPENSEA</button>
        </a>
      </div>
    </div>
  );
}

export default Buy;
