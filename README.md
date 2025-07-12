# AbinayaTask-3
✨ Real-Time Collaborative Editor

This project is a **live, synchronized collaborative text editor** built with **Node.js**, **Express.js**, and **Socket.IO**. It allows multiple users to edit text **simultaneously in real time**, demonstrating WebSocket-based communication.

---

 🚀 Features

*  Real-time multi-user editing
  * Attractive glassmorphism UI with gradient background
*  Built using **Socket.IO** for WebSocket communication
*  Responsive design for all devices

---

🛠️ Technologies Used

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **WebSocket Library:** Socket.IO

---

 📁 Project Structure

```
collab-tool/
 ├── public/
 │    ├── index.html
 │    ├── script.js
 │    └── style.css
 ├── package.json
 ├── package-lock.json
 └── server.js


 ⚙️ Installation & Running Locally

1. **Clone the repository**

   ```bash
   git clone <your-repo-link>
   cd collab-tool
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the server**

   ```bash
   node server.js
   ```

4. **Open the app**

   * Visit [http://localhost:3000](http://localhost:3000)
   * Open in **multiple tabs or devices** to test real-time updates



✏️ How It Works

* Users type in the editor.
* Changes are emitted to the server using Socket.IO.
* The server broadcasts updates to all connected clients instantly.



💡 Future Enhancements

* Add user authentication
* Create a collaborative whiteboard
* Save and load documents from a database

 📜 License

This project is licensed under **ISC License**.

