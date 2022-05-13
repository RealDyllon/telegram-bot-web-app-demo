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
    window.Telegram.WebApp.ready();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi {window.Telegram.WebApp?.initDataUnsafe?.user?.first_name}, welcome
          to BurgerKhong
        </p>
        <p>May I take your order?</p>
      </header>
    </div>
  );
}

export default App;
