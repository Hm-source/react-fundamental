import React, { useState } from 'react';

import './PaymentForm.css';

const PaymentForm = () => {
  const [ objectState, setObjectState ] = useState({
    name: '',
    price : 0,
    today: null
  })
  const inputTypeTextChangeHandler = (event) => {
    setObjectState(prevState => ({...prevState, name: event.target.value}))
  };
  const inputTypePriceChangeHandler = (event) => {
    setObjectState(prevState => ({...prevState, price: event.target.value}))
  };
  const inputTypeDateChangeHandler = (event) => {
    setObjectState(prevState => ({...prevState, today: event.target.value}))
  };
  const buttonSubmitHandler = (event) => {
    event.preventDefault();
    
    console.log('name', objectState.name);
    console.log('price', objectState.price);
    console.log('today', objectState.today);

    // value 초기화
    setObjectState({
      name: '',
      price : 0,
      today: new Date()
    })
  }

  return (
    <form onSubmit={buttonSubmitHandler}>
      <div className='new-payment__controls'>
        <div className='new-payment__control'>
          <label>이름</label>
          <input type='text' value={objectState.name} 
          onChange={inputTypeTextChangeHandler} />
        </div>
        <div className='new-payment__control'>
          <label>금액</label>
          <input type='number' value={objectState.price} min='0.01' step='0.01' 
          onChange={inputTypePriceChangeHandler} />
        </div>
        <div className='new-payment__control'>
          <label>날짜</label>
          <input type='date' value={objectState.today} min='2019-01-01' max='2022-12-31' 
          onChange={inputTypeDateChangeHandler} />
        </div>
      </div>
      <div className='new-payment__actions'>
        <button type="submit" >결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;
