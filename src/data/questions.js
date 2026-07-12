export const exams = [
  {
    id: 1,
    name: "Java Programming",
    subject: "Programming",
    duration: "30 Minutes",
    questions: 20,
    difficulty: "🟢 Easy",
  },
  {
    id: 2,
    name: "Python Programming",
    subject: "Programming",
    duration: "30 Minutes",
    questions: 20,
    difficulty: "🟡 Medium",
  },
  {
    id: 3,
    name: "DBMS",
    subject: "Database",
    duration: "25 Minutes",
    questions: 20,
    difficulty: "🔴 Hard",
  },
  {
    id: 4,
    name: "Aptitude",
    subject: "Reasoning",
    duration: "20 Minutes",
    questions: 20,
    difficulty: "🔴 Hard",
  },
  {
  id: 5,
  name: "Web Development",
  subject: "HTML, CSS, JavaScript, React",
  duration: "30 Minutes",
  questions: 20,
  difficulty: "🟡 Medium",
},
{
  id: 6,
  name: "AI & Machine Learning",
  subject: "Artificial Intelligence",
  duration: "30 Minutes",
  questions: 20,
  difficulty: "🔴 Hard",
},
{
  id: 7,
  name: "Cyber Security",
  subject: "Cyber Security",
  duration: "10 Minutes",
  questions: 5,
  difficulty: "🟢 Easy",
},
];
export const questions = {
  java: [
  {
    question: "What does JVM stand for?",
    options: [
      "Java Virtual Machine",
      "Java Variable Method",
      "Java Virtual Memory",
      "Java Visual Machine"
    ],
    answer: "Java Virtual Machine"
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["extends", "implements", "inherit", "super"],
    answer: "extends"
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: ["main()", "start()", "run()", "init()"],
    answer: "main()"
  },
  {
    question: "Which package is imported by default in Java?",
    options: ["java.util", "java.lang", "java.io", "java.sql"],
    answer: "java.lang"
  },
  {
    question: "Which keyword is used to create an object?",
    options: ["new", "class", "this", "object"],
    answer: "new"
  },
  {
    question: "Java is a ______ language.",
    options: [
      "Object-Oriented",
      "Procedure-Oriented",
      "Assembly",
      "Machine"
    ],
    answer: "Object-Oriented"
  },
  {
    question: "Which data type stores whole numbers?",
    options: ["int", "float", "double", "char"],
    answer: "int"
  },
  {
    question: "Which operator is used for comparison?",
    options: ["==", "=", "+", "&&"],
    answer: "=="
  },
  {
    question: "Which loop executes at least once?",
    options: ["do-while", "while", "for", "foreach"],
    answer: "do-while"
  },
  {
    question: "Which keyword is used to stop a loop?",
    options: ["break", "continue", "exit", "stop"],
    answer: "break"
  },
  {
    question: "Which keyword is used for exception handling?",
    options: ["try", "catch", "finally", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which collection stores unique elements?",
    options: ["Set", "List", "ArrayList", "Vector"],
    answer: "Set"
  },
  {
    question: "Which collection allows duplicate elements?",
    options: ["ArrayList", "HashSet", "TreeSet", "LinkedHashSet"],
    answer: "ArrayList"
  },
  {
    question: "Which keyword refers to the current object?",
    options: ["this", "super", "self", "current"],
    answer: "this"
  },
  {
    question: "Which keyword is used to call the parent class constructor?",
    options: ["super", "this", "extends", "parent"],
    answer: "super"
  },
  {
    question: "Which access modifier provides maximum accessibility?",
    options: ["public", "private", "protected", "default"],
    answer: "public"
  },
  {
    question: "Which class is used for taking input from the keyboard?",
    options: ["Scanner", "Input", "Reader", "Keyboard"],
    answer: "Scanner"
  },
  {
    question: "Which method prints output in Java?",
    options: [
      "System.out.println()",
      "print()",
      "echo()",
      "console.log()"
    ],
    answer: "System.out.println()"
  },
  {
    question: "Which company developed Java?",
    options: ["Sun Microsystems", "Microsoft", "Google", "IBM"],
    answer: "Sun Microsystems"
  },
  {
    question: "Java source code file has which extension?",
    options: [".java", ".class", ".js", ".jar"],
    answer: ".java"
  }
],

 python: [
  {
    question: "Python is a ______ language.",
    options: ["Programming", "Database", "Operating System", "Browser"],
    answer: "Programming"
  },
  {
    question: "Which symbol is used for comments in Python?",
    options: ["#", "//", "/* */", "--"],
    answer: "#"
  },
  {
    question: "Which function is used to display output?",
    options: ["print()", "printf()", "echo()", "display()"],
    answer: "print()"
  },
  {
    question: "Which function is used to take user input?",
    options: ["input()", "scan()", "cin()", "gets()"],
    answer: "input()"
  },
  {
    question: "Which keyword is used for functions?",
    options: ["def", "function", "fun", "define"],
    answer: "def"
  },
  {
    question: "Which data type stores decimal numbers?",
    options: ["float", "int", "str", "bool"],
    answer: "float"
  },
  {
    question: "Which operator is used for exponentiation?",
    options: ["**", "^", "*", "//"],
    answer: "**"
  },
  {
    question: "Which keyword is used for conditional statements?",
    options: ["if", "when", "switch", "case"],
    answer: "if"
  },
  {
    question: "Which loop is used to iterate over a sequence?",
    options: ["for", "repeat", "foreach", "loop"],
    answer: "for"
  },
  {
    question: "Which loop continues while a condition is true?",
    options: ["while", "for", "repeat", "loop"],
    answer: "while"
  },
  {
    question: "Which keyword is used to exit a loop?",
    options: ["break", "stop", "exit", "continue"],
    answer: "break"
  },
  {
    question: "Which keyword skips the current iteration?",
    options: ["continue", "skip", "pass", "next"],
    answer: "continue"
  },
  {
    question: "Python lists are ______.",
    options: ["Mutable", "Immutable", "Constant", "Fixed"],
    answer: "Mutable"
  },
  {
    question: "Which data type stores key-value pairs?",
    options: ["Dictionary", "List", "Tuple", "Set"],
    answer: "Dictionary"
  },
  {
    question: "Which collection stores unique elements?",
    options: ["Set", "List", "Tuple", "Dictionary"],
    answer: "Set"
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["try", "catch", "throws", "except"],
    answer: "try"
  },
  {
    question: "Which block is executed if an exception occurs?",
    options: ["except", "catch", "finally", "error"],
    answer: "except"
  },
  {
    question: "Python is developed by?",
    options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
    answer: "Guido van Rossum"
  },
  {
    question: "Python files have which extension?",
    options: [".py", ".java", ".cpp", ".js"],
    answer: ".py"
  },
  {
    question: "Which keyword is used to create a class in Python?",
    options: ["class", "object", "new", "define"],
    answer: "class"
  }
],
dbms: [
  {
    question: "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Backup Management System",
      "Digital Base Management System",
      "Database Memory System"
    ],
    answer: "Database Management System"
  },
  {
    question: "Which language is used to interact with databases?",
    options: ["SQL", "HTML", "Java", "Python"],
    answer: "SQL"
  },
  {
    question: "Which SQL command is used to retrieve data?",
    options: ["SELECT", "GET", "FETCH", "SHOW"],
    answer: "SELECT"
  },
  {
    question: "Which SQL command is used to insert data?",
    options: ["INSERT", "ADD", "CREATE", "PUT"],
    answer: "INSERT"
  },
  {
    question: "Which SQL command is used to delete records?",
    options: ["DELETE", "REMOVE", "DROP", "ERASE"],
    answer: "DELETE"
  },
  {
    question: "Which SQL command updates existing records?",
    options: ["UPDATE", "MODIFY", "ALTER", "CHANGE"],
    answer: "UPDATE"
  },
  {
    question: "Which key uniquely identifies each record?",
    options: ["Primary Key", "Foreign Key", "Candidate Key", "Super Key"],
    answer: "Primary Key"
  },
  {
    question: "Which key links two tables?",
    options: ["Foreign Key", "Primary Key", "Composite Key", "Unique Key"],
    answer: "Foreign Key"
  },
  {
    question: "Which normal form removes partial dependency?",
    options: ["2NF", "1NF", "3NF", "BCNF"],
    answer: "2NF"
  },
  {
    question: "Which normal form removes transitive dependency?",
    options: ["3NF", "1NF", "2NF", "4NF"],
    answer: "3NF"
  },
  {
    question: "Which SQL clause filters records?",
    options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
    answer: "WHERE"
  },
  {
    question: "Which clause sorts the result?",
    options: ["ORDER BY", "GROUP BY", "SORT", "WHERE"],
    answer: "ORDER BY"
  },
  {
    question: "Which SQL function returns the number of rows?",
    options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
    answer: "COUNT()"
  },
  {
    question: "Which SQL function returns the highest value?",
    options: ["MAX()", "MIN()", "AVG()", "COUNT()"],
    answer: "MAX()"
  },
  {
    question: "Which SQL function returns the lowest value?",
    options: ["MIN()", "MAX()", "AVG()", "SUM()"],
    answer: "MIN()"
  },
  {
    question: "Which SQL function calculates the average?",
    options: ["AVG()", "SUM()", "COUNT()", "MAX()"],
    answer: "AVG()"
  },
  {
    question: "Which join returns matching records from both tables?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    answer: "INNER JOIN"
  },
  {
    question: "Which command removes an entire table permanently?",
    options: ["DROP", "DELETE", "REMOVE", "TRUNCATE"],
    answer: "DROP"
  },
  {
    question: "Which command removes all rows but keeps the table?",
    options: ["TRUNCATE", "DROP", "DELETE DATABASE", "CLEAR"],
    answer: "TRUNCATE"
  },
  {
    question: "Which database is widely used with MERN Stack?",
    options: ["MongoDB", "Oracle", "SQL Server", "PostgreSQL"],
    answer: "MongoDB"
  }
],
web: [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>"
  },
  {
    question: "Which CSS property changes text color?",
    options: ["color", "font-color", "text-color", "background-color"],
    answer: "color"
  },
  {
    question: "Which CSS property changes background color?",
    options: ["background-color", "bgcolor", "color", "background"],
    answer: "background-color"
  },
  {
    question: "Which CSS property makes text bold?",
    options: ["font-weight", "font-style", "text-weight", "bold"],
    answer: "font-weight"
  },
  {
    question: "Which symbol is used for IDs in CSS?",
    options: ["#", ".", "@", "$"],
    answer: "#"
  },
  {
    question: "Which symbol is used for Classes in CSS?",
    options: [".", "#", "@", "$"],
    answer: "."
  },
  {
    question: "Which JavaScript keyword declares a variable?",
    options: ["let", "print", "echo", "input"],
    answer: "let"
  },
  {
    question: "Which function prints output in JavaScript?",
    options: ["console.log()", "print()", "echo()", "printf()"],
    answer: "console.log()"
  },
  {
    question: "Which keyword is used for conditions in JavaScript?",
    options: ["if", "when", "case", "switchif"],
    answer: "if"
  },
  {
    question: "Which loop repeats while a condition is true?",
    options: ["while", "repeat", "loop", "foreach"],
    answer: "while"
  },
  {
    question: "Which operator checks equality?",
    options: ["===", "=", "+", "*"],
    answer: "==="
  },
  {
    question: "React is a ______.",
    options: [
      "JavaScript Library",
      "Programming Language",
      "Database",
      "Framework"
    ],
    answer: "JavaScript Library"
  },
  {
    question: "Which command creates a React app using Vite?",
    options: [
      "npm create vite@latest",
      "npm install react",
      "create-react-app",
      "npm start"
    ],
    answer: "npm create vite@latest"
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useState"
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useEffect"
  },
  {
    question: "Which component is used for routing in React?",
    options: [
      "BrowserRouter",
      "RouterLink",
      "Navigator",
      "RoutePage"
    ],
    answer: "BrowserRouter"
  },
  {
    question: "Which attribute is used in JSX instead of class?",
    options: ["className", "class", "cssClass", "classname"],
    answer: "className"
  },
  {
    question: "Which company developed React?",
    options: ["Facebook", "Google", "Microsoft", "Oracle"],
    answer: "Facebook"
  }
],
aptitude: [
  {
    question: "What is 25 × 4?",
    options: ["100", "90", "95", "110"],
    answer: "100"
  },
  {
    question: "If a train travels 60 km in 1 hour, how much distance will it travel in 5 hours?",
    options: ["300 km", "250 km", "350 km", "280 km"],
    answer: "300 km"
  },
  {
    question: "The average of 10, 20 and 30 is?",
    options: ["20", "15", "25", "30"],
    answer: "20"
  },
  {
    question: "What is 15% of 200?",
    options: ["30", "20", "25", "40"],
    answer: "30"
  },
  {
    question: "Simplify: 45 ÷ 5 × 2",
    options: ["18", "20", "15", "25"],
    answer: "18"
  },
  {
    question: "Find the next number: 2, 4, 8, 16, ?",
    options: ["32", "24", "30", "20"],
    answer: "32"
  },
  {
    question: "A man buys a pen for ₹50 and sells it for ₹60. Profit is?",
    options: ["₹10", "₹5", "₹15", "₹20"],
    answer: "₹10"
  },
  {
    question: "Which number is divisible by both 2 and 5?",
    options: ["40", "33", "27", "49"],
    answer: "40"
  },
  {
    question: "What is the square of 12?",
    options: ["144", "124", "154", "164"],
    answer: "144"
  },
  {
    question: "Find the missing number: 5, 10, 20, 40, ?",
    options: ["80", "70", "90", "100"],
    answer: "80"
  },
  {
    question: "The ratio of 20:40 is?",
    options: ["1:2", "2:1", "1:4", "4:1"],
    answer: "1:2"
  },
  {
    question: "What is 18 + 27?",
    options: ["45", "46", "44", "43"],
    answer: "45"
  },
  {
    question: "If the cost price is ₹500 and selling price is ₹450, then there is?",
    options: ["Loss", "Profit", "No Loss No Profit", "Gain"],
    answer: "Loss"
  },
  {
    question: "Find the cube of 5.",
    options: ["125", "100", "150", "75"],
    answer: "125"
  },
  {
    question: "What is 9 × 9?",
    options: ["81", "72", "99", "91"],
    answer: "81"
  },
  {
    question: "If today is Monday, what day comes after 10 days?",
    options: ["Thursday", "Wednesday", "Friday", "Tuesday"],
    answer: "Thursday"
  },
  {
    question: "Which number is the smallest?",
    options: ["18", "12", "25", "30"],
    answer: "12"
  },
  {
    question: "A rectangle has length 10 cm and width 5 cm. Area is?",
    options: ["50", "25", "40", "60"],
    answer: "50"
  },
  {
    question: "What is 1000 ÷ 25?",
    options: ["40", "50", "35", "45"],
    answer: "40"
  },
  {
    question: "Which is the largest prime number?",
    options: ["29", "27", "21", "25"],
    answer: "29"
  }
],
aiml: [
  {
    question: "What does AI stand for?",
    options: [
      "Artificial Intelligence",
      "Automated Intelligence",
      "Advanced Internet",
      "Artificial Interface"
    ],
    answer: "Artificial Intelligence"
  },
  {
    question: "What does ML stand for?",
    options: [
      "Machine Learning",
      "Machine Language",
      "Model Learning",
      "Memory Learning"
    ],
    answer: "Machine Learning"
  },
  {
    question: "Which language is most commonly used for AI?",
    options: ["Python", "HTML", "CSS", "PHP"],
    answer: "Python"
  },
  {
    question: "Which library is mainly used for numerical computing in Python?",
    options: ["NumPy", "React", "Bootstrap", "Flutter"],
    answer: "NumPy"
  },
  {
    question: "Which library is used for data analysis?",
    options: ["Pandas", "Express", "Node", "Spring"],
    answer: "Pandas"
  },
  {
    question: "Which library is used for plotting graphs?",
    options: ["Matplotlib", "TensorFlow", "NumPy", "Scikit-learn"],
    answer: "Matplotlib"
  },
  {
    question: "Which library provides machine learning algorithms?",
    options: [
      "Scikit-learn",
      "Bootstrap",
      "Angular",
      "Laravel"
    ],
    answer: "Scikit-learn"
  },
  {
    question: "Which framework is developed by Google for Deep Learning?",
    options: [
      "TensorFlow",
      "React",
      "Flask",
      "Django"
    ],
    answer: "TensorFlow"
  },
  {
    question: "Which framework is developed by Facebook for Deep Learning?",
    options: [
      "PyTorch",
      "TensorFlow",
      "NumPy",
      "Pandas"
    ],
    answer: "PyTorch"
  },
  {
    question: "Which type of learning uses labeled data?",
    options: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Deep Learning"
    ],
    answer: "Supervised Learning"
  },
  {
    question: "Which type of learning uses unlabeled data?",
    options: [
      "Unsupervised Learning",
      "Supervised Learning",
      "Reinforcement Learning",
      "Transfer Learning"
    ],
    answer: "Unsupervised Learning"
  },
  {
    question: "Which algorithm is commonly used for classification?",
    options: [
      "Decision Tree",
      "K-Means",
      "Apriori",
      "PCA"
    ],
    answer: "Decision Tree"
  },
  {
    question: "Which algorithm is commonly used for clustering?",
    options: [
      "K-Means",
      "Linear Regression",
      "Decision Tree",
      "Random Forest"
    ],
    answer: "K-Means"
  },
  {
    question: "Which algorithm is used to predict continuous values?",
    options: [
      "Linear Regression",
      "K-Means",
      "Naive Bayes",
      "KNN"
    ],
    answer: "Linear Regression"
  },
  {
    question: "What is the full form of CNN?",
    options: [
      "Convolutional Neural Network",
      "Computer Neural Network",
      "Central Neural Network",
      "Connected Neural Network"
    ],
    answer: "Convolutional Neural Network"
  },
  {
    question: "What is the full form of NLP?",
    options: [
      "Natural Language Processing",
      "Network Language Programming",
      "Natural Learning Process",
      "None of these"
    ],
    answer: "Natural Language Processing"
  },
  {
    question: "Which evaluation metric is commonly used for classification?",
    options: [
      "Accuracy",
      "Mean",
      "Variance",
      "Median"
    ],
    answer: "Accuracy"
  },
  {
    question: "Which company developed ChatGPT?",
    options: [
      "OpenAI",
      "Google",
      "Microsoft",
      "Amazon"
    ],
    answer: "OpenAI"
  },
  {
    question: "Which branch of AI enables computers to understand human language?",
    options: [
      "Natural Language Processing",
      "Computer Vision",
      "Robotics",
      "Data Mining"
    ],
    answer: "Natural Language Processing"
  },
  {
    question: "Which field focuses on enabling computers to recognize images and videos?",
    options: [
      "Computer Vision",
      "Data Science",
      "Cyber Security",
      "Cloud Computing"
    ],
    answer: "Computer Vision"
  }
],
cyber: [
  {
    question: "What does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Virtual Public Network",
      "Verified Private Network",
      "Visual Private Network"
    ],
    answer: "Virtual Private Network"
  },
  {
    question: "Which attack tries to steal usernames and passwords using fake websites?",
    options: [
      "Phishing",
      "Hacking",
      "Spoofing",
      "Spamming"
    ],
    answer: "Phishing"
  },
  {
    question: "Which software protects a computer from malicious programs?",
    options: [
      "Antivirus",
      "Compiler",
      "Browser",
      "Database"
    ],
    answer: "Antivirus"
  },
  {
    question: "What is the purpose of a Firewall?",
    options: [
      "Protects the network from unauthorized access",
      "Speeds up the computer",
      "Stores passwords",
      "Creates databases"
    ],
    answer: "Protects the network from unauthorized access"
  },
  {
    question: "Which of the following is considered a strong password?",
    options: [
      "P@ssw0rd#2026",
      "12345678",
      "password",
      "abcdef"
    ],
    answer: "P@ssw0rd#2026"
  }
],

  
};