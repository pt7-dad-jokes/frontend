import React from 'react';
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


    return (
        <div>
            <Button type="AddJoke" >Add Joke</Button>
        </div>
    );
}