import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Button from "@/components/FormElements/Button";

const BasicModal = ({ modalHeader, modalMessage, modalButtons }) => {
  let showModal = false;
  const toggleModal = () => (showModal = !showModal);

  return (
    <div className="basic_modal_wrapper">
      <div className="basic_modal_section">
        {/**header for the modal */}
        <div className="basic_modal_header">
          <h2>{modalHeader}</h2>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </div>
        {/**content for modal */}
        <div className="basic_modal_content">
          <p>{modalMessage}</p>
        </div>
        {/**button section for modal */}
        <div className="basic_modal_buttons">
            {
                modalButtons.map(btn=>{
                    return (
                        <Button key={btn.id} text={btn.text} onClick={btn.onClick} />
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

BasicModal.propTypes = {
  modalHeader: PropTypes.string,
  modalMessage: PropTypes.string,
  modalButtons: PropTypes.array,
};

export default BasicModal;
