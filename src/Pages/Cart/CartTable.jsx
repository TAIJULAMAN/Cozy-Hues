/* eslint-disable react/prop-types */

import { FaTrash } from "react-icons/fa";

const CartTable = ({ idx, item }) => {
  return (
    <tr className="border-b">
      <td className="px-2 sm:px-4 lg:px-6 py-3 text-center">{idx + 1}</td>
      <td className="px-2 sm:px-4 lg:px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 sm:w-12 h-10 sm:h-12">
            <img
              src={item?.image}
              alt={item?.name}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </td>
      <td className="px-2 sm:px-4 lg:px-6 py-3">{item?.itemName}</td>
      <td className="px-2 sm:px-4 lg:px-6 py-3">
        <div className="flex items-center gap-2">
          <button className="btn btn-sm text-black">-</button>
          <input
            type="number"
            value={item.quantity}
            className="w-10 sm:w-12 text-center border rounded-lg"
          />
          <button className="btn btn-sm text-black">+</button>
        </div>
      </td>
      <td className="px-2 sm:px-4 lg:px-6 py-3">{item?.subtotal} BDT</td>
      <td className="px-2 sm:px-4 lg:px-6 py-3">
        <button className="btn btn-sm text-white">
          <FaTrash className="text-red-600" />
        </button>
      </td>
    </tr>
  );
};

export default CartTable;
