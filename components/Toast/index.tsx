import React, { useEffect } from 'react';

type Props = {
  isOpen?: boolean,
  onClose: () => void
};

const Toast: React.FC<Props> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    setTimeout(() => {
      if (isOpen) {
        onClose();
      }
    }, 2000);
  }, [isOpen, onClose]);
  return isOpen ? (
    <div className="fixed p-4 w-full bg-error text-bg-100 text-bold text-center">
      {children}
    </div>
  ) : null;
};

export default Toast;
