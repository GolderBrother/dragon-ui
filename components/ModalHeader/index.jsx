
import React, { Component, PropTypes } from 'react';

class ModalHeader extends Component {

  render () { 
    const { title, onClose, ...others } = this.props;
    const btnClose = onClose
                   ? <div className="ui-modal-close" onClick={onClose}></div>
                   : null;

    return (
      <div className="ui-modal-header" {...others}>
        <div className="ui-modal-title">{title}</div>
        {btnClose}
      </div>
    );
  }

}

ModalHeader.propTypes = { 
  title   : PropTypes.string,
  onClose : PropTypes.func,
};

ModalHeader.defaultProps = {
  title   : '',
};

export default ModalHeader;

