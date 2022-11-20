const Good = ({ good, setPayment }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="img-catalog" src={good.img} alt="movie" />
      </div>
      <div className="card-content">
        <span className="card-title">{good.name}</span>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => setPayment(true)}>
          Buy now
        </button>
        <span className="right">{good.price}</span>
      </div>
    </div>
  );
};

export { Good };
