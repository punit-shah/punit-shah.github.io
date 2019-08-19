import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useScrollSpy = ({
  sectionRefs = [],
  offset = 0,
  defaultActiveSectionId,
}) => {
  const [activeSectionId, setActiveSectionId] = useState(
    defaultActiveSectionId
  );

  useEffect(() => {
    const onScroll = () => {
      let currentSectionId = activeSectionId;

      sectionRefs.forEach(ref => {
        const section = ref.current;

        if (!section || !(section instanceof Element)) return;

        if (section.getBoundingClientRect().top - offset < 0) {
          currentSectionId = section.id;
        }
      });

      setActiveSectionId(currentSectionId);
    };
    const onScrollThrottled = throttle(onScroll, 100);

    window.addEventListener('scroll', onScrollThrottled);

    return function cleanup() {
      window.removeEventListener('scroll', onScrollThrottled);
    };
  }, [sectionRefs, offset, activeSectionId]);

  return activeSectionId;
};

export default useScrollSpy;
