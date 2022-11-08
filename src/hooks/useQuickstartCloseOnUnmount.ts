import React from 'react';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';

const useQuickstartCloseOnUnmount = () => {
  const { helpTopics } = useChrome();

  React.useEffect(
    () => () => helpTopics?.closeHelpTopic?.(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};

export default useQuickstartCloseOnUnmount;
