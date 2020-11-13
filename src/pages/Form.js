import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';


const schema = yup.object().shape({
    name: yup.string().required('A name is required').min(2, 'Name is too short'),
    size: yup.string().oneOf(['xl', 'l', 'm', 's'], 'Select a size'),
    cheese: yup.boolean(),
    garlic: yup.boolean(),
    oregano: yup.boolean(),
    salami: yup.boolean(),
    moreInfo: yup.string()
})

export default function Form() {
    const [form, setForm] = useState(
        {
            name: '',
            size: '',
            cheese: false,
            garlic: false,
            oregano: false,
            salami: false,
            moreInfo: ''
        }
    )
    const [errors, setErrors] = useState(
        {
            name: '',
            size: '',
            cheese: '',
            garlic: '',
            oregano: '',
            salami: '',
            moreInfo: ''
        }
    )
    const [disabled, setDisabled] = useState(true);

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const changeHandler = event => {
        event.preventDefault();
        const { name, type, value, checked } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        setFormErrors(name, valueToUse);
        setForm({...form, [name]: valueToUse});
    }

    const submitForm = event => {
        event.preventDefault();
        const newOrder = {
            name: form.name.trim(),
            size: form.size,
            cheese: form.cheese,
            garlic: form.garlic,
            oregano: form.oregano,
            salami: form.salami,
            moreInfo: form.moreInfo.trim()
        }
        axios.post('', newOrder)
            .then(res => {
                setForm({
                    name: '',
                    size: '',
                    cheese: false,
                    garlic: false,
                    oregano: false,
                    salami: false,
                    moreInfo: ''
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid));
        console.log(form);
    }, [form]);
    
    return (
        <div>
            <Header/>
            <FormContainer>
                <form onSubmit={submitForm}>
                    <div className='errors'style={{color: 'red'}}>
                        <div>{errors.name}</div><div>{errors.size}</div>
                    </div>
                    <div>
                        <label>Name:
                            <input onChange={changeHandler} type='text' value={form.name} name='name'></input> 
                        </label>
                    </div>
                    <div>
                        <label>Pizza size:
                            <select onChange={changeHandler} value={form.size} name='size'>
                                <option value=''>--Please choose a size--</option>
                                <option value='xl'>Extra Large 20"</option>
                                <option value='l'>Large 16"</option>
                                <option value='m'>Medium 12"</option>
                                <option value='s'>Small 8"</option>
                            </select>
                        </label>
                    </div>
                    <div className='toppings'>
                        <div className={`cheese-container`}>
                            <input onChange={changeHandler} value={form.cheese} type='checkbox' name='cheese'/>
                            <label>Cheese</label>
                        </div>
                        <div className={`garlic-container`}>
                            <input onChange={changeHandler} value={form.garlic} type='checkbox' name='garlic'/>
                            <label>Garlic</label>
                        </div>
                        <div className={`oregano-container`}>
                            <input onChange={changeHandler} value={form.oregano} type='checkbox' name='oregano'/>
                            <label>Oregano</label>
                        </div>
                        <div className={`salami-container`}>
                            <input onChange={changeHandler} value={form.salami} type='checkbox' name='salami'/>
                            <label>Salami</label>
                        </div>
                    </div>
                    <div>
                        <label>
                            <textarea onChange={changeHandler} name='moreInfo' rows='5' cols='50' placeholder='Any additional information'></textarea>
                        </label>
                    </div>
                    <button disabled={disabled}>Submit Order</button>
                </form>
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
