import { useState, useEffect } from 'react';
import isFirstAccess from '../services/checkFirstAccess';

const useFirstAccess = () => {
  const [firstAccess, setFirstAccess] = useState<boolean>();

  useEffect(() => {
    async function checkFirstAccess() {
      const data = await isFirstAccess();
      setFirstAccess(data);
    };

    checkFirstAccess();
  }, []);

  return [firstAccess];
};

export default useFirstAccess;