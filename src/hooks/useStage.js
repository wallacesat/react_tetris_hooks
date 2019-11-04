import { useState } from 'react';

import { createStage } from '../matriz';

export default function useStage() {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
}
