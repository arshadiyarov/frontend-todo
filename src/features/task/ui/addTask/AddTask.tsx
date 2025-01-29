import { Plus } from "lucide-react";
import { Button } from "../../../../shared/ui/button/Button";
import { ButtonVariantsType } from "../../../../shared/ui/button/button";
import {
  Modal,
  ModalContent,
  ModalContentWrapper,
  ModalTrigger,
} from "../../../../shared/ui/modal/ui/Modal";
import { AddTaskForm } from "./AddTaskForm";
import { useState } from "react";

interface AddTaskProps {
  variant?: ButtonVariantsType;
  className?: string;
}

export const AddTask = ({ variant = "default", className }: AddTaskProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalTrigger asChild>
        <Button variant={variant} className={className}>
          <Plus />
          New Task
        </Button>
      </ModalTrigger>
      <ModalContentWrapper>
        <ModalContent className="w-96">
          <AddTaskForm close={handleClose} />
        </ModalContent>
      </ModalContentWrapper>
    </Modal>
  );
};
