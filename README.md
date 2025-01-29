# Comforty Furniture Website System Architecture

## Overview
Comforty is an e-commerce platform specializing in stylish and comfortable chairs for various needs. The platform is built using **Next.js 15 with TypeScript** for optimal performance and **Sanity CMS** to manage content seamlessly. This document outlines the system architecture designed for scalability, maintainability, and a superior user experience.

---

## System Overview

### **Key Pages**
- **Home:** Showcases featured chair categories, trending products, and ongoing promotions.
- **Product Listing:** Displays all chair collections with filtering options (e.g., by type, material, price).
- **Product Details:** Dynamic page for individual chair details, including images, descriptions, and reviews.
- **Cart:** Shows selected products, allowing users to adjust quantities and view order summaries.
- **Checkout:** Securely handles payment and shipping information.
- **Order Confirmation:** Displays purchase confirmation and order details.

# E-Commerce Website Development Plan

## Day 1: Business Planning & Structure Definition
- Define business model, target audience, and unique selling points.
- Finalize product categories and chair types.
- Outline key website features:
  - Filtering options
  - Checkout flow
- Create a project roadmap with clear milestones.

## Day 2: System Architecture & API Integration with Sanity
- Set up a **Next.js 14** project with **TypeScript**.
- Install and configure **Sanity CMS**.
- Define and create **Sanity schemas**:
  - **Products** (name, price, stock, material, images)
  - **Orders** (order status, payment details, shipping info)
  - **Users** (login credentials, order history)
- Test **basic API integration (GROQ queries)** to fetch data.

## Day 3: Fetch Data & Implement Frontend Pages
- Build core frontend pages:
  - **Homepage** (featured products, trending chairs)
  - **Product Listing** (category filters, price sorting)
  - **Product Details** (reviews, descriptions, images)
- Fetch data dynamically from **Sanity CMS**.
- Ensure a **seamless user experience** with smooth navigation.

## Day 4: Cart & Checkout Integration
- Implement **cart functionality**:
  - Local storage for guest users
  - Database sync for logged-in users
  - Securely collect and process payments.
  - Handle **order confirmation **.
- Implement **checkout page with form validation**.

## Day 5: Testing & Bug Fixing
- Perform **functional testing** to ensure API data flows correctly.
- Test **payment processing and order placements**.
- Check **responsiveness** across mobile, tablet, and desktop.
- Fix **UI/UX bugs** and refine user experience.

## Day 6: Deployment & GitHub Upload
- Push the code to **GitHub** with a well-structured repository.
- Deploy the website on **Vercel** for production.
- Verify all features are working after deployment.
- Perform **final testing** on the live version.

## Day 7: Documentation & Resume Enhancement
- Write **professional documentation**, including:
  - Project overview
  - Technologies used
  - API structure
  - Deployment steps
- Update resume to showcase:
  - **Next.js, TypeScript, Sanity CMS, Stripe, Shippo API** skills.
  - **E-commerce development experience**.

## High-Level System Architecture

### **Frontend Structure**
- **Framework:** Next.js 14 with TypeScript for fast Server-Side Rendering (SSR) and dynamic routing.
- **Hosting:** Deployed on **Vercel** for speed and reliability.

---



## **Reusable Components**
- `ProductCard.tsx`: Renders chair details (image, name, price, label, etc.) across pages.
- `HeroSection.tsx`, `PopularProducts.tsx`: Key homepage sections highlighting Comforty’s unique offerings.
- `Filters.tsx`: Provides sorting options for the product listing page.
- `CheckoutModal.tsx`: Securely collects payment and shipping information.

---

## **CMS (Sanity)**
Sanity Studio is used for backend content management.

### **Schemas**
- **Products:** Name, price, stock, materials, dimensions, and images.
- **Customers:** Stores login credentials, order history, and saved items.
- **Orders:** Tracks purchased products, payment status, and shipping information.
- **Inventory:** Manages product availability in real time.

### **Data Management Features**
- **Custom Schemas:** Structured to handle chairs, orders, and user data efficiently.
- **GROQ Queries:** Fetches real-time product and inventory data for seamless frontend updates.

---

## **Third-Party API Integrations**
### **Payment Gateway (Stripe)**
- Handles secure payment transactions.
- Supports credit/debit cards and digital wallets.
- Uses Custum Process for collecting and validating payment details.


### **API Endpoints**
- `/api/products`: List available products.
- `/api/shipment`: Create and manage shipments.



## **Workflow Overview**
### **User Workflow**
1. **Browse Products**  
   - Users view products dynamically fetched from Sanity via APIs.  
   - Filters allow refined browsing by type, material, and price.  

2. **Add to Cart**  
   - Users add chairs to their cart, stored locally or synced to their profile after login.  

3. **Checkout Process**  
   - `CheckoutModal.tsx` securely collects payment and shipping information.  
   - Stripe processes transactions.  

4. **Order Confirmation
   - Users receive an order summary.  
 

---


## **Data Flow**
- **Products:** Fetched from **Sanity CMS** and displayed dynamically.
- **Cart:** Items stored in local storage or synced to user profile.
- **Orders:** Stored in **Sanity CMS**, accessible by users.
- **Shipments:** Managed using **Shippo AP** for real-time tracking.

---

## **Conclusion**
Comforty is designed to provide a seamless shopping experience with fast performance, a well-structured CMS, and secure payment and shipment tracking systems. This system architecture ensures scalability, maintainability, and a superior user experience.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
