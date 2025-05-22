import { useState, useEffect } from 'react';

export function useMarkdown(path) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(path)
      .then(res => res.text())
      .then(text => setContent(text));
  }, [path]);

  return content;
}
