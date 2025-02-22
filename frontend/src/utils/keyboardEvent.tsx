export const handleKeyDown = (
  e: React.KeyboardEvent<HTMLTextAreaElement>,
  key: string,
  fn: () => void,
) => {
  if (e.key === key && !e.shiftKey) {
    e.preventDefault();
    fn();
  }
};
