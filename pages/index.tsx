"use client";
import { useChat } from "ai/react";

import Messages from "@/app/components/messages";
import InputForm from "@/app/components/inputForm";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/genai",
    });

  return (
    <main className="flex min-h-screen flex-col items-center p-12 text-lg">
      <InputForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}
      />
      <Messages messages={messages} isLoading={isLoading} />
    </main>
  );
}
