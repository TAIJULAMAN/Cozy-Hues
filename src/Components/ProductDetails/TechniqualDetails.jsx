/* eslint-disable react/no-unescaped-entities */

const TechniqualDetails = () => {
  return (
    <div className="mt-10 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Details</h3>
              <table className="min-w-full bg-white border ">
                <thead className="">
                  <tr >
                    <th className="py-3 px-4 bg-gray-100 text-left text-xl font-medium  text-gray-600">Features</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xl font-medium  text-gray-600">Details</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Brand</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">KOLLIEE</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Color</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Black</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Product Dimensions</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">24"D x 24.4"W x 35.8"H</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Size</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Large</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Back Style</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Solid Back</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Style</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Modern</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Unit Count</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">1.0 Count</td>
                  </tr>
                </tbody>
              </table>
            </div>
        
            {/* Additional Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Additional Information</h3>
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xl font-medium  text-gray-600">Features</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xl font-medium  text-gray-600">Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">ASIN</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Bo7Y1P9F7K</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Customer Reviews</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">4.0 ★★★★★ 7,900 ratings</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Product Dimensions</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">24"D x 24.4"W x 35.8"H</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Best Seller Rank</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">#298,293 in Home & Kitchen</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">Date First Available</td>
                    <td className="py-3 px-4 border-b text-xl font-medium text-gray-700">May 03, 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        
          {/* Warranty & Support Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Warranty & Support</h3>
            <p className="text-xl font-medium text-gray-500">
              FurniFlex.com Return Policy: Regardless of your statutory right of withdrawal, you enjoy a 30-day right of return
              for many products. For exceptions and conditions, see <a href="#" className="text-blue-500 underline">Return details</a>.
            </p>
            <p className="text-xl font-medium text-gray-500 mt-4">
              Manufacturer's warranty can be requested from customer service. <a href="#" className="text-blue-500 underline">Click here</a> to
              make a request to customer service.
            </p>
          </div>
        </div>
  )
}

export default TechniqualDetails