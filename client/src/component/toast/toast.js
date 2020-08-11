import React from 'react';
import { connect } from 'react-redux';

const Toast = ({ toasts }) =>
  toasts !== null &&
  toasts.length > 0 &&
  toasts.map(toast => (
    <div key={toast.id} className={`alert alert-${toast.toastType}`}>
      {toast.msg}
    </div>
  ));


const mapStateToProps = state => ({
  toasts: state.toast
});

export default connect(mapStateToProps)(Toast);