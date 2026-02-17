import { useCursorContext } from './CursorContext';

const HoverText = ({ children }) => {
  const { setVariant } = useCursorContext();

  return (
    <span
      className="relative hover-text-mask "
      onMouseEnter={() => setVariant('hoverText')}
      onMouseLeave={() => setVariant('default')}
    >
      {children}
    </span>
  );
};

export default HoverText;
