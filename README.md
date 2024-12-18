# shortJsProjects

## Short projects to improve javascript skills for interview positions
These projects assess various JavaScript skills, such as handling data structures, working with DOM events, asynchronous programming, error handling, and recursion. They also involve important tools and patterns, such as promise handling, storage, and dynamic rendering.

* Prompt GPT
create 10 instructions for projects for evaluating candidate in javascript, at an intermediate level. These projects should evaluate different aspects of javascript. you can see an exemple of project


## Projects

# 0.  Data Aggregator create CSV
The Product Team wants to export a csv of data about food delivery
We are receiving this data about food delivery as 2 different JSONs 
from an UNTRUSTED UNRELIABLE third party.
This is the first iteration of this feature.



The first is a list of orders
[
  {
   username: string;
   cardNumber: number;
   dishes: number[]; // the id of a dish
  },
   ...etc
]

The second is a array of dish id to some of its details
[
  {
     id: number
     name: string;
     cost: number;
  },
  ...etc
]

const orders = [
  { 
    username: "John Doe", 
    cardNumber: 1234, 
    dishes: [123,456] 
  }
];

const dishes = [
  {
    id: 123,
    name: 'Sushi', 
    cost: 12 
  }, 
  {
    id: 456,
    name: "Soup", 
    cost: 5 
  },
  {
    id: 987,
    name: "Pancakes", 
    cost: 7 
  }  
];

- [x] Construct a csv : The expected output should have the headers: username, cardNumber, dishes, cost
- [x] How to prevent untrusted unreliable third party to crash the program?


# 1. Data Aggregator for User Activity Log
Objective: Aggregate user activity data by extracting insights from a log. Instructions:

You are given a large list of user activities in JSON format:
[
  { "userId": 1, "activity": "login", "timestamp": "2024-11-21T08:30:00Z" },
  { "userId": 2, "activity": "purchase", "timestamp": "2024-11-21T09:45:00Z" },
  { "userId": 1, "activity": "logout", "timestamp": "2024-11-21T10:00:00Z" },
  ...
]

- [x] Write a function to group activities by userId and return an object where the key is the userId and the value is an array of activity logs.
- [x] Additionally, calculate the duration of each session by finding the difference between login and logout timestamps for each user.

# 2. Simple To-Do List with Local Storage
Objective: Implement a basic to-do list app with the ability to store tasks in localStorage. Instructions:

- [ ] Create a simple to-do list where the user can add and delete tasks.
- [ ] Use localStorage to save the list across sessions, so tasks persist even after page reloads.
- [ ] Implement a function to filter tasks based on their status (completed/incomplete).
- [ ] Bonus: Use JavaScript’s event delegation to handle clicks on dynamically added tasks.

# 3. Dynamic Form Validation
Objective: Create a dynamic form validation system. Instructions:

You are given a dynamic form where fields and validation rules can be specified via a configuration object:
[
  { "field": "email", "type": "email", "required": true },
  { "field": "password", "type": "password", "required": true, "minLength": 6 }
]
- [ ] Write a function that accepts this configuration and validates the form data.
- [ ] Ensure the validation returns appropriate error messages if the fields are invalid, e.g., "Email is required", "Password must be at least 6 characters".
- [ ] Bonus: Add support for custom validation rules (e.g., password strength).

# 4. Simple API Fetch with Retry Logic
Objective: Fetch data from an unreliable API with retry logic. Instructions:

- [ ] Write a function that fetches data from an API using fetch.
- [ ] If the request fails due to network issues or server errors (status codes 5xx), retry the request up to 3 times with a delay of 1 second between each attempt.
- [ ] If the request ultimately fails, return an error message: "Request failed after 3 attempts".
- [ ] Bonus: Implement exponential backoff for retry delays.

# 5. Inventory Management System
Objective: Build a basic inventory management system that tracks product quantities. Instructions:

You are given an array of product objects:
[
  { "id": 1, "name": "Apple", "quantity": 50 },
  { "id": 2, "name": "Orange", "quantity": 30 },
  ...
]
Write functions to:
- [ ] Add or subtract quantity from a product by its ID.
- [ ] Check if a product is in stock (quantity > 0).
- [ ] Return a list of products that are out of stock.
- [ ] Bonus: Implement a search function to find products by name.

# 6. Text Formatter
Objective: Create a text formatter with customizable options. Instructions:

- [ ] Implement a text formatter function that takes a string and an array of formatting options (e.g., bold, italic, uppercase).
- [ ] The function should return the formatted string based on the selected options:
- [ ] bold: Wraps the text in <b></b>.
- [ ] italic: Wraps the text in <i></i>.
- [ ] uppercase: Converts the text to uppercase.
- [ ] Bonus: Support combining multiple formats, e.g., bold and italic at the same time.

# 7. Recursive Directory Search
Objective: Write a function that recursively searches for a file in a directory structure. Instructions:

You are given a directory structure as a nested object:
{
  "dir1": {
    "file1.txt": "content",
    "dir2": {
      "file2.txt": "content",
      "file3.txt": "content"
    }
  }
}
- [ ] Write a recursive function that accepts the directory structure and a filename, and returns the full path of the file if found.
- [ ] If the file is not found, return null.

# 8. Debounced Search
Objective: Implement a debounced search function. Instructions:

- [ ] You are implementing a search feature that should only trigger after the user stops typing for 500 milliseconds (debounced).
- [ ] Write a function debouncedSearch that accepts a search term and fetches results from an API.
- [ ] Ensure that if the user types rapidly, the search only triggers after they stop typing.
- [ ] Bonus: Implement a loading spinner that appears while the search is processing.

# 9. Markdown to HTML Converter
Objective: Convert Markdown text to HTML. Instructions:

- [ ] Write a function that takes a Markdown string and converts it into HTML.
- [ ] Support headings (#, ##, ###).
- [ ] Support bold and italic text (**bold**, *italic*).
- [ ] Support links ([link](url)).
- [ ] You can simplify the implementation by only supporting these basic elements.
- [ ] Bonus: Implement handling for lists and images.

# 10. Promise-Based Parallel Execution
Objective: Execute multiple asynchronous tasks in parallel and return results in order. Instructions:

You are given an array of asynchronous tasks (simulated as Promise-returning functions).
- [ ] Write a function that executes all the tasks in parallel and returns the results in the same order as the tasks (even if some tasks finish later than others).
Example input:
const tasks = [
  () => new Promise(resolve => setTimeout(() => resolve('task1'), 100)),
  () => new Promise(resolve => setTimeout(() => resolve('task2'), 50)),
  () => new Promise(resolve => setTimeout(() => resolve('task3'), 200)),
];
- [ ] The function should return ['task1', 'task2', 'task3'] in the correct order.
- [ ] Bonus: Implement an option to limit the number of concurrent tasks.