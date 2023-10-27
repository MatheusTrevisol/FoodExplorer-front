import React from 'react';
import { toast } from 'react-toastify';

export function CustomMessage({ message, type }) {
  const showToast = () => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast(message);
        break;
    }
  };

  return (
    <button onClick={showToast} style={{ marginRight: '10px' }}>
      Show {type} Toast
    </button>
  );
};