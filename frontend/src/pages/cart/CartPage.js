import { CartList } from "../cart/components/CartList";
import { CartEmpty } from "../cart/components/CartEmpty";
import { useCart } from "../../components/Context/CartContext";
import { useTitle } from "../../hook/useTitle";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);

  return (
    <main className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
      <section>
        {cartList.length > 0 ? <CartList /> : <CartEmpty />}
      </section>
    </main>
  );
};
