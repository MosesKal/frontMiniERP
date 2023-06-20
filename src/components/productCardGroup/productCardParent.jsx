import ProductCard from "../productCard/productCard";
import "./ProductCardParent.scss";
export default function ProductCardParent() {
  return (
    <div className="parent">
      <div>
        <ProductCard
          className="save-products"
          icon="fluent-emoji-flat:blue-heart"
          quantity="178+"
          type="Save Products"
          color="red" // Couleur personnalisée pour la carte "Save Products"
        />
      </div>
      <div>
        <ProductCard
          className="stock-products"
          icon="solar:gamepad-old-bold"
          quantity="20+"
          type="Stock Products"
          color="#FFC327" // Couleur personnalisée pour la carte "Stock Products"
        />
      </div>
      <div>
        <ProductCard
          className="sales-products"
          icon="solar:bag-4-bold"
          quantity="190+"
          type="Sales Products"
          color="#FF8F6B" // Couleur personnalisée pour la carte "Sales Products"
        />
      </div>
      <div>
        <ProductCard
          className="invitation-tender"
          icon="basil:bag-solid"
          quantity="12+"
          type="Invitation to Tender"
          color="#605BFF" // Couleur personnalisée pour la carte "Invitation to Tender"
        />
      </div>
    </div>
  );
}
