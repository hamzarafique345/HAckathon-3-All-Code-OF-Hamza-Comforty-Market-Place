
// "use client";

// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { useCart } from "../context/cardContext";  // Assuming you're using a cart context to manage state
// import { client } from "../../../sanity/lib/client"; // Sanity client to send data to the backend
// import Image from "next/image";

// export default function CheckoutPage() {
//   const { state, dispatch } = useCart();
//   const [formData, setFormData] = useState({
//     customerName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     zipCode: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [orderSuccess, setOrderSuccess] = useState(false);

//   const handleSubmitOrder = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Check if all fields are filled
//     const isFormValid = Object.values(formData).every((field) => field.trim() !== "");
//     if (!isFormValid) {
//       alert("Please fill in all the fields before placing the order.");
//       setIsSubmitting(false);
//       return;
//     }

//     // Assuming you're checking availability somewhere else in the code,
//     // so we'll skip the out of stock check and proceed to success
//     const orderItems = state.items.map((item) => ({
//       _key: uuidv4(),
//       slug: (item.slug as unknown as { current: string }).current ? (item.slug as unknown as { current: string }).current : item.slug,
//       title: item.title,
//       price: item.price,
//       quantity: item.quantity,
//       imageUrl: item.imageUrl,
//       size: item.size || "N/A",
//       description: item.description,
//     }));

//     const totalAmount = state.items.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );

//     const orderData = {
//       _type: "order",
//       ...formData,
//       items: orderItems,
//       totalAmount,
//       status: "pending",
//       orderDate: new Date().toISOString(),
//     };

//     try {
//       await client.create(orderData);
//       setOrderSuccess(true);
//       dispatch({ type: "CLEAR_CART" });  // Clear cart after successful order
//       setFormData({
//         customerName: "",
//         email: "",
//         phone: "",
//         address: "",
//         city: "",
//         zipCode: "",
//       });
//     } catch (error) {
//       console.error("Order submission failed:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         Checkout
//       </h1>

//       {/* Order Summary */}
//       <div className="mb-10">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//           Order Summary
//         </h2>
//         <table className="w-full table-auto border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
//               <th className="p-3 text-left">Product</th>
//               <th className="p-3 text-left">Quantity</th>
//               <th className="p-3 text-left">Price</th>
//               <th className="p-3 text-left">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {state.items.map((item, index) => (
//               <tr key={index} className="bg-white border-b hover:bg-gray-50">
//                 <td className="p-3 flex items-center">
//                   <Image
//                     src={item.imageUrl}
//                     alt={item.title}
//                     className="w-14 h-14 object-cover rounded-lg mr-4"
//                     width={1000}
//                     height={1000}
//                   />
//                   <span className="text-gray-800">{item.title}</span>
//                 </td>
//                 <td className="p-3">{item.quantity}</td>
//                 <td className="p-3">${item.price}</td>
//                 <td className="p-3 font-semibold text-gray-800">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="mt-6 text-right">
//           <p className="text-xl font-semibold">
//             <span>Total Amount: </span>
//             <span className="text-blue-600">
//               $ {state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* Billing Information Form */}
//       <form
//         onSubmit={handleSubmitOrder}
//         className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-inner"
//       >
//         <h2 className="text-2xl font-semibold text-gray-700">
//           Customer Details
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input
//             type="text"
//             placeholder="Customer Name"
//             value={formData.customerName}
//             onChange={(e) =>
//               setFormData({ ...formData, customerName: e.target.value })
//             }
//             className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input
//             type="tel"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={(e) =>
//               setFormData({ ...formData, phone: e.target.value })
//             }
//             className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="text"
//             placeholder="City"
//             value={formData.city}
//             onChange={(e) =>
//               setFormData({ ...formData, city: e.target.value })
//             }
//             className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <textarea
//           placeholder="Address"
//           value={formData.address}
//           onChange={(e) =>
//             setFormData({ ...formData, address: e.target.value })
//           }
//           className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <input
//           type="text"
//           placeholder="Zip Code"
//           value={formData.zipCode}
//           onChange={(e) =>
//             setFormData({ ...formData, zipCode: e.target.value })
//           }
//           className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full py-3 rounded-lg text-white font-semibold transition ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
//         >
//           {isSubmitting ? "Submitting..." : "Place Order"}
//         </button>
//       </form>

//       {/* Order Success Message */}
//        {orderSuccess && (
//         <p className="mt-6 text-center text-green-600 text-lg font-semibold">
//           Your Order was successfully placed!
//         </p>
//       )} 

      
//       {orderSuccess && (
//   <div className="mt-6 text-center">
//     <p className="text-green-600 text-lg font-semibold">
//       Your Order was successfully placed!
//     </p>
//     <p className="mt-2 text-gray-700">
//       Your Order ID is: {createdOrderId}
//     </p>
//     <p className="text-gray-600">
//       Please keep this ID for tracking your order.
//     </p>
//   </div>
// )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../context/cardContext";  
import { client } from "../../../sanity/lib/client"; 
import Image from "next/image";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { useRouter } from "next/navigation"; // Import useRouter

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [createdOrderId, setCreatedOrderId] = useState(""); // Store order ID

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isFormValid = Object.values(formData).every((field) => field.trim() !== "");
    if (!isFormValid) {
      toast.error("Please fill in all the fields before placing the order.");
      setIsSubmitting(false);
      return;
    }

    const orderItems = state.items.map((item) => ({
      _key: uuidv4(),
      slug: (item.slug as unknown as { current: string }).current 
        ? (item.slug as unknown as { current: string }).current 
        : item.slug,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      imageUrl: item.imageUrl,
      size: item.size || "N/A",
      description: item.description,
    }));

    const totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

    const orderData = {
      _type: "order",
      ...formData,
      items: orderItems,
      totalAmount,
      status: "pending",
      orderDate: new Date().toISOString(),
    };

    try {
      const createdOrder = await client.create(orderData);
      setCreatedOrderId(createdOrder._id); // Store the order ID
      setOrderSuccess(true);
      dispatch({ type: "CLEAR_CART" });
      setFormData({
        customerName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
      });
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Order submission failed:", error);
      toast.error("Order submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Checkout
      </h1>

      {/* Order Summary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Order Summary
        </h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {state.items.map((item, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="p-3 flex flex-col  sm:flex-row items-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-lg mr-4"
                    width={1000}
                    height={1000}
                  />
                  <span className="text-gray-800">{item.title}</span>
                </td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">${item.price}</td>
                <td className="p-3 font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-right">
          <p className="text-xl font-semibold">
            <span>Total Amount: </span>
            <span className="text-blue-600">
              $ {state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      {/* Billing Information Form */}
      <form
        onSubmit={handleSubmitOrder}
        className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-inner"
      >
        <h2 className="text-2xl font-semibold text-gray-700">
          Customer Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Customer Name" value={formData.customerName}
            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input type="email" placeholder="Email" value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="tel" placeholder="Phone" value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input type="text" placeholder="City" value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
                 <input
           type="text"
           placeholder="Zip Code"
           value={formData.zipCode}
           onChange={(e) =>
             setFormData({ ...formData, zipCode: e.target.value })
           }
        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
        </div>

        <textarea placeholder="Address" value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button type="submit" disabled={isSubmitting}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {isSubmitting ? "Submitting..." : "Place Order"}
        </button>
      </form>

      {/* Track Order Button */}
      {orderSuccess && (
  <div className="flex flex-col items-center">
    <button
      onClick={() => router.push('/trackorder')}
      className="mt-6 py-3 px-8 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
    >
      Track Order
    </button>
    <h1 className="text-center py-3 text-lg font-medium">
      Your Order ID: <span className="font-bold">{createdOrderId}</span>
    </h1>
  </div>
)}

    </div>
  );
}
