import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function BulkMailer() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [results, setResults] = useState(null);

  const handleSend = async (e) => {
    e.preventDefault();
    setResults(null);
    setSending(true);

    try {
      const resp = await axios.post(
        "http://localhost:5000/api/send",
        { senderName, senderEmail, subject, message },
        { timeout: 0 }
      );
      setResults(resp.data);

      // ✅ Success popup
      toast.success(
        `Emails sent successfully to ${resp.data.summary.sent} users`
      );
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Failed to send emails");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <h2>Compose & Send</h2>
      <form onSubmit={handleSend}>
        <label>
          Sender Name
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          />
        </label>

        <label>
          Sender Email
          <input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Subject
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>

        <label>
          Message
          <textarea
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <div style={{ marginTop: 8 }}>
          <button disabled={sending}>
            {sending ? "Sending…" : "Send to All"}
          </button>
        </div>
      </form>

      {results && (
        <div className="results">
          <h3>Send results</h3>
          <p>
            Total: {results.summary.total} — Sent: {results.summary.sent} —
            Failed: {results.summary.failed}
          </p>
        </div>
      )}
    </div>
  );
}
