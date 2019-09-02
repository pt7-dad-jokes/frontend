import React from 'react';
import ReactDOM from 'react-dom';
import "./Styles/Modal.css";
import AddJokeForm from './AddJokeForm'
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  regContainer: {
    backgroundColor: "#E76D00",
    height: "100%",
    width: "100vw"
  },
  closebutton: {
    backgroundColor: "#E76D00",
    marging: "500px"
  },
}));

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
          
        </div>
        <div>
            <AddJokeForm/>
            <div className="closebutton">
            <Button type="Close"  onClick={hide}>Cancel
            {/* <span aria-hidden="true">&times;</span> */}
          </Button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;

