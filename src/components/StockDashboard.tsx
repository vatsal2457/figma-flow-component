import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
];

const marketData = [
  { symbol: 'BTC', price: '$42,350.00', change: '+2.5%' },
  { symbol: 'ETH', price: '$2,890.00', change: '+1.8%' },
  { symbol: 'SOL', price: '$98.45', change: '-0.5%' },
];

const newsData = [
  {
    date: 'April 5, 2023',
    title: 'Apple Stock Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)',
    image: '/apple-news.png'
  },
  {
    date: 'April 5, 2023',
    title: 'Apple Stock Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)',
    image: '/apple-news.png'
  },
  {
    date: 'April 5, 2023',
    title: 'Apple Stock Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)',
    image: '/apple-news.png'
  },
  {
    date: 'April 5, 2023',
    title: 'Apple Stock Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)',
    image: '/apple-news.png'
  },
  {
    date: 'April 5, 2023',
    title: 'Apple Stock Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)',
    image: '/apple-news.png'
  },
  {
    date: 'April 5, 2023',
    title: 'Apple Stock Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)',
    image: '/apple-news.png'
  },
];

const StockDashboard = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Market Overview</h1>
        <div className="flex space-x-4">
          <span className="text-cyan-400">24h</span>
          <span className="text-gray-400">1W</span>
          <span className="text-gray-400">1M</span>
        </div>
      </div>

      {/* News Section */}
     

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Chart Card */}
        <Card className="col-span-full bg-[#151C2C] border-[#1F2937] p-4">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#4B5563" />
                <YAxis stroke="#4B5563" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#E5E7EB' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0EA5E9" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Market Stats Cards */}
        {marketData.map((item) => (
          <Card 
            key={item.symbol} 
            className="bg-[#151C2C] border-[#1F2937] p-4 flex flex-col space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-400">{item.symbol}</span>
              <span className={`text-sm ${
                item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {item.change}
              </span>
            </div>
            <span className="text-2xl font-bold">{item.price}</span>
          </Card>
        ))}

        {/* Additional Stats */}
        <Card className="bg-[#151C2C] border-[#1F2937] p-4">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Market Cap</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">$2.14T</span>
              <span className="text-green-400 text-sm">+3.2%</span>
            </div>
          </div>
        </Card>

        <Card className="bg-[#151C2C] border-[#1F2937] p-4">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">24h Volume</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">$48.2B</span>
              <span className="text-red-400 text-sm">-1.8%</span>
            </div>
          </div>
        </Card>

        <Card className="bg-[#151C2C] border-[#1F2937] p-4">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Dominance</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">BTC: 48.2%</span>
              <span className="text-green-400 text-sm">+0.8%</span>
            </div>
          </div>
        </Card>
        {/* news section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">News</h2>
          <div className="flex gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {newsData.slice(0, 3).map((news, index) => (
                <Card 
                  key={index}
                  className="bg-[#0F1820] border-[#1F2937] overflow-hidden hover:border-blue-500 transition-all cursor-pointer w-[607px] h-[123px]"
                >
                  <div className="flex items-center h-full p-6">
                    <div className="w-16 h-16 rounded-lg bg-blue-500 flex-shrink-0 mr-6">
                      <img
                        src={news.image}
                        alt="News"
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-2">{news.date}</p>
                      <h3 className="text-white text-base font-medium leading-snug line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {newsData.slice(3, 6).map((news, index) => (
                <Card 
                  key={index + 3}
                  className="bg-[#0F1820] border-[#1F2937] overflow-hidden hover:border-blue-500 transition-all cursor-pointer w-[607px] h-[123px]"
                >
                  <div className="flex items-center h-full p-6">
                    <div className="w-16 h-16 rounded-lg bg-blue-500 flex-shrink-0 mr-6">
                      <img
                        src={news.image}
                        alt="News"
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-2">{news.date}</p>
                      <h3 className="text-white text-base font-medium leading-snug line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
    
  );
};

export default StockDashboard;
