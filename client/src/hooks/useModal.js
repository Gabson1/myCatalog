import React, { Fragment, useState } from 'react';

import { Modal } from '../component/modal/modal';

// Renders a modal to the modal root and handles the visibility state of this modal.
export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = ({ children }: { children: React.ReactChild }) => (
    <Fragment>
      {isVisible && <Modal closeModal={hide}>{children}</Modal>}
    </Fragment>
  );

  return {
    show,
    hide,
    RenderModal,
  };
};
