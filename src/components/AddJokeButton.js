import React from 'react';
import useModal from './useModal';
import Modal from "./Modal";
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

    ${props => (props.type === 'AddJoke' ? `background: orange;` : null)}
    `;


export default function AddJokeButton() {

const {isShowing, toggle} = useModal();
  return (
    <div>
      <Button type="AddJoke" onClick={toggle}>Add Joke</Button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
  };




















// import React from 'react';
// import styled from 'styled-components';

// const Button = styled.button`
//     padding: 12px 20px;
//     margin-top: 50px;
//     border: none;
//     border-radius: 30px;
//     color: Black;
//     font-weight: bolder;
//     font-size: 1.5rem;
//     cursor: pointer;
//     outline: none;

//     ${props => (props.type === 'AddJoke' ? `background: orange;` : null)}
// `;

// export default function AddJokeButton() {


//     return (
//         <div>
//             <Button type="AddJoke" >Add Joke</Button>
//         </div>
//     );
// }