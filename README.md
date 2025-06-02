## 🚀 Postly - A Modern Medium Clone

**Postly** is a clean, user-friendly blogging platform inspired by Medium that allows users to create, edit, 
and review posts seamlessly. Built with a modern JavaScript stack, Postly focuses on simplicity, usability, 
and responsiveness.

---

## ✨ Features

* 📝 Create, edit, and delete blog posts with rich content
* 🧾 Add and delete reviews/comments under posts with ratings
* 🔐 Secure user authentication with registration, login, and logout
* 🎨 Responsive UI built with Bootstrap 5 for a smooth experience on most devices (currently rated 6/10; UI improvements ongoing)
* ✅ input validation on both frontend and backend (Joi)
* ⚠️ Custom error handling and user-friendly flash messages
* 📂 Image uploads with Cloudinary integration for post thumbnails
* 🔄 Session and redirect management for better user flow

---

## 🛠️ Technology Stack

* **Backend:** Node.js, Express.js
* **Templating:** EJS for server-side rendering
- **Database:** MongoDB Atlas (cloud-hosted)
* **Authentication:** Passport.js (local strategy)
* **Styling:** Bootstrap 5, custom CSS (UI and responsiveness currently being improved)
* **File Uploads:** Multer + Cloudinary
* **Additional:** Connect-flash for flash messaging, Express-session for sessions

---

## 🚀 Live Demo

Check out Postly in action: [https://your-live-link.com](https://your-live-link.com)

---

## 📦 Installation & Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/Postly.git
   ```

3. Navigate to the project directory:

   ```bash
   cd Postly
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Create a `.env` file and add your environment variables:

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_api_key
   CLOUDINARY_SECRET=your_api_secret
   DB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   ```

6. Run the app locally:

   ```bash
   npm start
   ```

7. Open your browser and go to: `http://localhost:1000`


---

## 🔮 Future Roadmap

* Enhance UI design and overall visual polish
* Improve responsiveness for all device sizes and orientations
* Add dark mode support
* Implement advanced features like post tagging, likes, and bookmarks

---

## 🤝 Contribution

Contributions are welcome! Feel free to submit issues or pull requests for bug fixes, improvements, or new features.

---
