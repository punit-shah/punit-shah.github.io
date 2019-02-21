import { useState, useEffect } from 'react';

const useScrollSpy = ({
  sectionRefs = [],
  offset = 0,
  defaultActiveSectionId,
}) => {
  const [activeSectionId, setActiveSectionId] = useState(
    defaultActiveSectionId
  );

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

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return function cleanup() {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionRefs]);

  return activeSectionId;
};

export default useScrollSpy;
