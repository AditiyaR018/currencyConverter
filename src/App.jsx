import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyInfo(from)
  const Options = Object.keys(CurrencyInfo)
  const swap = async () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-300 shadow-xl rounded-2xl p-6 backdrop-blur-md bg-white/40 transition-all">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* FROM InputBox */}
            <div className="w-full mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                SelectCurrency={from}
              />
            </div>

            {/* SWAP BUTTON */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 shadow-md hover:bg-white hover:text-blue-600 transition-all duration-200 ease-in-out"
                onClick={swap}
              >
                ⇅ Swap
              </button>
            </div>

            {/* TO InputBox */}
            <div className="w-full mt-3 mb-5">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setTo(currency)}
                SelectCurrency={to}
              />
            </div>

            {/* CONVERT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-all duration-200 shadow-md"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default App
