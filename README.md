# React Vite Image Gallery
A simple image gallery with infinite scroll and modal preview, built using React and Vite.

# Features
- Infinite scroll loading (Fetch more images when scrolling)
- Responsive grid layout (3 columns for desktop, 2 for tablets, 1 for mobile)
- Modal view with image details
- Loading states and animations
- Error handling
- Download button for images

# Installation

1. Clone this repository:
   git clone https://github.com/bbeer674/image-gallery.git
   cd image-gallery

2. Install dependencies:
   npm install


3. Start development server:
   npm run dev

# Tech Stack
- React.js + Vite
- Tailwind CSS
- Axios (For API requests)

# API Used
- [Picsum Photos API](https://picsum.photos/)
  - Endpoint: `https://picsum.photos/v2/list?page=1&limit=9`