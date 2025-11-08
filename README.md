# comp2019-cytovision-chatbot

## Installation
### 1. Clone the git repository:
```cmd
git clone https://github.com/imtiaznn/comp2019-cytovision-chatbot.git
cd comp2019-cytovision-chatbot
```
### 2. Download the required dependencies:
```cmd
python -m venv .venv
pip install -r requirements.txt
```
### 3. Create the virtual environment:
```cmd
python -m venv .venv
```

### 4. Activate the virtual environment:

(Windows)
```cmd
.venv\Scripts\activate
```

(MacOS/Linux)
```bash
source .venv/bin/activate
```

### 5. Install dependencies

```cmd
pip install requirements.txt
```

## Setting up the Server
### Run the RASA server locally
```cmd
rasa run --enable-api --cors "*"
```
Open **index.html** in your browser to view the chatbot widget.

Any interactions can be monitored in the terminal.


