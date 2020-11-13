import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';

export default function Home() {
    return (
        <div>
            <Header/>
            <Container>
                <Link to='/pizza'>
                    <Button>Pizza!</Button>
                </Link>
                <img style={{width: '100vw'}} src='https://prd-mp-images.azureedge.net/99f510c3-fa8b-472d-b061-eeed2af3ebb8/image/074f7e4d-522a-4bc5-99be-69b58b84c3e1/eddie-sams-pizza-banner-2.png' alt='pizza'/>
            </Container>
        </div>
    )
}

const Container = styled.div`
    position: relative;
    text-align: center;
    color: white;
`;

const Button = styled.button`
    width: 120px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
`;