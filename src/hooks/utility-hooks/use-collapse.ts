import { useState } from 'react';

const ALL_KEYS = [''];

export const useCollapse = () => {
  const [activeKeys, setActiveKeys] = useState<string[]>(ALL_KEYS);

  const handleToggleCollapse = () => {
    if (activeKeys.length === 0) {
      setActiveKeys(ALL_KEYS);
    } else {
      setActiveKeys([]);
    }
  };

  return {
    activeKeys,
    setActiveKeys,
    handleToggleCollapse
  };
};