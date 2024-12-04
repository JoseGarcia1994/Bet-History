import surbetsHistory from "../utils/data";
import BetDetails from "./BetDetails";

const Bets = () => {
  const surbets = surbetsHistory;

  return (
    <div className="betContainer">
      {surbets.map((bet) => (
        <BetDetails bet={bet} key={bet.id} />
      ))}
    </div>
  );
};

export default Bets;
