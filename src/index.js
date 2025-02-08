import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app/App.js";

// This is a workaround for a bug that prevented deploying the app to GitHub Pages.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
    });
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);