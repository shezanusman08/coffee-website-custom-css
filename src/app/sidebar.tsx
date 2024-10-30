import ".//sidebar.css";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="close-button-container">
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link href="/" onClick={onClose}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={onClose}>About</Link>
        </li>
        <li>
          <Link href="/menu" onClick={onClose}>Menu</Link>
        </li>
        <li>
          <Link href="/reservation" onClick={onClose}>Reservation</Link>
        </li>
        <li>
          <Link href="/contact" onClick={onClose}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
