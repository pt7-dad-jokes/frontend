import React from 'react';
import ReactDOM from 'react-dom';
import AddJokeForm from './AddJokeForm'
import styled from 'styled-components';

const Button = styled.button`
    padding: 12px 20px;
    margin-top: 50px;
    border: none;
    border-radius: 30px;
    color: Black;
    font-weight: bolder;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;

    ${props => (props.type === 'Close' ? `background: orange;` : null)}
    `;

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <Button type="Close"  onClick={hide}>Cancel
          {/* <span aria-hidden="true">&times;</span> */}
          </Button>
        </div>
        <div>
            <AddJokeForm/>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;