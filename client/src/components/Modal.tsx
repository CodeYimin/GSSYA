import { ComponentProps, ReactElement, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  ...props
}: ModalProps & ComponentProps<"div">): ReactElement {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      className="fixed w-full h-full top-0 left-0  z-50 flex justify-center items-center text-zinc-950"
      onClick={() => {}}
      {...props}
    >
      <div
        className="fixed w-full h-full bg-zinc-900 opacity-95"
        onClick={onClose}
      />
      {children}
    </div>
  );
}
