import React,{ useState } from "react";
import Home from "./Home";
import Chat from "./Chat";
//import './App.css'; // Assuming your styles are set here

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderComponent = () => {
    switch(activeTab) {
      case 'Home':
        return <Home />;
      case 'Chat':
        return <Chat />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <div>
	<nav style={{ background: "#1E90FF", padding: "10px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", display: "flex", justifyContent: "space-between" }}>
            <h1 style={{ color: "white" }}>Jing's Cafe</h1>
            <ul style={{ display: "flex", listStyle: "none", alignItems: "center", margin: 0 }}>
              <li><a to="/" onClick={() => setActiveTab('Home')} style={{ color: "white", textDecoration: "none", margin: "0 20px" }}>Home</a></li>
              <li><a to="/chat" onClick={() => setActiveTab('Chat')} style={{ color: "white", textDecoration: "none", margin: "0 20px" }}>Chat</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
