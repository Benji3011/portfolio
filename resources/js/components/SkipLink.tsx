import * as React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main"
      style={{
        position: 'absolute',
        left: -9999,
        top: 0,
        background: '#111',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: 8,
        zIndex: 10000,
      }}
      onFocus={(e) => { (e.currentTarget.style.left as any) = '12px'; }}
      onBlur={(e) => { (e.currentTarget.style.left as any) = '-9999px'; }}
    >
      Aller au contenu principal
    </a>
  );
}
