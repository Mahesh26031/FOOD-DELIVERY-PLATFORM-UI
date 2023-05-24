import React from "react";
import { OrdersData } from "../components/OrderHistory/OrdersData";
import OrderHistory from "../components/OrderHistory/OrderHistory";

function OrderHistoryPage() {
  return (
    <div className="orders">
      <h1>Food Orders</h1>
      <ul>
        {OrdersData.map((order) => {
          return (
            <li key={order}>
              <OrderHistory orderData={order} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OrderHistoryPage;
