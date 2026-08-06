"use client";

import { useState, useRef, useEffect } from "react";
import { BotMessageSquare, X, Send, Bot, User } from "lucide-react";
import type { ChatMessage } from "@/types";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "welcome",
      role: "assistant",
      content:
        "Halo! Saya asisten virtual SMK PGRI 3 Malang. Silakan tanyakan tentang PPDB, jurusan, fasilitas, atau informasi sekolah lainnya.",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data.content,
          timestamp: Date.now(),
        },
      ]);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung di (0341) 551525.";
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: errorMessage,
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <Button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg cursor-pointer active:scale-95 transition-all duration-200"
        aria-label={isOpen ? "Tutup chat" : "Buka chat assistant"}
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
                    Asisten PGRI 3
                  </CardTitle>
                  <CardDescription className="text-xs text-white/80">
                    {isLoading ? "Mengetik..." : "Online"}
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
                      {msg.content}
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

              <CardFooter className="border-t border-slate-100 p-3 flex items-center gap-2 rounded-none bg-white">
                <label htmlFor="chat-input" className="sr-only">
                  Ketik pesan
                </label>
                <Input
                  ref={inputRef}
                  id="chat-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ketik pesan..."
                  maxLength={100}
                  className="flex-1"
                  disabled={isLoading}
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
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
