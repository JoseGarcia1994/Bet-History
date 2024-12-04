const BetDetails = ({bet}) => {
    const {sport, percentage, totalBet} = bet
    const {totalOne, bookingOne, gameOne, coutaOne } = bet.oddOne
    const {totalTwo, bookingTwo, gameTwo, coutaTwo } = bet.oddTwo
    
  return (
    <div className="detailsContainer">
      <div className="betheader">
        <div>
          <span>{percentage}</span>
        </div>
        <div>
          <span>{sport}</span>
          <span>Total: ${totalBet}</span>
        </div>
      </div>
      <div className="oddOne">
        <div>
          <span>{totalOne}</span>
        </div>
        <div>
          <span>{bookingOne}</span>
        </div>
        <div>
          <span>{gameOne}</span>
        </div>
        <div>
          <span>{coutaOne}</span>
        </div>
      </div>
      <div className="oddTwo">
        <div>
          <span>{totalTwo}</span>
        </div>
        <div>
          <span>{bookingTwo}</span>
        </div>
        <div>
          <span>{gameTwo}</span>
        </div>
        <div>
          <span>{coutaTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default BetDetails;
