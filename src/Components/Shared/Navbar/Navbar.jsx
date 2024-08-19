import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between px-16 py-2 bg-[#D09423] text-[16px] font-[400] text-white">
      <div className="flex gap-2">
        <p>Follow Us</p>
        <div className="flex gap-2">
        <div className="rounded-full bg-slate-400 px-2">
1
        </div>
        <div className="rounded-full bg-slate-400 px-2">
2
        </div>
        <div className="rounded-full bg-slate-400 px-2">
3
        </div>
        </div>
      </div>
      <div>
        <p>Sign up get 20% Off for all collection</p>
      </div>
      <div className="flex gap-1">
        <div className="rounded-full bg-slate-400 px-2">
1
        </div>
        <p>01956729315</p>
      </div>
    </div>
  );
}

export default Navbar;
