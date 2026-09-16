'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PAIRS, CCY_TO_USD, LOT_SIZES, convertCcy, pipSizeFor, fmtMoney } from '../constant/constant';

const PipCalculator = () => {
  const [pair, setPair] = useState('EUR/USD');
  const [accountCcy, setAccountCcy] = useState('USD');
  const [lotType, setLotType] = useState('standard');
  const [lots, setLots] = useState(1);
  const [pipValue, setPipValue] = useState(0);
  const [positionSize, setPositionSize] = useState(0);

  const calculate = () => {
    const pairData = PAIRS.find(p => p.sym === pair);
    if (!pairData) return;

    const units = LOT_SIZES[lotType] * lots;
    const pipSize = pipSizeFor(pairData.quote);
    const pipValueQuote = pipSize * units;
    const pipValueAccount = convertCcy(pipValueQuote, pairData.quote, accountCcy);

    setPipValue(pipValueAccount);
    setPositionSize(units);
  };

  useEffect(() => {
    calculate();
  }, [pair, accountCcy, lotType, lots]);

  return (
    <>
      <section className="px-0 pb-[88px] pt-10">
        <div className="max-w-[1180px] mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 mt-[-40px] relative z-10">
            
            <div className="bg-[#0d1826] border border-[rgba(255,255,255,0.08)] rounded-[20px] shadow-[0_20px_45px_rgba(4,10,20,0.35)] p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-poppins font-semibold text-white text-lg">Calculate pip value</h2>
                <span className="text-[0.65rem] font-semibold text-[#f2b705] bg-[rgba(242,183,5,0.14)] border border-[rgba(242,183,5,0.3)] px-2.5 py-0.5 rounded-full">
                  Live formula
                </span>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                {/* Row 1: Currency Pair & Account Currency */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.75rem] text-[#a9b7c8] mb-1 font-medium">Currency pair</label>
                    <select 
                      value={pair}
                      onChange={(e) => setPair(e.target.value)}
                      className="w-full bg-[#0b0e14] border border-[rgba(255,255,255,0.08)] text-[#f3f6fa] px-3 py-2.5 rounded-[8px] text-[0.9rem] focus:outline-none focus:border-[#29abe2] focus:shadow-[0_0_0_3px_rgba(41,171,226,0.12)] appearance-none"
                    >
                      {PAIRS.map((p) => (
                        <option key={p.sym} value={p.sym}>{p.sym}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.75rem] text-[#a9b7c8] mb-1 font-medium">Account currency</label>
                    <select 
                      value={accountCcy}
                      onChange={(e) => setAccountCcy(e.target.value)}
                      className="w-full bg-[#0b0e14] border border-[rgba(255,255,255,0.08)] text-[#f3f6fa] px-3 py-2.5 rounded-[8px] text-[0.9rem] focus:outline-none focus:border-[#29abe2] focus:shadow-[0_0_0_3px_rgba(41,171,226,0.12)] appearance-none"
                    >
                      {Object.keys(CCY_TO_USD).map((ccy) => (
                        <option key={ccy} value={ccy}>{ccy}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 2: Lot Size & Number of Lots */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.75rem] text-[#a9b7c8] mb-1 font-medium">Lot size</label>
                    <select 
                      value={lotType}
                      onChange={(e) => setLotType(e.target.value)}
                      className="w-full bg-[#0b0e14] border border-[rgba(255,255,255,0.08)] text-[#f3f6fa] px-3 py-2.5 rounded-[8px] text-[0.9rem] focus:outline-none focus:border-[#29abe2] focus:shadow-[0_0_0_3px_rgba(41,171,226,0.12)] appearance-none"
                    >
                      <option value="standard">Standard lot (100,000)</option>
                      <option value="mini">Mini lot (10,000)</option>
                      <option value="micro">Micro lot (1,000)</option>
                      <option value="nano">Nano lot (100)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.75rem] text-[#a9b7c8] mb-1 font-medium">Number of lots</label>
                    <input 
                      type="number" 
                      value={lots}
                      onChange={(e) => setLots(parseFloat(e.target.value) || 0)}
                      min="0.01" 
                      step="0.01"
                      className="w-full bg-[#0b0e14] border border-[rgba(255,255,255,0.08)] text-[#f3f6fa] px-3 py-2.5 rounded-[8px] text-[0.9rem] focus:outline-none focus:border-[#29abe2] focus:shadow-[0_0_0_3px_rgba(41,171,226,0.12)]"
                    />
                  </div>
                </div>

                {/* Calculate Button */}
                <button 
                  onClick={calculate}
                  className="w-full bg-[#29abe2] text-[#04131c] font-semibold text-[0.9rem] py-3 px-6 rounded-full hover:bg-[#3fc1f0] transition-all mt-1"
                >
                  Calculate pip value
                </button>

                {/* Results */}
                <div className="bg-gradient-to-br from-[#0b0e14] to-[#0d1420] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-4 flex flex-wrap gap-4 items-center justify-between">
                  <div>
                    <div className="text-[0.7rem] text-[#74839a] mb-0.5">Value of 1 pip</div>
                    <div className="font-poppins font-semibold text-[1.3rem] text-[#3fc1f0]">
                      {fmtMoney(pipValue, accountCcy)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-[#74839a] mb-0.5">Position size</div>
                    <div className="font-poppins font-semibold text-[1.1rem] text-[#f3f6fa]">
                      {positionSize.toLocaleString()} units
                    </div>
                  </div>
                </div>

                <p className="text-[0.65rem] text-[#74839a] pt-2 border-t border-[rgba(255,255,255,0.06)]">
                  Conversions use indicative reference rates for education purposes only. Always confirm live pip values on your broker's platform before trading.
                </p>
              </div>
            </div>

            {/* Info Card - Right Side */}
            <div className="bg-[#0d1826] border border-[rgba(255,255,255,0.08)] rounded-[20px] shadow-[0_20px_45px_rgba(4,10,20,0.35)] p-6 h-fit">
              <h3 className="font-poppins font-semibold text-white text-[1rem] mb-3">
                How pip value is worked out
              </h3>
              
              {/* Formula Box */}
              <div className="bg-[#0b0e14] border border-[rgba(255,255,255,0.08)] rounded-[8px] p-3 font-poppins text-[0.85rem] text-[#3fc1f0] overflow-x-auto mb-3">
                Pip value = pip size × position size × exchange rate
              </div>
              
              {/* Explanation List */}
              <ul className="list-disc pl-4 text-[#a9b7c8] space-y-1.5 mb-3">
                <li className="leading-[1.5] text-[0.8rem]">
                  A pip is the fourth decimal place on most pairs (0.0001), or the second decimal place on JPY pairs (0.01).
                </li>
                <li className="leading-[1.5] text-[0.8rem]">
                  Position size is your lot size multiplied by the number of lots you enter.
                </li>
                <li className="leading-[1.5] text-[0.8rem]">
                  If the pair's quote currency isn't your account currency, the value is converted using the current exchange rate.
                </li>
              </ul>
              
              {/* Why this matters */}
              <div className="flex gap-2.5 py-2.5 border-t border-[rgba(255,255,255,0.06)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29abe2] mt-1.5 flex-none"></span>
                <div>
                  <strong className="text-white block text-[0.85rem] mb-0.5">Why this matters</strong>
                  <span className="text-[#a9b7c8] text-[0.78rem] leading-[1.5]">
                    Knowing pip value lets you size a position so a stop-loss equals a fixed, planned risk amount — the basis of proper risk management.
                  </span>
                </div>
              </div>
              
              {/* Standard lot sizes */}
              <div className="flex gap-2.5 py-2.5 border-t border-[rgba(255,255,255,0.06)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29abe2] mt-1.5 flex-none"></span>
                <div>
                  <strong className="text-white block text-[0.85rem] mb-0.5">Standard lot sizes</strong>
                  <span className="text-[#a9b7c8] text-[0.78rem] leading-[1.5]">
                    1.0 lot = 100,000 units · 0.1 lot = 10,000 units · 0.01 lot = 1,000 units.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default PipCalculator;