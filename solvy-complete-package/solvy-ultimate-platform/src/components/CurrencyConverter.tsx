import { useState, useEffect } from "react";

interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  group?: string;
  gdpRatio?: number;
  volume?: number;
}

export const SUPPORTED_CURRENCIES: Currency[] = [
  // Base Currency
  { code: "USD", name: "United States Dollar", symbol: "$", flag: "🇺🇸" },

  // BRICS Full Members
  { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "🇧🇷", group: "BRICS-Full" },
  { code: "RUB", name: "Russian Ruble", symbol: "₽", flag: "🇷🇺", group: "BRICS-Full" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳", group: "BRICS-Full", gdpRatio: 3.3, volume: 129 },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳", group: "BRICS-Full", gdpRatio: 0.1, volume: 51 },
  { code: "ZAR", name: "South African Rand", symbol: "R", flag: "🇿🇦", group: "BRICS-Full" },
  { code: "EGP", name: "Egyptian Pound", symbol: "£", flag: "🇪🇬", group: "BRICS-Full", gdpRatio: 5.9, volume: 32 },
  { code: "ETB", name: "Ethiopian Birr", symbol: "Br", flag: "🇪🇹", group: "BRICS-Full" },
  { code: "IRR", name: "Iranian Rial", symbol: "﷼", flag: "🇮🇷", group: "BRICS-Full" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ", flag: "🇦🇪", group: "BRICS-Full" },

  // BRICS Partner Countries
  { code: "BYN", name: "Belarusian Ruble", symbol: "Br", flag: "🇧🇾", group: "BRICS-Partner" },
  { code: "BOB", name: "Bolivian Boliviano", symbol: "Bs.", flag: "🇧🇴", group: "BRICS-Partner" },
  { code: "KZT", name: "Kazakhstani Tenge", symbol: "₸", flag: "🇰🇿", group: "BRICS-Partner" },
  { code: "CUP", name: "Cuban Peso", symbol: "₱", flag: "🇨🇺", group: "BRICS-Partner" },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM", flag: "🇲🇾", group: "BRICS-Partner" },
  { code: "THB", name: "Thai Baht", symbol: "฿", flag: "🇹🇭", group: "BRICS-Partner" },
  { code: "UGX", name: "Ugandan Shilling", symbol: "USh", flag: "🇺🇬", group: "BRICS-Partner" },
  { code: "UZS", name: "Uzbekistani Som", symbol: "soʻm", flag: "🇺🇿", group: "BRICS-Partner" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦", flag: "🇳🇬", group: "BRICS-Partner", gdpRatio: 4.3, volume: 20 },

  // High Volume Remittance Markets
  { code: "MXN", name: "Mexican Peso", symbol: "$", flag: "🇲🇽", group: "Markets", gdpRatio: 4.2, volume: 61 },
  { code: "PHP", name: "Philippine Peso", symbol: "₱", flag: "🇵🇭", group: "Markets", gdpRatio: 9.4, volume: 38 },
  { code: "PKR", name: "Pakistani Rupee", symbol: "₨", flag: "🇵🇰", group: "Markets", gdpRatio: 8.1, volume: 30 },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺", group: "Markets", gdpRatio: 1.2, volume: 28 },
  { code: "BDT", name: "Bangladeshi Taka", symbol: "৳", flag: "🇧🇩", group: "Markets", gdpRatio: 4.7, volume: 21 },

  // Global Markets
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧", group: "Global" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵", group: "Global" },
  { code: "AUD", name: "Australian Dollar", symbol: "$", flag: "🇦🇺", group: "Global" },
  { code: "CAD", name: "Canadian Dollar", symbol: "$", flag: "🇨🇦", group: "Global" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr", flag: "🇨🇭", group: "Global" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "$", flag: "🇭🇰", group: "Global" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "$", flag: "🇳🇿", group: "Global" },
  { code: "SGD", name: "Singapore Dollar", symbol: "$", flag: "🇸🇬", group: "Global" }
];

export function CurrencyConverter() {
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("PHP");
  const [rate, setRate] = useState<number>(1);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Mock exchange rates for development
  const mockRates: { [key: string]: number } = {
    // BRICS
    "USD-INR": 83.10,
    "USD-CNY": 7.18,
    "USD-BRL": 4.95,
    "USD-RUB": 89.50,
    "USD-ZAR": 19.05,
    "USD-EGP": 30.90,
    "USD-ETB": 56.50,
    "USD-AED": 3.67,

    // BRICS+Partner
    "USD-BYN": 2.6,
    "USD-BOB": 6.86,
    "USD-KZT": 450.25,
    "USD-CUP": 24,
    "USD-MYR": 4.6,
    "USD-THB": 35.25,
    "USD-UGX": 3700,
    "USD-UZS": 10800,
    "USD-NGN": 780,

    // High Volume Markets
    "USD-MXN": 17.15,
    "USD-PHP": 56.43,
    "USD-PKR": 279.50,
    "USD-EUR": 0.92,
    "USD-BDT": 109.75,

    // Global Markets
    "USD-GBP": 0.78,
    "USD-JPY": 145.00,
    "USD-AUD": 1.50,
    "USD-CAD": 1.35,
    "USD-CHF": 0.90,
    "USD-HKD": 7.80,
    "USD-NZD": 1.65,
    "USD-SGD": 1.38,
  };

  const updateRate = () => {
    const key = `${fromCurrency}-${toCurrency}`;
    setRate(mockRates[key] || 1);
    setLastUpdated(new Date());
  };

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      updateRate();
    }
  }, [fromCurrency, toCurrency]);

  const formatAmount = (value: number, currencyCode: string) => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value) + ' ' + currencyCode;
    } catch (error) {
      return value.toFixed(2) + ' ' + currencyCode;
    }
  };

  const convertedAmount = parseFloat(amount || "0") * rate;

  return (
    <div className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          💱 Currency Converter
        </h3>
        <button
          onClick={updateRate}
          className="p-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors"
          title="Update Exchange Rates"
        >
          🔄
        </button>
      </div>
      
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Send Currency</label>
              <select 
                value={fromCurrency} 
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {SUPPORTED_CURRENCIES.map((currency) => (
                  <option key={currency.code} value={currency.code} className="bg-gray-800">
                    {currency.flag} {currency.code} - {currency.name}
                    {currency.volume && ` - $${currency.volume}B`}
                    {currency.gdpRatio && ` (${currency.gdpRatio}% GDP)`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Receive Currency</label>
              <select 
                value={toCurrency} 
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {SUPPORTED_CURRENCIES.map((currency) => (
                  <option key={currency.code} value={currency.code} className="bg-gray-800">
                    {currency.flag} {currency.code} - {currency.name}
                    {currency.volume && ` - $${currency.volume}B`}
                    {currency.gdpRatio && ` (${currency.gdpRatio}% GDP)`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Amount to Send</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
                placeholder="Enter amount"
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        <div className="w-full p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg text-center border border-purple-500/30">
          <div className="text-2xl font-semibold text-white">
            {formatAmount(convertedAmount, toCurrency)}
          </div>
          <div className="text-sm text-gray-300 mt-2">
            1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Last Updated: {lastUpdated.toLocaleTimeString()}
            <span className="block mt-1 text-[11px] italic">
              Note: Exchange rates are simulated for development purposes. Live rates will be integrated in production.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-4 text-white">
              BRICS Full Members
            </h4>
            <div className="text-xs text-gray-400 mb-2">
              As of 2025
            </div>
            <div className="space-y-2">
              {SUPPORTED_CURRENCIES
                .filter(c => c.group === "BRICS-Full")
                .map((currency) => (
                  <div key={currency.code} className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                    <span className="flex items-center gap-2 text-gray-300">
                      <span>{currency.flag}</span>
                      <span className="font-medium">{currency.code}</span>
                      <span className="text-xs text-gray-400">
                        {currency.name}
                        {currency.volume && ` - $${currency.volume}B`}
                        {currency.gdpRatio && ` (${currency.gdpRatio}% GDP)`}
                      </span>
                    </span>
                    <span className="font-mono text-white text-sm">{formatAmount(parseFloat(amount || "0") * (mockRates[`USD-${currency.code}`] || 1), currency.code)}</span>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">
              BRICS Partner Countries
            </h4>
            <div className="text-xs text-gray-400 mb-2">
              As of 2025
            </div>
            <div className="space-y-2">
              {SUPPORTED_CURRENCIES
                .filter(c => c.group === "BRICS-Partner")
                .map((currency) => (
                  <div key={currency.code} className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                    <span className="flex items-center gap-2 text-gray-300">
                      <span>{currency.flag}</span>
                      <span className="font-medium">{currency.code}</span>
                      <span className="text-xs text-gray-400">
                        {currency.name}
                        {currency.volume && ` - $${currency.volume}B`}
                        {currency.gdpRatio && ` (${currency.gdpRatio}% GDP)`}
                      </span>
                    </span>
                    <span className="font-mono text-white text-sm">{formatAmount(parseFloat(amount || "0") * (mockRates[`USD-${currency.code}`] || 1), currency.code)}</span>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">
              High Volume Markets
            </h4>
            <div className="text-xs text-gray-400 mb-2">
              Top US Remittance Destinations
            </div>
            <div className="space-y-2">
              {SUPPORTED_CURRENCIES
                .filter(c => c.group === "Markets")
                .map((currency) => (
                  <div key={currency.code} className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                    <span className="flex items-center gap-2 text-gray-300">
                      <span>{currency.flag}</span>
                      <span className="font-medium">{currency.code}</span>
                      <span className="text-xs text-gray-400">
                        {currency.name}
                        {currency.volume && ` - $${currency.volume}B`}
                        {currency.gdpRatio && ` (${currency.gdpRatio}% GDP)`}
                      </span>
                    </span>
                    <span className="font-mono text-white text-sm">{formatAmount(parseFloat(amount || "0") * (mockRates[`USD-${currency.code}`] || 1), currency.code)}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

