'use client';

import { useState, useEffect } from 'react';
import { PAIRS, CCY_TO_USD, LOT_SIZES, convertCcy, fmtMoney } from '../constant/constant';

const MarginCalculator = () => {
  const [pair, setPair] = useState('EUR/USD');
  const [accountCcy, setAccountCcy] = useState('USD');
  const [lotType, setLotType] = useState('standard');
  const [lots, setLots] = useState(1);
  const [leverage, setLeverage] = useState(100);
  const [margin, setMargin] = useState(0);
  const [notional, setNotional] = useState(0);

  // Calculate margin
  const calculate = () => {
    const pairData = PAIRS.find(p => p.sym === pair);
    if (!pairData) return;

    const units = LOT_SIZES[lotType] * lots;
    const notionalAccount = convertCcy(units, pairData.base, accountCcy);
    const marginRequired = notionalAccount / leverage;

    setNotional(notionalAccount);
    setMargin(marginRequired);
  };

  useEffect(() => {
    calculate();
  }, [pair, accountCcy, lotType, lots, leverage]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
      {/* Calculator - Left Side */}
      <div className="bg-[#0d1826] border border-[rgba(255,255,255,0.08)] rounded-[20px] shadow-[0_20px_45px_rgba(4,10,20,0.35)] p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-poppins font-semibold text-white text-lg">Calculate required margin</h2>
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

          {/* Row 3: Leverage */}
          <div>
            <label className="block text-[0.75rem] text-[#a9b7c8] mb-1 font-medium">Leverage</label>
            <select 
              value={leverage}
              onChange={(e) => setLeverage(parseFloat(e.target.value))}
              className="w-full bg-[#0b0e14] border border-[rgba(255,255,255,0.08)] text-[#f3f6fa] px-3 py-2.5 rounded-[8px] text-[0.9rem] focus:outline-none focus:border-[#29abe2] focus:shadow-[0_0_0_3px_rgba(41,171,226,0.12)] appearance-none"
            >
              <option value="10">1:10</option>
              <option value="30">1:30</option>
              <option value="50">1:50</option>
              <option value="100">1:100</option>
              <option value="200">1:200</option>
              <option value="500">1:500</option>
              <option value="1000">1:1000</option>
            </select>
          </div>

          {/* Calculate Button */}
          <button 
            onClick={calculate}
            className="w-full bg-[#29abe2] text-[#04131c] font-semibold text-[0.9rem] py-3 px-6 rounded-full hover:bg-[#3fc1f0] transition-all mt-1"
          >
            Calculate required margin
          </button>

          {/* Results */}
          <div className="bg-gradient-to-br from-[#0b0e14] to-[#0d1420] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-4 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <div className="text-[0.7rem] text-[#74839a] mb-0.5">Required margin</div>
              <div className="font-poppins font-semibold text-[1.3rem] text-[#f2b705]">
                {fmtMoney(margin, accountCcy)}
              </div>
            </div>
            <div>
              <div className="text-[0.7rem] text-[#74839a] mb-0.5">Position value</div>
              <div className="font-poppins font-semibold text-[1.3rem] text-[#3fc1f0]">
                {fmtMoney(notional, accountCcy)}
              </div>
            </div>
          </div>

          <p className="text-[0.65rem] text-[#74839a] pt-2 border-t border-[rgba(255,255,255,0.06)]">
            Conversions use indicative reference rates for education purposes only. Your broker's actual margin requirement may differ — always confirm on your live platform.
          </p>
        </div>
      </div>

      {/* Info Card - Right Side */}
      <div className="bg-[#0d1826] border border-[rgba(255,255,255,0.08)] rounded-[20px] shadow-[0_20px_45px_rgba(4,10,20,0.35)] p-6 h-fit">
        <h3 className="font-poppins font-semibold text-white text-[1rem] mb-3">
          How required margin is worked out
        </h3>
        
        {/* Formula Box */}
        <div className="bg-[#0b0e14] border border-[rgba(255,255,255,0.08)] rounded-[8px] p-3 font-poppins text-[0.85rem] text-[#3fc1f0] overflow-x-auto mb-3">
          Margin = position size × exchange rate ÷ leverage
        </div>
        
        {/* Explanation List */}
        <ul className="list-disc pl-4 text-[#a9b7c8] space-y-1.5 mb-3">
          <li className="leading-[1.5] text-[0.8rem]">
            Position size is the base currency amount you control — lot size multiplied by number of lots.
          </li>
          <li className="leading-[1.5] text-[0.8rem]">
            That amount is converted into your account currency at the current exchange rate.
          </li>
          <li className="leading-[1.5] text-[0.8rem]">
            Leverage sets how much of that value your broker requires you to put up as margin.
          </li>
        </ul>
        
        {/* Free Margin */}
        <div className="flex gap-2.5 py-2.5 border-t border-[rgba(255,255,255,0.06)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#29abe2] mt-1.5 flex-none"></span>
          <div>
            <strong className="text-white block text-[0.85rem] mb-0.5">Free margin</strong>
            <span className="text-[#a9b7c8] text-[0.78rem] leading-[1.5]">
              Free margin = account equity − used margin. It's what determines how many more positions you can open.
            </span>
          </div>
        </div>
        
        {/* Margin Call Risk */}
        <div className="flex gap-2.5 py-2.5 border-t border-[rgba(255,255,255,0.06)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#29abe2] mt-1.5 flex-none"></span>
          <div>
            <strong className="text-white block text-[0.85rem] mb-0.5">Margin call risk</strong>
            <span className="text-[#a9b7c8] text-[0.78rem] leading-[1.5]">
              Higher leverage lowers required margin per trade, but it doesn't reduce risk — your position size and pip exposure stay the same.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarginCalculator;