import React from "react";
import BulkMailer from "./components/BulkMailer";
import EmployeeList from "./components/EmployeeList";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>
          SCU — Multi Mail Sender
          <span>Wait 5 min while email will be sended to every user </span>
        </h1>
      </header>

      <main className="main-grid">
        <section className="pane">
          <BulkMailer />
        </section>

        <section className="pane">
          <EmployeeList />
        </section>
      </main>

      <footer style={{ textAlign: "center", marginTop: 20 }}>
        <small>Built with ❤️ — SCU Multi Mail Sender</small>
      </footer>
    </div>
  );
}
