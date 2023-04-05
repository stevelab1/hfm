import React, { useState } from 'react';

interface OpenAIKeyInputProps {
  onKeySubmit: (key: string) => void;
}

const OpenAIKeyInput: React.FC<OpenAIKeyInputProps> = ({ onKeySubmit }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onKeySubmit(apiKey);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setApiKey(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="openai-key">OpenAI Key:</label>
      <input
        type="password"
        id="openai-key"
        name="openai-key"
        value={apiKey}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default OpenAIKeyInput;
