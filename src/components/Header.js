import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

export default function Header() {
    return (
        <Bar>
            <Link to='/'>
                <h1 style={{textAlign: 'center', fontSize: '2.5rem'}}>Lambda Eats</h1>
            </Link>
        </Bar>
    );
}

const Bar = styled.header`
    width: 100vw;
`;
