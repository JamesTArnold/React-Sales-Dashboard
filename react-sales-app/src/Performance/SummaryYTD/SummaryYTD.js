import "./SummaryYTD.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const SummaryYTD = ({ total, title, icon }) => {
  return (
    <div className="main-container border-bottom">
      <div className="icon">
        <FontAwesomeIcon
          icon={
            icon === "signal"
              ? faSignal
              : icon === "userPlus"
              ? faUserPlus
              : icon === "coins"
              ? faCoins
              : faUserPlus
          }
          size="3x"
        />
      </div>
      <div className="total-container">
        <div className="ytd">{total}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default SummaryYTD;
