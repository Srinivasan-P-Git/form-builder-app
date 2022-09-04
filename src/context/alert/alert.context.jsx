import { useState, useRef, useEffect } from "react";
import { createContext } from "react";

export const AlertContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  onClose: () => {},
  alertContent: "",
  setAlertContent: () => {},
});

export const AlertContextProvider = ({ children }) => {
  const onCloseFnRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  const onClose = (fn) => {
    onCloseFnRef.current = fn;
  };

  useEffect(() => {
    if (!isOpen && onCloseFnRef.current) {
      onCloseFnRef.current();
      onCloseFnRef.current = null;
    }
  }, [isOpen]);

  return (
    <AlertContext.Provider
      value={{ isOpen, setIsOpen, onClose, alertContent, setAlertContent }}
    >
      {children}
    </AlertContext.Provider>
  );
};
