// src/components/Button.jsx
export default function Button({ children, className = '', ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}
