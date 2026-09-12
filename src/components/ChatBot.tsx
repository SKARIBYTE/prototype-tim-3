"use client";

import { useState, useRef, useEffect } from "react";
import { BotMessageSquare, X, Send, Bot, User } from "lucide-react";
import type { ChatMessage } from "@/types";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageSwitcher";
import { translations } from "@/i18n";

function TypingMessage({ content, isNew }: { content: string; isNew: boolean }) {
  const [displayed, setDisplayed] = useState(isNew ? "" : content);

  useEffect(() => {
    if (!isNew) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(content.slice(0, i));
      if (i >= content.length) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [content, isNew]);

  return <>{displayed}</>;
}

export default function ChatBot() {
  const lang = useLanguage();
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "welcome",
      role: "assistant",
      content: t.chatbot.welcome,
      timestamp: 0,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [latestAssistantId, setLatestAssistantId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.content || "Gagal menghubungi server");
      }

      const newId = `assistant-${Date.now()}`;
      setLatestAssistantId(newId);
      setMessages((prev) => [
        ...prev,
        {
          id: newId,
          role: "assistant",
          content: data.content,
          timestamp: Date.now(),
        },
      ]);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung di (0341) 551525.";
      const errId = `error-${Date.now()}`;
      setLatestAssistantId(errId);
      setMessages((prev) => [
        ...prev,
        {
          id: errId,
          role: "assistant",
          content: errorMessage,
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 150) return;
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <>
      <Button
        type="button"
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg cursor-pointer active:scale-95 transition-all duration-200"
        aria-label={isOpen ? t.chatbot.close_aria : t.chatbot.open_aria}
        size="icon"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              <BotMessageSquare className="h-6 w-6" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50"
          >
            <Card
              className="w-80 sm:w-96 h-137.5 max-h-[85vh] shadow-2xl flex flex-col overflow-hidden border-slate-200"
              role="dialog"
              aria-label="Chat Assistant SMK PGRI 3 Malang"
            >
              <CardHeader className="bg-primary px-4 py-3 flex flex-row items-center gap-3 space-y-0 rounded-none border-b-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Bot className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold text-white">
                    {t.chatbot.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-white/80">
                    {isLoading ? t.chatbot.typing : t.chatbot.online}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent
                className="flex-1 overflow-y-auto p-4 space-y-3 bg-white"
                style={{ minHeight: "240px" }}
                aria-live="polite"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex items-start gap-2",
                      msg.role === "user" ? "flex-row-reverse" : ""
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                        msg.role === "user" ? "bg-primary" : "bg-slate-100"
                      )}
                    >
                      {msg.role === "user" ? (
                        <User className="h-4 w-4 text-white" aria-hidden="true" />
                      ) : (
                        <Bot className="h-4 w-4 text-slate-600" aria-hidden="true" />
                      )}
                    </div>
                    <div
                      className={cn(
                        "max-w-xs rounded-xl px-3 py-2 text-sm leading-relaxed",
                        msg.role === "user"
                          ? "bg-primary text-white"
                          : "bg-slate-100 text-slate-700"
                      )}
                    >
                      {msg.role === "assistant" ? (
                        <TypingMessage content={msg.content} isNew={msg.id === latestAssistantId} />
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-start gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100">
                      <Bot className="h-4 w-4 text-slate-600" aria-hidden="true" />
                    </div>
                    <div className="bg-slate-100 rounded-xl px-3 py-2">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.15s" }} />
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.3s" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              <CardFooter className="border-t border-slate-100 p-3 flex flex-col gap-1.5 rounded-none bg-white">
                <div className="flex items-center gap-2 w-full">
                  <textarea
                    ref={inputRef}
                    aria-label="Ketik pesan"
                    value={input}
                    onChange={handleTextareaChange}
                    onKeyDown={handleKeyDown}
                    placeholder={t.chatbot.placeholder}
                    rows={1}
                    disabled={isLoading}
                    style={{ maxHeight: "120px", overflowY: "auto", resize: "none" }}
                    className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button
                    type="button"
                    onClick={sendMessage}
                    disabled={isLoading || !input.trim()}
                    size="icon"
                    aria-label="Kirim pesan"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
                <div className={`text-xs self-end tabular-nums transition-colors ${input.length >= 140 ? "text-red-500" : "text-slate-400"}`}>
                  {input.length}/150
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
