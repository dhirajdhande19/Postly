const sample = [
  {
    "title": "How to Master JavaScript in 10 Days",
    "content": "Mastering JavaScript in 10 days is an ambitious but achievable goal if you approach it with focus and a well-structured plan. \n JavaScript is the backbone of web development, powering dynamic and interactive websites, so gaining proficiency rapidly can open many doors. \n Start by understanding the basics: data types, variables, functions, and control flow such as loops and conditionals.\n  Dedicate the first couple of days to these fundamentals to build a solid foundation.\n\nNext, dive into more advanced topics like objects, arrays, and DOM manipulation.\n Practice by building small projects like a to-do list or a calculator to apply these concepts. \n \n \n Days 4 to 6 should focus on asynchronous JavaScript — promises, async/await, and callbacks — since most real-world applications rely on asynchronous operations.\n\nDay 7 can be dedicated to ES6+ features, including arrow functions, template literals, destructuring, and modules.\n  These modern JavaScript features make code cleaner and more efficient.\n\nOn days 8 and 9, explore browser APIs, event handling, and error handling to understand how JavaScript interacts with the web environment. \n \n Finally, spend day 10 building a mini project combining everything you've learned — this could be a weather app fetching data from an API or a simple chat interface.\n \n\nConsistency is key. Spend 2-3 focused hours daily practicing coding challenges, reading documentation, and experimenting with your own projects. \n \n Use resources like MDN Web Docs, freeCodeCamp, and JavaScript tutorials on YouTube. By the end of 10 days, you'll have a strong grasp of JavaScript fundamentals and be ready to tackle more complex projects.",
    "subtitle": "A practical 10-day roadmap to master JavaScript from basics to advanced concepts.",
    "publishedAt": "2025-05-30T10:00:00Z",
    "claps": 250,
    "commentsCount": 12,
    "imageUrl": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Understanding Asynchronous JavaScript",
    "content": "Asynchronous JavaScript is essential for creating smooth, responsive web applications. Unlike synchronous code, which runs sequentially, asynchronous code allows JavaScript to perform tasks without blocking the main thread. This means your app can fetch data, handle timers, or respond to user actions while continuing to run other code.\n\nThe core concepts include callbacks, promises, and async/await. Callbacks are functions passed as arguments to other functions and executed once an asynchronous operation completes. While useful, callbacks can lead to 'callback hell,' where nested callbacks become hard to read and maintain.\n\nPromises provide a cleaner way to handle asynchronous operations. A promise represents a value that may be available now, later, or never. Promises have three states: pending, fulfilled, or rejected. They allow chaining with `.then()` and `.catch()` methods for success and error handling respectively.\n\nAsync/await, introduced in ES2017, simplifies working with promises by allowing you to write asynchronous code that looks synchronous. The `async` keyword marks a function as asynchronous, and the `await` keyword pauses execution until the promise resolves.\n\nUnderstanding these concepts helps you manage API calls, timers, and other asynchronous events efficiently, resulting in faster and more responsive user experiences.",
    "subtitle": "Learn asynchronous JavaScript concepts and improve your coding flow.",
    "publishedAt": "2025-04-20T09:30:00Z",
    "claps": 180,
    "commentsCount": 8,
    "imageUrl": "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "CSS Grid vs Flexbox: When to Use Which",
    "content": "CSS Grid and Flexbox are two powerful layout systems in CSS. Each has its strengths, and understanding when to use which can elevate your design skills. Flexbox is best for one-dimensional layouts—either row or column. It shines when you're aligning items along a single axis, such as horizontal navigation bars, form inputs, or buttons in a row.\n\nCSS Grid, on the other hand, is perfect for two-dimensional layouts. You can define both rows and columns and place items precisely in grid cells. It's ideal for complex page structures, dashboards, or magazine-style layouts.\n\nWhen designing a layout, ask yourself: do I need to control both row and column placement? If yes, go with Grid. Do I need items to wrap or align in one direction? Flexbox is the better choice. Another difference is that Grid layouts require defining a full grid structure in advance, whereas Flexbox adjusts items on the fly.\n\nBoth systems can be combined—use Grid for the overall layout and Flexbox for smaller sections inside. For example, you can design a grid of cards and use Flexbox within each card to align content. Practice both systems and experiment to understand their nuances. Modern browsers support both well, so you can confidently use them in production.",
    "subtitle": "A detailed comparison between CSS Grid and Flexbox for responsive design.",
    "publishedAt": "2025-03-15T14:00:00Z",
    "claps": 300,
    "commentsCount": 15,
    "imageUrl": "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Building REST APIs with Node.js and Express",
    "content": "REST APIs are fundamental to web development. They allow clients to interact with servers over HTTP using standard methods like GET, POST, PUT, and DELETE. Node.js, with the Express.js framework, makes building REST APIs straightforward and efficient.\n\nStart by setting up a Node.js project using `npm init`, then install Express with `npm install express`. Create a basic Express server using `app.listen()` and define routes using `app.get()`, `app.post()`, etc. REST APIs follow a resource-based approach, so you might have routes like `/users`, `/posts`, or `/products`.\n\nEach route should handle specific operations: `GET /users` fetches all users, `POST /users` creates a new one, `PUT /users/:id` updates, and `DELETE /users/:id` removes a user. You can use `req.params` and `req.body` to access route parameters and form data.\n\nMiddleware like `express.json()` helps parse incoming JSON. Add error handling, logging, and data validation using libraries like Joi or middleware functions. To persist data, integrate a database like MongoDB using Mongoose.\n\nREST APIs built with Express are modular and scalable. Use routers to split routes by domain, add authentication, and test with tools like Postman or Thunder Client. Once complete, deploy your API to platforms like Heroku or Render. Learning to build REST APIs with Node and Express opens doors to full-stack development.",
    "subtitle": "Step-by-step tutorial for building REST APIs with popular backend tools.",
    "publishedAt": "2025-02-10T16:45:00Z",
    "claps": 220,
    "commentsCount": 20,
    "imageUrl": "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Introduction to MongoDB for Beginners",
    "content": "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. Unlike traditional relational databases that use rows and tables, MongoDB organizes data using collections and documents. This makes it a great choice for applications where data structure may evolve over time.\n\nTo get started with MongoDB, install MongoDB locally or use a cloud solution like MongoDB Atlas. Once set up, you can use the Mongo shell or tools like Compass for GUI-based interaction. MongoDB uses BSON (binary JSON) for storing data, which supports embedded documents and arrays.\n\nCreating a document in MongoDB is as simple as inserting an object into a collection: `{ name: 'Alice', age: 25 }`. MongoDB assigns each document a unique `_id`. You can perform operations like find, insert, update, and delete using simple JavaScript-like syntax.\n\nOne major advantage of MongoDB is schema flexibility. This means you can store documents with different structures in the same collection. While this provides agility, it’s important to design your schema based on the queries your app will perform.\n\nMongoDB is often used with Node.js applications via the Mongoose library, which allows defining schemas, validations, and relationships in a more structured way. Whether you're building a small blog or a large-scale app, MongoDB provides the scalability and performance needed for modern development.",
    "subtitle": "Get started with MongoDB and learn how it differs from traditional databases.",
    "publishedAt": "2025-01-25T11:15:00Z",
    "claps": 170,
    "commentsCount": 7,
    "imageUrl": "https://images.unsplash.com/photo-1658204238967-3a81a063d162?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Effective Debugging Techniques in JavaScript",
    "content": "Debugging is one of the most important yet overlooked skills in JavaScript development. It's what turns messy, broken code into polished applications. The first and most basic technique is `console.log()`. Use it to print variables and track execution flow.\n\nHowever, modern browsers provide much better tools—DevTools. Open Chrome DevTools (F12 or right-click → Inspect) and use the 'Sources' tab to set breakpoints in your code. Breakpoints let you pause execution and inspect the value of variables at that moment.\n\nAnother powerful tool is the debugger statement. Insert `debugger;` in your code to automatically pause execution when running in a debugger-enabled environment. This lets you step through code one line at a time.\n\nPay attention to error messages. JavaScript errors usually tell you what went wrong and where. Don't ignore them—read the stack trace, and start troubleshooting from the first error line.\n\nDivide and conquer. If your code is complex, comment out parts or isolate functionality into smaller functions. This helps you zero in on the problematic section.\n\nLastly, tools like ESLint can catch syntax and logic issues before they become bugs. Writing test cases (even simple ones) can also help identify where logic breaks. Debugging isn’t just fixing bugs—it’s understanding your code deeply. Mastering it will make you a much better developer.",
    "subtitle": "Improve your debugging skills with practical tips and tools.",
    "publishedAt": "2025-05-05T13:00:00Z",
    "claps": 195,
    "commentsCount": 10,
    "imageUrl": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Getting Started with Bootstrap 5",
    "content": "Bootstrap 5 is a powerful CSS framework that helps developers build responsive, mobile-first websites quickly. Unlike writing custom CSS from scratch, Bootstrap provides a grid system, components, and utilities to create clean and modern designs with less effort.\n\nTo start using Bootstrap 5, include its CDN links for CSS and JS in your HTML file or install it via npm. Bootstrap uses a 12-column grid layout system, which lets you design responsive layouts using classes like `col-md-6`, `col-lg-4`, etc.\n\nBootstrap 5 offers ready-to-use components like navbars, modals, buttons, cards, and forms. These components are fully responsive and customizable using utility classes. For example, you can change padding, margin, text color, or alignment using classes like `p-3`, `mb-4`, `text-center`, or `text-primary`.\n\nUnlike previous versions, Bootstrap 5 drops jQuery dependency, making it more lightweight and compatible with modern JavaScript workflows. The framework also introduces improved utilities API and enhanced form controls.\n\nCustomize Bootstrap with Sass if needed. You can override variables like colors, font sizes, and spacing. This allows you to create a unique brand identity while leveraging the power of a consistent design system.\n\nBootstrap 5 is perfect for rapid prototyping and production-ready apps. Whether you’re building a landing page or a full dashboard, Bootstrap speeds up development without compromising quality.",
    "subtitle": "An introduction to Bootstrap 5 for quick and responsive UI development.",
    "publishedAt": "2025-04-01T08:20:00Z",
    "claps": 160,
    "commentsCount": 5,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNQZYlf5mLG-qXogTV8NY0t_I_4ZEGuniTg&s"
  },
  {
    "title": "Top 10 JavaScript ES6 Features You Should Know",
    "content": "ES6 (ECMAScript 2015) introduced many new features that make JavaScript more powerful, readable, and maintainable. Knowing these features is essential for modern development.\n\n1. **Let & Const**: These offer block scope, unlike var, making variables safer.\n2. **Arrow Functions**: Shorter syntax and lexically bind `this`, useful in callbacks.\n3. **Template Literals**: Use backticks to create multiline strings and embed expressions: `${value}`.\n4. **Destructuring**: Extract values from arrays or objects in a cleaner way.\n5. **Default Parameters**: Set default values for function arguments.\n6. **Rest & Spread**: Easily gather or spread values using `...args` or `...obj`.\n7. **Enhanced Object Literals**: Shorthand for object properties and methods.\n8. **Promises**: Manage asynchronous operations more effectively than callbacks.\n9. **Modules (import/export)**: Structure code better by splitting it into files.\n10. **Classes**: Cleaner syntax for constructor functions and inheritance.\n\nThese features significantly reduce boilerplate and make code more expressive. For example, destructuring and template literals often eliminate the need for extra variables or string concatenation. Arrow functions simplify array methods like `map`, `filter`, and `reduce`.\n\nUnderstanding and applying ES6 features improves both performance and maintainability. Practice converting older code into ES6 to get comfortable. Modern browsers fully support these features, so there’s no reason not to use them in your projects.",
    "subtitle": "A concise guide to essential ES6 features for modern JavaScript coding.",
    "publishedAt": "2025-03-10T12:00:00Z",
    "claps": 280,
    "commentsCount": 18,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFaSBMQu4cTfPsig8urWgIH2JTJSXpg1D7Q&s"
  },
  {
    "title": "Deploying Your Node.js App to Heroku",
    "content": "Deploying your Node.js application to Heroku allows you to take your project live for the world to see. Heroku is a cloud platform that simplifies app deployment with minimal configuration.\n\nTo begin, make sure your project has a `package.json` file and a `Procfile`. The `Procfile` tells Heroku how to run your app—typically something like `web: node index.js`. Also, ensure your app listens on `process.env.PORT`, as Heroku assigns a dynamic port.\n\nNext, initialize a Git repository (if not already), commit your code, and create a Heroku app using the Heroku CLI: `heroku create your-app-name`. This command sets up a remote Git repository linked to your project.\n\nPush your code using `git push heroku main` (or `master`), and Heroku will automatically detect your Node.js app and install dependencies. Once deployed, you can visit the live site via the URL provided by Heroku.\n\nFor environment variables like API keys or database URIs, use `heroku config:set KEY=value` to set them securely. If you're using MongoDB, connect to a cloud database like MongoDB Atlas and add the connection string in your environment config.\n\nHeroku also provides easy scaling, logging, and rollback capabilities. Use `heroku logs --tail` to view real-time logs for debugging. Deploying to Heroku is beginner-friendly and perfect for hosting small to medium projects.",
    "subtitle": "A beginner-friendly guide to deploying Node.js apps on Heroku.",
    "publishedAt": "2025-02-28T15:30:00Z",
    "claps": 210,
    "commentsCount": 9,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLj9FZa1QJEzr36DdQNXQHc8b_WlRg6dKujQ&s"
  },
  {
    "title": "Understanding REST vs GraphQL APIs",
    "content": "REST and GraphQL are two approaches to designing APIs. REST uses separate endpoints for different resources, each mapped to HTTP methods like GET, POST, PUT, and DELETE. For example, `/users` might retrieve a list of users, while `/users/1` gets details of a specific user.\n\nGraphQL, on the other hand, allows clients to query exactly what they need from a single endpoint. It uses a schema and type system to define data structure, and queries are written in a structured syntax similar to JSON. Instead of over-fetching or under-fetching data, clients can tailor requests precisely.\n\nREST is simpler to implement and easier to cache using standard HTTP protocols. It’s widely adopted and works well for standard CRUD operations. However, it can lead to over-fetching (retrieving unnecessary fields) or under-fetching (missing nested data).\n\nGraphQL solves these issues with flexibility. But this comes with complexity—setting up a schema, resolver functions, and handling query costs can be tricky. GraphQL shines in frontend-heavy apps where data needs are dynamic.\n\nUse REST if you want quick implementation, strong caching, and simple requirements. Choose GraphQL when building complex UIs, reducing network calls, or managing interrelated data. Understanding both allows you to choose the right tool based on project needs.",
    "subtitle": "Explore the differences between REST and GraphQL APIs and their use cases.",
    "publishedAt": "2025-01-15T10:45:00Z",
    "claps": 230,
    "commentsCount": 14,
    "imageUrl": "https://blog.postman.com/wp-content/uploads/2023/12/GraphQL-vs-REST-1.jpg"
  }
]
;

module.exports = {data: sample};
