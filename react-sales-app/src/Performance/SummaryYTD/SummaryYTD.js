import "./SummaryYTD.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SummaryYTD = ({total, title, icon}) => {
    return(
        <div className="container">
        <div className="icon">
           <FontAwesomeIcon icon={faCoffee} size="3x" />
        </div>
            <div className="total-container">
                <div className="ytd">total</div>
                <div className="title">title</div>
            </div>

        </div>
    )
}

export default SummaryYTD;