import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  button,
} from "@nextui-org/react";

export default function BasicModal({
  openModalText,
  openModalIcon,
  title,
  children,
  showActionButton = false,
  actionButtonText,
  isButtonIconOnly = false,
  buttonIconClass
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly={isButtonIconOnly}>
        {buttonIconClass && <FontAwesomeIcon icon={buttonIconClass} />}
        {openModalText && openModalText}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {showActionButton && (
                  <Button color="primary" onPress={onClose}>
                    {actionButtonText}
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
