import React from 'react';

interface ToggleButtonProps {
  label: string;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, onClick }) => {
  return (
    <button className="toggle-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default ToggleButton;
