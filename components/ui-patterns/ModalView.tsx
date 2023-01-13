import { ModalViewType } from "@/types/ui-pattern-types/modal-view-type";
import ReactModal from "react-modal";
import Button from "./Button";

ReactModal.setAppElement("body");

const ModalView: React.FunctionComponent<ModalViewType> = ({
    children,
    title,
    isOpen=true,
    modalViewAction
}, props: any) => {
    return (
        <ReactModal isOpen={isOpen} onRequestClose={() => modalViewAction(false)} {...props}
            shouldCloseOnEsc
            shouldReturnFocusAfterClose
            style={{
                overlay: {
                    background: "rgba(0, 0, 0, 0.300)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                },
                content: {
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: "6rem",
                    width: "fit-content",
                    minWidth: "420px",
                    maxWidth: "600px",
                    height: "fit-content",
                    minHeight: "300px",
                    maxHeight: "800px",
                    padding: "0px",
                    borderColor: "black",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    boxShadow: "5px 5px black"
                }
            }}
        >
            <div className="modal-view-header-wrapper flex flex-row items-start justify-start px-6 py-1">
                {title ? <h2 className="clamp_modal-title-wrapper text-xl font-semibold">{title}</h2> : <span />}
            </div>
            <div className="modal-view-content-wrapper px-6 my-4">
                {children}
                <div className="w-fit h-fit" onClick={() => modalViewAction(false)}>
                    <Button type="primary" shade="product-red">
                        Understood!
                    </Button>
                </div>
            </div>
        </ReactModal>
    )
};

export default ModalView;