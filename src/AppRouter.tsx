import { Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage/HomePage";
import CheckoutPage from "pages/CheckoutPage/CheckoutPage";
import RulesOfDelivery from "pages/RulesOfDelivery/RulesOfDelivery";
import Promotions from "pages/Promotions/Promotions";
import CartPage from "pages/CartPage/CartPage";
import ProductPage from "pages/ProductPage/ProductPage";
import PolicyPage from "pages/Policy/Policy";
import NotFoundPage from "pages/NotFoundPage";

export default function AppRouter() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				<Route path="/rulesofdelivery" element={<RulesOfDelivery />} />
				<Route path="/promotions" element={<Promotions />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/product" element={<ProductPage />} />
				<Route path="/checkout/policy" element={<PolicyPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}
