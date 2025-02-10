

// // // "use client";

// // // import { useState } from "react";
// // // import { client } from "../../../sanity/lib/client";
// // // import Image from "next/image";

// // // export default function TrackOrderPage() {
// // //   const [searchInput, setSearchInput] = useState("");
// // //   const [order, setOrder] = useState<any>(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");



// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (!searchInput) {
// // //       setError("Please enter an email or phone number.");
// // //       return;
// // //     }
    
// // //     setLoading(true);
// // //     setError("");

// // //     try {
// // //       const query = `*[_type == "order" && (email == $searchInput || phone == $searchInput)][0] {
// // //         _id,
// // //         customerName,
// // //         email,
// // //         phone,
// // //         status,
// // //         orderDate,
// // //         totalAmount,
// // //         items[] {
// // //           title,
// // //           quantity,
// // //           price,
// // //           size,
// // //           imageUrl,
// // //           description
// // //         }
// // //       }`;

// // //       const params = { searchInput };
// // //       const result = await client.fetch(query, params);

// // //       if (result) {
// // //         setOrder(result);
// // //       } else {
// // //         setError("No order found with the provided details.");
// // //       }
// // //     } catch (err) {
// // //       setError("Failed to fetch order. Please try again.");
// // //       console.error(err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
// // //       <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>
      
// // //       <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-inner">
// // //         <div className="grid grid-cols-1 gap-6">
// // //           <input
// // //             type="text"
// // //             placeholder="Enter your email or phone number"
// // //             value={searchInput}
// // //             onChange={(e) => setSearchInput(e.target.value)}
// // //             className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             required
// // //           />
// // //         </div>
        
// // //         <button
// // //           type="submit"
// // //           disabled={loading}
// // //           className={`w-full py-3 rounded-lg text-white font-semibold transition ${
// // //             loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
// // //           }`}
// // //         >
// // //           {loading ? "Searching..." : "Track Order"}
// // //         </button>
        
// // //         {error && <p className="text-red-500 text-center">{error}</p>}
// // //       </form>

// // //       {order && (
// // //         <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-inner">
// // //           <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
// // //           <div className="space-y-4">
// // //             <p><span className="font-semibold">Order ID:</span> {order._id}</p>
// // //             <p><span className="font-semibold">Status:</span> <span className="capitalize">{order.status}</span></p>
// // //             <p><span className="font-semibold">Order Date:</span> {new Date(order.orderDate).toLocaleDateString()}</p>
// // //             <p><span className="font-semibold">Total Amount:</span> ${order.totalAmount.toFixed(2)}</p>

// // //             <h3 className="text-xl font-semibold mt-6">Items:</h3>
// // //             <div className="space-y-4">
// // //               {order.items.map((item: any, index: number) => (
// // //                 <div key={index} className="border-b pb-4">
// // //                   <div className="flex items-center gap-4">
// // //                     <Image
// // //                       src={item.imageUrl}
// // //                       alt={item.title}
// // //                       width={80}
// // //                       height={80}
// // //                       className="w-20 h-20 object-cover rounded-lg"
// // //                     />
// // //                     <div>
// // //                       <p className="font-semibold">{item.title}</p>
// // //                       <p>Quantity: {item.quantity}</p>
// // //                       <p>Price: ${item.price.toFixed(2)}</p>
// // //                       {item.size && <p>Size: {item.size}</p>}
// // //                       {item.description && <p className="text-gray-600">{item.description}</p>}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useState } from "react";
// // import { client } from "../../../sanity/lib/client";
// // import Image from "next/image";

// // interface OrderItem {
// //   title: string;
// //   quantity: number;
// //   price: number;
// //   size?: string;
// //   imageUrl: string;
// //   description?: string;
// // }

// // interface Order {
// //   _id: string;
// //   customerName: string;
// //   email: string;
// //   phone: string;
// //   status: string;
// //   orderDate: string;
// //   totalAmount: number;
// //   items: OrderItem[];
// // }

// // export default function TrackOrderPage() {
// //   const [searchInput, setSearchInput] = useState<string>("");
// //   const [order, setOrder] = useState<Order | null>(null);
// //   const [loading, setLoading] = useState<boolean>(false);
// //   const [error, setError] = useState<string>("");

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!searchInput.trim()) {
// //       setError("Please enter an email or phone number.");
// //       return;
// //     }
    
// //     setLoading(true);
// //     setError("");

// //     try {
// //       const query = `*[_type == "order" && (email == $searchInput || phone == $searchInput)][0] {
// //         _id,
// //         customerName,
// //         email,
// //         phone,
// //         status,
// //         orderDate,
// //         totalAmount,
// //         items[] {
// //           title,
// //           quantity,
// //           price,
// //           size,
// //           imageUrl,
// //           description
// //         }
// //       }`;

// //       const params = { searchInput };
// //       const result: Order | null = await client.fetch(query, params);

// //       if (result) {
// //         setOrder(result);
// //       } else {
// //         setError("No order found with the provided details.");
// //       }
// //     } catch (err) {
// //       setError("Failed to fetch order. Please try again.");
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
// //       <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>
      
// //       <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-inner">
// //         <input
// //           type="text"
// //           placeholder="Enter your email or phone number"
// //           value={searchInput}
// //           onChange={(e) => setSearchInput(e.target.value)}
// //           className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           required
// //         />
        
// //     <button
// //           type="submit"
// //           disabled={loading}
// //           className={`w-full py-3 mt-10 rounded-lg text-white font-semibold transition ${
// //             loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
// //           }`}
// //         >
// //           {loading ? "Searching..." : "Track Order"}
// //         </button>
        
// //         {error && <p className="text-red-500 text-center">{error}</p>}
// //       </form>

// //       {order && (
// //         <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-inner">
// //           <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
// //           <p><span className="font-semibold">Order ID:</span> {order._id}</p>
// //           <p><span className="font-semibold">Status:</span> <span className="capitalize">{order.status}</span></p>
// //           <p><span className="font-semibold">Order Date:</span> {new Date(order.orderDate).toLocaleDateString()}</p>
// //           <p><span className="font-semibold">Total Amount:</span> ${order.totalAmount.toFixed(2)}</p>

// //           <h3 className="text-xl font-semibold mt-6">Items:</h3>
// //           <div className="space-y-4">
// //             {order.items.map((item, index) => (
// //               <div key={index} className="border-b pb-4">
// //                 <div className="flex items-center gap-4">
// //                   <Image
// //                     src={item.imageUrl}
// //                     alt={item.title}
// //                     width={80}
// //                     height={80}
// //                     className="w-20 h-20 object-cover rounded-lg"
// //                   />
// //                   <div>
// //                     <p className="font-semibold">{item.title}</p>
// //                     <p>Quantity: {item.quantity}</p>
// //                     <p>Price: ${item.price.toFixed(2)}</p>
// //                     {item.size && <p>Size: {item.size}</p>}
// //                     {item.description && <p className="text-gray-600">{item.description}</p>}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import { client } from "../../../sanity/lib/client";
// import Image from "next/image";

// interface OrderItem {
//   title: string;
//   quantity: number;
//   price: number;
//   size?: string;
//   imageUrl: string;
//   description?: string;
// }

// interface Order {
//   _id: string;
//   customerName: string;
//   email: string;
//   phone: string;
//   status: string;
//   orderDate: string;
//   totalAmount: number;
//   items: OrderItem[];
// }

// export default function TrackOrderPage() {
//   const [orderId, setOrderId] = useState<string>(""); // Change variable name to orderId
//   const [order, setOrder] = useState<Order | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!orderId.trim()) {
//       setError("Please enter a valid Order ID.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const query = `*[_type == "order" && _id == $orderId][0] {
//         _id,
//         customerName,
//         email,
//         phone,
//         status,
//         orderDate,
//         totalAmount,
//         items[] {
//           title,
//           quantity,
//           price,
//           size,
//           imageUrl,
//           description
//         }
//       }`;

//       const params = { orderId };
//       const result: Order | null = await client.fetch(query, params);

//       if (result) {
//         setOrder(result);
//       } else {
//         setError("No order found with the provided Order ID.");
//       }
//     } catch (err) {
//       setError("Failed to fetch order. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>

//       <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-inner">
//         <input
//           type="text"
//           placeholder="Enter your Order ID"
//           value={orderId}
//           onChange={(e) => setOrderId(e.target.value)}
//           className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg text-white font-semibold transition ${
//             loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Searching..." : "Track Order"}
//         </button>

//         {error && <p className="text-red-500 text-center">{error}</p>}
//       </form>

//       {order && (
//         <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-inner">
//           <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
//           <p><span className="font-semibold">Order ID:</span> {order._id}</p>
//           <p><span className="font-semibold">Status:</span> <span className="capitalize">{order.status}</span></p>
//           <p><span className="font-semibold">Order Date:</span> {new Date(order.orderDate).toLocaleDateString()}</p>
//           <p><span className="font-semibold">Total Amount:</span> ${order.totalAmount.toFixed(2)}</p>

//           <h3 className="text-xl font-semibold mt-6">Items:</h3>
//           <div className="space-y-4">
//             {order.items.map((item, index) => (
//               <div key={index} className="border-b pb-4">
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src={item.imageUrl}
//                     alt={item.title}
//                     width={80}
//                     height={80}
//                     className="w-20 h-20 object-cover rounded-lg"
//                   />
//                   <div>
//                     <p className="font-semibold">{item.title}</p>
//                     <p>Quantity: {item.quantity}</p>
//                     <p>Price: ${item.price.toFixed(2)}</p>
//                     {item.size && <p>Size: {item.size}</p>}
//                     {item.description && <p className="text-gray-600">{item.description}</p>}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";

interface OrderItem {
  title: string;
  quantity: number;
  price: number;
  size?: string;
  imageUrl: string;
  description?: string;
}

interface Order {
  _id: string;
  customerName: string;
  email: string;
  phone: string;
  status: string;
  orderDate: string;
  totalAmount: number;
  items: OrderItem[];
}

export default function TrackOrderPage() {
  const [input, setInput] = useState<string>(""); // One input field for ID, Email, or Phone
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Please enter Order ID, Email, or Phone Number.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const query = `*[_type == "order" && (_id == $input || email == $input || phone == $input)][0] {
        _id,
        customerName,
        email,
        phone,
        status,
        orderDate,
        totalAmount,
        items[] {
          title,
          quantity,
          price,
          size,
          imageUrl,
          description
        }
      }`;

      const params = { input };
      const result: Order | null = await client.fetch(query, params);

      if (result) {
        setOrder(result);
      } else {
        setError("No order found with the provided details.");
      }
    } catch (err) {
      setError("Failed to fetch order. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-inner">
        {/* Single Input for Order ID, Email, or Phone */}
        <input
          type="text"
          placeholder="Enter Order ID, Email, or Phone Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 mt-6 rounded-lg text-white font-semibold transition ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Searching..." : "Track Order"}
        </button>
        
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>

      {/* Order Details */}
      {order && (
        <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
          <p><span className="font-semibold">Order ID:</span> {order._id}</p>
          <p><span className="font-semibold">Status:</span> <span className="capitalize">{order.status}</span></p>
          <p><span className="font-semibold">Order Date:</span> {new Date(order.orderDate).toLocaleDateString()}</p>
          <p><span className="font-semibold">Total Amount:</span> ${order.totalAmount.toFixed(2)}</p>

          <h3 className="text-xl font-semibold mt-6">Items:</h3>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    {item.size && <p>Size: {item.size}</p>}
                    {item.description && <p className="text-gray-600">{item.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
