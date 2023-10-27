import { Routes, Route } from 'react-router-dom';

/*user&admin*/
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Favorites } from '../pages/Favorites';
import { Orders } from '../pages/Orders';
import { OrderHistory } from '../pages/OrderHistory';
import { CheckoutRedirect } from '../pages/CheckoutRedirect';

/*admin*/
import { EditProduct } from '../pages/EditProduct';
import { NewProduct } from '../pages/NewProduct';

export function AppRoutes({toggleTheme, currentTheme}) {
  return (
    <Routes>
      <Route path="/" element={<Home toggleTheme={toggleTheme} currentTheme={currentTheme} />}/>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new_product" element={<NewProduct />} />
      <Route path="/edit_product/:id" element={<EditProduct />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/order_history" element={<OrderHistory />} />
      <Route path="/checkout/:response/:id" element={<CheckoutRedirect />} />
    </Routes>
  );
};