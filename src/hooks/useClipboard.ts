import { useState } from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      // After a brief delay, reset the copied state
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      setIsCopied(false);
    }
  };

  return { isCopied, copyToClipboard };
};

export default useClipboard;
