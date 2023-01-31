import React, { createContext, useReducer } from 'react';

import Alert from '../../components/alert/alert.component';
import modalReducer from '../../reducers/modal/modal.reducer';

export const ModalContext = createContext({
  dispatchModal: () => {},
});

export const MODAL_INITIAL_STATE = {
  modalType: null,
  modalProps: {},
};

const renderModalType = (modalType, modalProps) => {
  switch (modalType) {
    case 'Alert': {
      return <Alert {...modalProps} />;
    }
    default: {
      return null;
    }
  }
};

export const ModalContextProvider = ({ children }) => {
  const [state, dispatchModal] = useReducer(modalReducer, MODAL_INITIAL_STATE);
  const { modalType, modalProps } = state;
  return (
    <ModalContext.Provider value={{ dispatchModal }}>
      {renderModalType(modalType, modalProps)}
      {children}
    </ModalContext.Provider>
  );
};
