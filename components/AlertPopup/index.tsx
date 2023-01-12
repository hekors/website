import { AlertPopupType } from "@/types/alert-popup-type";
import { FaTimes } from 'react-icons/fa';

const AlertPopup: React.FunctionComponent<AlertPopupType> = ({
    isActive=true,
    isHighlighted=false,
    children,
    style,
}) => {
    return (
        <div className={`alert-popup-container shadow-lg bg-white px-3 py-2 border border-gray-200 w-[340px] ${isHighlighted && "animate-ping"}`}
            style={style}>
            <div className="alert-popup-container__closable-action-icon-layer flex flex-row items-center justify-end">
                <button className="p-2 bg-white hover:bg-gray-50 rounded">
                    <FaTimes className="font-normal text-gray-400" />
                </button>
            </div>
            <div className="alert-popup-container__content-wrapper">
                {children}
            </div>
        </div>
    )
};

export default AlertPopup;