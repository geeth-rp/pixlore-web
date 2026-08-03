import React from 'react';

// === EDIT THESE CONSTANTS ===
const WHATSAPP_NUMBER = "94714330669";
const GMAIL_ADDRESS = "pixlore.studio@gmail.com";
// ============================

const OrderModal = ({ cartItems, totalPrice, onClose }) => {
  const generateOrderText = () => {
    let text = "Order from Pix Lore website:\n";
    cartItems.forEach(item => {
      text += `${item.quantity}x ${item.name} (Rs ${(item.price * item.quantity).toLocaleString()})\n`;
    });
    text += `Total: Rs ${totalPrice.toLocaleString()}`;
    return encodeURIComponent(text);
  };

  return (
    <div style={styles.overlay}>
      <div className="liquid-glass" style={styles.modal}>
        <div style={styles.header}>
          <h2 style={styles.title}>Review Order</h2>
          <button onClick={onClose} style={styles.closeBtn}>&times;</button>
        </div>
        
        <div style={styles.body}>
          {cartItems.map(item => (
            <div key={item.id} style={styles.itemRow}>
              <div>
                <div style={styles.itemName}>{item.quantity}x {item.name}</div>
              </div>
              <div style={styles.itemPrice}>Rs {(item.price * item.quantity).toLocaleString()}</div>
            </div>
          ))}
          <div style={styles.totalRow}>
            <span>Total</span>
            <span>Rs {totalPrice.toLocaleString()}</span>
          </div>
        </div>

        <div style={styles.footer}>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generateOrderText()}`} 
            target="_blank" 
            rel="noreferrer" 
            className="pill-button" 
            style={styles.waBtn}
          >
            Send via WhatsApp
          </a>
          <a 
            href={`mailto:${GMAIL_ADDRESS}?subject=New Order from Pix Lore Website&body=${generateOrderText()}`} 
            className="pill-button" 
            style={styles.emailBtn}
          >
            Send via Email
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(4px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  modal: {
    width: '100%',
    maxWidth: '500px',
    padding: '2rem',
    borderRadius: 'var(--radius-lg)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '1.5rem',
  },
  closeBtn: {
    fontSize: '2rem',
    color: 'var(--text-primary)',
    lineHeight: 1,
  },
  body: {
    marginBottom: '2rem',
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem 0',
    borderBottom: '1px solid var(--glass-border)',
  },
  itemName: {
    fontWeight: '500',
  },
  itemPrice: {
    color: 'var(--text-secondary)',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0',
    fontWeight: '700',
    fontSize: '1.25rem',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  waBtn: {
    backgroundColor: '#25D366',
    color: '#fff',
    width: '100%',
  },
  emailBtn: {
    backgroundColor: 'var(--panel-bg)',
    color: 'var(--text-primary)',
    width: '100%',
  }
};

export default OrderModal;
