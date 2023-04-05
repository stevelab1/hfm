import React from "react";
import Navbar from "./Navbar";
import OpenAIKeyInput from "./OpenAIKeyInput";
import { useOpenAIKey, OpenAIKeyProvider } from "./OpenAIKeyContext";

const Header: React.FC = () => {
  const { setOpenAIKey } = useOpenAIKey();

  const handleKeySubmit = (key: string) => {
    setOpenAIKey(key);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-10 bg-white">
      <div className="container mx-auto px-4">
        <Navbar />
        <OpenAIKeyInput onKeySubmit={handleKeySubmit} />
      </div>
    </header>
  );
};

export default Header;
