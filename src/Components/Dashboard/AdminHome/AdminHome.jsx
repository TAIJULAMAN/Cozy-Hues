

function AdminHome() {

  const newCustomerCount = 56;
  const orders = 285;
  const monthlyProfit = 36;

  return (
    <div className="flex flex-col sm:flex-row gap-3 ">
      {/* New customer */}
      <div className="bg-white shadow rounded-lg p-6 w-full sm:max-w-sm">

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-700">New Customer</h3>
          <span className="text-2xl font-bold text-gray-800">{newCustomerCount}</span>
        </div>

        <div className="h-2 bg-gray-200 rounded-full mb-2">
          <div className="h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${newCustomerCount}%` }}></div>
        </div>

        <div className="text-sm text-gray-500">
          <span>{newCustomerCount}% of new customers in the last 30 days</span>
        </div>
      </div>

      {/* Orders */}
      <div className="bg-white shadow rounded-lg p-6 w-full sm:max-w-sm">

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-700">orders</h3>
          <span className="text-2xl font-bold text-gray-800">{orders}</span>
        </div>

        <div className="h-2 bg-gray-200 rounded-full mb-2">
          <div className="h-2 bg-green-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${newCustomerCount}%` }}></div>
        </div>

        <div className="text-sm text-gray-500">
          <span>{orders} orders in the last 30 days</span>
        </div>
      </div>
      {/* Monthly Profit */}
      <div className="bg-white shadow rounded-lg p-6 w-full sm:max-w-sm">

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Monthly Profit</h3>
          <span className="text-2xl font-bold text-gray-800">{monthlyProfit}</span>
        </div>

        <div className="h-2 bg-gray-200 rounded-full mb-2">
          <div className="h-2 bg-red-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${newCustomerCount}%` }}></div>
        </div>

        <div className="text-sm text-gray-500">
          <span>{monthlyProfit}K+ profit in the last 30 days</span>
        </div>
      </div>
    </div>
  )
}

export default AdminHome