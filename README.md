# Cypher - AI Chatbot

![Cypher](https://img.shields.io/badge/Cypher-AI%20Chatbot-brightgreen)

Cypher is an AI-powered chatbot designed to assist users with various programming tasks and inquiries. Leveraging advanced natural language processing models and a sleek React-based user interface, Cypher aims to provide a seamless and interactive experience for developers.

## Features

- **Language Processing**: Utilizes Hugging Face Transformers for robust language understanding and response generation.
- **User Interface**: Built with React, featuring an intuitive design with Ant Design components.
- **Markdown Support**: Supports Markdown rendering for code snippets and formatted text.
- **Syntax Highlighting**: Uses Prism.js for syntax highlighting in code snippets.
- **Firebase Authentication**: Implements Google Sign-In for user authentication.
- **Responsive Design**: Ensures a seamless experience across different devices.

## Technologies Used

### Backend

- **API'S and LANGUAGES**:
  - [Hugging Face Transformers](https://huggingface.co/transformers/)
  - [GEMINI-API]()

### Frontend

- **React Libraries**:
  - [Create React App](https://create-react-app.dev/)
  - [Ant Design](https://ant.design/)
  - [React Markdown](https://github.com/remarkjs/react-markdown)
  - [Prism.js](https://prismjs.com/)

## Getting Started

### Prerequisites

- Node.js and npm installed
- Python 3.7+
- Firebase project setup

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/abhinav-123457/CYPHER.git
    cd cypher
    ```

2. **Backend Setup**:
    - Navigate to the backend directory and install the required Python packages:
        ```bash
        pip install -r requirements.txt
        ```

3. **Frontend Setup**:
    - Navigate to the frontend directory and install the dependencies:
        ```bash
        npm install
        ```

4. **Firebase Setup**:
    - Configure Firebase in your React project by setting up your Firebase project and updating the Firebase config file.

### Running the Application

1. **Start the Frontend**:
    ```bash
    npm start
    ```

## Usage

1. Sign in using Google authentication.
2. Interact with Cypher by typing your queries in the input box.
3. Receive responses with code snippets, explanations, and more.

## Project Structure
```bash
CHATBOT/
└── 📁public
    └── cypher.jpg
    └── index.html
    └── manifest.json
    └── robots.txt
└── 📁src
    └── App.js
    └── App.test.js
    └── chatbot.jsx
    └── 📁Componets
        └── 📁main
            └── main.css
            └── Main.jsx
            └── send.png
    └── 📁config
        └── Gemini.js
    └── 📁context
        └── Context.jsx
    └── cypher.jpg
    └── 📁Features
        └── Features.css
        └── Features.js
    └── 📁FIrebase
        └── firebaseConfig.js
        └── useAuth.js
    └── index.css
    └── index.js
    └── reportWebVitals.js
    └── setupTests.js
    └── 📁Signin
        └── SignIn.css
        └── SignIn.js
```

