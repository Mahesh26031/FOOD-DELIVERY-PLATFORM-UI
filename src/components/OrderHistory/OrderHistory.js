import { AiFillStar } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import "./OrderHistory.css"

const OrderHistory = (props) => {
  let orderDate = props.orderData.orderDate;
  let orderTime = props.orderData.orderTime;
  let restaurantName = props.orderData.restaurantName;
  let rating = props.orderData.rating;
  let reviewsCount = props.orderData.reviewsCount;
  let deliveryTimeTaken = props.orderData.deliveryTimeTaken;
  let distance = props.orderData.distance;
  let items = props.orderData.items;
  let orderCost = props.orderData.orderCost;
  let orderStatus = props.orderData.orderStatus;

  return (
    <div className="grid-container">
      <h2>Order</h2>
      <div>
        {orderDate}, {orderTime}
      </div>
      <div>
        <div>{restaurantName}</div>
        <div>
          <AiFillStar color="orange" /> {rating}
          <GoPrimitiveDot color="grey" />
          {reviewsCount}k+ Reviews
        </div>
      </div>
      <div>Delivery Time {deliveryTimeTaken} Min</div>
      <div>Distance {distance} Km</div>
      <div>
        <div>Order Menu</div>
        <ul>
          {items.map((item) => {
            return (
              <li key={item}>
                <div>
                  <img src={item.itemImage} alt={item.itemName} />
                </div>
                <div>
                  {item.itemName} x{item.itemQuantity}
                </div>
                <div>+${item.itemCost}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>Total ${orderCost}</div>
      <div>{orderStatus}</div>
    </div>
  );
};

export default OrderHistory;
