import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from 'react'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={new QueryClient()}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
)
