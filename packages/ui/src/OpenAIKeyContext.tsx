import React, { createContext, useContext, useState } from 'react';

interface OpenAIKeyContextValue {
  openAIKey: string | null;
  setOpenAIKey: React.Dispatch<React.SetStateAction<string | null>>;
}

const OpenAIKeyContext = createContext<OpenAIKeyContextValue | undefined>(
  undefined
);

export const useOpenAIKey = () => {
  const context = useContext(OpenAIKeyContext);
  if (!context) {
    throw new Error('useOpenAIKey must be used within an OpenAIKeyProvider');
  }
  return context;
};

interface OpenAIKeyProviderProps {
  children: React.ReactNode;
}

export const OpenAIKeyProvider: React.FC<OpenAIKeyProviderProps> = ({ children }) => {
  const [openAIKey, setOpenAIKey] = useState<string | null>(null);

  return (
    <OpenAIKeyContext.Provider value={{ openAIKey, setOpenAIKey }}>
      {children}
    </OpenAIKeyContext.Provider>
  );
};
