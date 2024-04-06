import {React,useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable = false,
    currencyDisable=false,
    className="",
    
}) {
    const amountInputId=useId();
    return (
        <>
          <div className={`bg-white rounded-lg p-3 flex text-sm ${className} outline-blue-600 outline-none`}>
            <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>{label}</label>
            <input 
            id={amountInputId}
            placeholder="Number"
            disabled={amountDisable}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            type="number" 
            className=" outline-none w-full bg-transparent py-0.5" />
            </div>
            <div className="text-right w-1/2 flex-wrap justify-end">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >
                {currencyOptions.map((currency)=>(
                    <option value={currency} key={currency}>
                        {currency}
                    </option>
                ))}
                </select>
            </div>

          </div>
        </> 
    )
}

export default InputBox
