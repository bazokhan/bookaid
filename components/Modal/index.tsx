import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  isOpen?: boolean,
  title?: string,
  onClose?: (event?: any) => void
};

const Modal: React.FC<Props> = ({ children, title, isOpen, onClose }) =>
  typeof window !== 'undefined' && isOpen
    ? ReactDOM.createPortal(
        <div className="w-full h-full bg-bg-900 bg-opacity-50 p-12 pointer-events-auto">
          <div className="mx-auto bg-main-6 rounded-default scrollbar scrollbar-thin scrollbar-thumb-pink-500 w-full max-w-screen-lg h-full max-h-[80vh] overflow-hidden shadow-lg">
            <div className="w-full text-bg-900 flex justify-between items-center py-4 px-8 border-b border-main-5">
              <p className="text-left font-bold text-2xl">{title || ''}</p>
              <button className="text-2xl" onClick={onClose}>
                x
              </button>
            </div>
            <div className="py-4 px-8 w-full overflow-y-auto">{children}</div>
          </div>
        </div>,
        document.getElementById('modal')
      )
    : null;

export default Modal;
