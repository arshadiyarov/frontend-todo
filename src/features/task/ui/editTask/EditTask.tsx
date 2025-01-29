import { SquarePen } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../shared/ui/button/Button";
import {
  Modal,
  ModalContent,
  ModalContentWrapper,
  ModalTrigger,
} from "../../../../shared/ui/modal/ui/Modal";
import { EditTaskForm } from "./EditTaskForm";

interface EditTaskProps {
  id: number;
  title: string;
}

export const EditTask = ({ id, title }: EditTaskProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalTrigger asChild>
        <Button variant="outline" size="icon">
          <SquarePen />
        </Button>
      </ModalTrigger>
      <ModalContentWrapper className="!opacity-100">
        <ModalContent className="w-96 !opacity-100">
          <EditTaskForm id={id} title={title} close={handleClose} />
        </ModalContent>
      </ModalContentWrapper>
    </Modal>
  );
};
