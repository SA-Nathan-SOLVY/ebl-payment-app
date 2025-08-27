import { useState } from "react";
import { SUPPORTED_CURRENCIES } from "./CurrencyConverter";
import { Users, ArrowRight } from "lucide-react";

export function MemberTransfer() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [recipientId, setRecipientId] = useState("");

  const handleTransfer = async () => {
    try {
      // Simulate transfer for now
      alert(`Transfer of ${amount} ${currency} to member ${recipientId} initiated successfully!`);
      
      // Reset form
      setAmount("");
      setRecipientId("");
    } catch (error) {
      alert('Transfer failed. Please try again.');
    }
  };

  return (
    <div className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <Users className="h-6 w-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Member to Member Transfer</h3>
      </div>
      
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Transfer Amount</label>
            <div className="flex gap-2">
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="w-32 px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {SUPPORTED_CURRENCIES.map((curr) => (
                  <option key={curr.code} value={curr.code} className="bg-gray-800">
                    {curr.flag} {curr.code}
                  </option>
                ))}
              </select>
              <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="flex-1 px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Recipient Member ID</label>
            <input
              value={recipientId}
              onChange={(e) => setRecipientId(e.target.value)}
              placeholder="Enter recipient member ID"
              className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <button 
          onClick={handleTransfer}
          disabled={!amount || !recipientId}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <ArrowRight className="h-4 w-4" />
          Send Transfer
        </button>

        <div className="text-sm text-gray-400 space-y-1">
          <p>• Transfers between members are instant and borderless</p>
          <p>• All transfers are secured and encrypted end-to-end</p>
          <p>• Zero fees for family card networks</p>
        </div>
      </div>
    </div>
  );
}
