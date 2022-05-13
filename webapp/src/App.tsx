import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TelegramWebview from "./typing/telegram";

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebview.WebApp;
    };
  }
}

function App() {
  useEffect(() => {
    console.log(window.Telegram.WebApp);
    window.Telegram.WebApp.ready()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Telegram Bot Web App</p>
      </header>
    </div>
  );
}

export default App;
