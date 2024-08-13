



# Bot Collection

This project is a React-based application that allows users to manage a collection of bots. Users can view all available bots, add them to their army, release them from the army, or discharge them permanently. The project uses `json-server` as a backend to simulate a RESTful API.

## Features

- Bot Collection: View a list of all available bots.
- Your Bot Army: Add bots to your personal army by clicking on them.
- Release a Bot:Remove a bot from your army.
- Discharge a Bot:Permanently remove a bot from both the army and the backend.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js]
- [npm]
- [json-server]

### Installation

1. Clone the repository:

   ```bash
   
   cd bot-collection
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up `json-server`:

   - Download the `db.json` file containing the bot data from [this link](https://drive.google.com/file/d/157IfYxr4Bp63-ByF1g1wCP1uOpQ5i2R4/view) and place it in the root directory of your project.

4. Start the backend server:

   ```bash
   json-server --watch db.json --port 8001
   ```

5. Run the React app:

   ```bash
   npm start
   ```

6. View the application:
   - Open your browser and go to `http://localhost:3001`.

## Usage

-View Bots: All available bots are listed in the `BotCollection`.
- Add to Army: Click on a bot to add it to your army.
- Release a Bot: Click on a bot in `YourBotArmy` to remove it from the army.
- Discharge a Bot: Click the red "x" button on a bot to permanently delete it from the backend.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.
