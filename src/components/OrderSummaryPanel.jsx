import React from 'react';

const OrderSummaryPanel = ({ totalItems, totalPrice, onReview }) => {
  if (totalItems === 0) return null;

  return (
    <div style={styles.panel} className="liquid-glass">
      <div style={styles.info}>
        <span style={styles.count}>{totalItems} item{totalItems > 1 ? 's' : ''}</span>
        <span style={styles.total}>Total: Rs {totalPrice.toLocaleString()}</span>
      </div>
      <button onClick={onReview} className="pill-button" style={styles.btn}>
        Review order
      </button>
    </div>
  );
};

const styles = {
  panel: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    padding: '1rem 1.5rem',
    animation: 'slideUp 0.3s ease-out forwards',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  count: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
  },
  total: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
  },
  btn: {
    padding: '0.5rem 1.5rem',
  }
};

// We can add slideUp keyframes in JS or CSS. Let's add inline style for the animation if needed, or rely on CSS.
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes slideUp {
      from { transform: translateY(100px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

export default OrderSummaryPanel;
