import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin-top: 150px;
    border: none;
    color: Black;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;

    ${props => (props.type === 'Signout' ? `background: white;` : null)}
`;

export default function SignoutButton() {


    return (
        <div>
            <Button type="Signout" >Sign out</Button>
        </div>
    );
}