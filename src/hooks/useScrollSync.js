import { useState, useEffect } from 'react';

export function useScrollSync() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    // 添加滚动监听器
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 初始位置
    handleScroll();

    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}
