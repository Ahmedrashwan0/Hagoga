"use client";

import toast from "react-hot-toast";

function BtnDelete({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item.id);
    toast.error("Removed from cart")
  };

  return (
    <button className="btn bg-[#ff0000] hover:bg-red-800 text-white rounded-xl" onClick={handleDelete}>
       Delete
    </button>
  );
}

export default BtnDelete;
