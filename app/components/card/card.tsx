// app/components/Card.tsx (یا هر مسیر مناسب دیگر)
import { LocalOffer } from "@mui/icons-material";
import "../../styles/CardStyles.css";
import AddToCartButton from "../../utils/AddToCartButton";

const getDiscountedProducts = async () => {
  const res = await fetch("http://localhost:3001/Discounted", {
    cache: "no-store", // جلوگیری از کش در حالت dev
  });

  if (!res.ok) {
    throw new Error("خطا در دریافت اطلاعات");
  }

  return res.json();
};

const Card = async () => {
  const products = await getDiscountedProducts();

  return (
    <div className="cards-container">
      {products.map((product: any) => (
        <div className="card" key={product.id}>
          <div className="discount-badge cursor-pointer">
            <LocalOffer className="text-lg" />
            تخفیف
          </div>

          <img
            src={product.img || "./default.png"}
            alt={product.name}
            className="card-media"
          />

          <div className="card-content">
            <h6 className="card-title cursor-pointer">{product.name}</h6>
            <p className="card-description">{product.discaption}</p>

            <div className="price-box">
              <span className="old-price">
                <span className="old-price-text">{product.oldPrice}</span>
              </span>
              <h6 className="new-price">{product.newPrice}</h6>
            </div>
          </div>
          <AddToCartButton/>
        </div>
      ))}
    </div>
  );
};

export default Card;


