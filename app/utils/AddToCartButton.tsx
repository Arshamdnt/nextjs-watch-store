'use client'; // این خیلی مهمه

import { ShoppingCart } from "@mui/icons-material";
import { cartUtils } from "./cartUtils";

const AddToCartButton = () => {
  const handleClick = () => {
    cartUtils(); // فقط لاگ می‌زنه
  };

  return (
    <button className="add-to-cart-button" onClick={handleClick}>
      <ShoppingCart className="mr-2" />
      اضافه کردن به سبد
    </button>
  );
};

export default AddToCartButton;
