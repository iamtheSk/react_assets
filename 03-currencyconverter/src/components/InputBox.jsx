import React from 'react'

const InputBox = ({ label, amount , onAmountChange, onCurrencyChange ,
    currencyOptions = [], selectedCurrency = 'usd', amountDisabled = false, currencyDisabled= false,className = ""}) => {
  return (
    <div className={`${className} bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2 ">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          type="number"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>  onAmountChange && onAmountChange(Number(e.target.value))}
          placeholder="Amount"
          className="outline-none w-full bg-transparent py-1.5"
        />
          </div>
          
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black mb-2 w-full">Currency Type</p>
              <select disabled={currencyDisabled} onChange={(e)=> onCurrencyChange && onCurrencyChange(Number(e.target.value))} value={selectedCurrency} className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'>
                  {currencyOptions.map((currency) => (
                      <option key={currency} value={currency}>
                          
                      </option>
                  ))}
              </select>
        </div>
    </div>
  );
}

export default InputBox