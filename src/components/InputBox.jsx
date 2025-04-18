import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    SelectCurrency = "usd",
    className=""
}){
  const amountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Amount Input */}
      <div className="w-1/2">
        <label className="text-black mb-2 inline-block" htmlFor={amountInputId}>{label}</label>
        <input
          id = {amountInputId}
          type="text"
          placeholder="Amount"
          className="outline-none w-full bg-transparent py-1.5 text-black"
          value={amount}
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      {/* Currency Dropdown */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
      <p className="text-black/40 mb-2 w-full">Currency Type</p>
      <select
        className="rounded-lg px-1 py-1 bg-gray-700 cursor-pointer outline-none"
        value={SelectCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((currency)=> 
            (
                <option value={currency} key={currency}>
                    {currency}
                </option>
            )
        )}
      </select>
    </div>
    </div>
    
  )
}

export default InputBox
