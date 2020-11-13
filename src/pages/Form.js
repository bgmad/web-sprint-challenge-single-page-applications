import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const toppingsList = [
    'Cheese', 
    'Garlic', 
    'Oregano',
    'Salami'
]

const createToppings = (arrayOfToppings) => {
    return arrayOfToppings.map(topping => {
        return (
            <div className={`${topping.toLowerCase()}-container`}>
                <input type='checkbox' name={topping.toLowerCase()}/>
                <label>{topping}</label>
            </div>
        )
    });
}

export default function Form() {
    return (
        <div>
            <Header/>
            <FormContainer>
                <form>
                    <div>
                        <label>Name:
                            <input type='text'></input> 
                        </label>
                    </div>
                    <div>
                        <label>Pizza size:
                            <select>
                                <option value=''>--Please choose a size--</option>
                                <option value='xl'>Extra Large 20"</option>
                                <option value='l'>Large 16"</option>
                                <option value='m'>Medium 12"</option>
                                <option value='s'>Small 8"</option>
                            </select>
                        </label>
                    </div>
                    <div className='toppings'>
                        {createToppings(toppingsList)}
                    </div>
                    <div>
                        <label>
                            <textarea name='more-info' rows='5' cols='50' placeholder='Any additional information'></textarea>
                        </label>
                    </div>
                </form>
                <button>Submit Order</button>
            </FormContainer>
        </div>
    );
}

const FormContainer = styled.div`
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;



    border: thin black solid;
`;
