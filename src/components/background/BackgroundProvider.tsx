'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
type BackgroundContext = { activeSection: string; setActiveSection: (section: string) => void; accent: string; setAccent: (accent: string) => void; };
const Context = createContext<BackgroundContext | null>(null);
export function BackgroundProvider({ children }: { children: ReactNode }) { const [activeSection, setActiveSection] = useState('home'); const [accent, setAccent] = useState('cyan'); return <Context.Provider value={{ activeSection, setActiveSection, accent, setAccent }}>{children}</Context.Provider>; }
export function useBackground() { const value = useContext(Context); if (!value) throw new Error('useBackground must be used within BackgroundProvider'); return value; }
