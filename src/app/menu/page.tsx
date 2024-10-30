import Image from "next/image";
import "./menu.css";

export default function Menu() {
  // Reusable MenuItem Component
  const MenuItem = ({ imgSrc, imgAlt, title }: { imgSrc: string; imgAlt: string; title: string }) => (
    <div className="menu-item">
      <div className="menu-item-image">
        <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" className="image-rounded" />
      </div>
      <h3 className="menu-item-title">{title}</h3>
    </div>
  );

  return (
    <main className="menu-main">
      <div className="menu-container">
        {/* Menu Heading */}
        <header className="menu-header">
          <h1 className="menu-title">Menu</h1>
        </header>

        {/* Menu Grid */}
        <div className="menu-grid-container">
          <div className="menu-grid">
            {/* Menu Items */}
            <MenuItem imgSrc="/images/doppio.jpg" title="Doppio" imgAlt="Doppio Coffee" />
            <MenuItem imgSrc="/images/latte-macchiato.jpg" title="Latte Macchiato" imgAlt="Latte Macchiato" />
            <MenuItem imgSrc="/images/cappuccino.jpg" title="Cappuccino" imgAlt="Cappuccino" />
            <MenuItem imgSrc="/images/vanilla-latte.jpg" title="Vanilla Latte" imgAlt="Vanilla Latte" />
            <MenuItem imgSrc="/images/ristretto.jpg" title="Ristretto" imgAlt="Ristretto Coffee" />
            <MenuItem imgSrc="/images/chocolatechip.jpg" title="Coffee Chocolate Chip Cookies" imgAlt="Coffee Chocolate Chip Cookies" />
            <MenuItem imgSrc="/images/affogato-coffee.jpg" title="Affogato Coffee" imgAlt="Affogato Coffee" />
            <MenuItem imgSrc="/images/walnut-cake.jpg" title="Walnut Cake" imgAlt="Walnut Cake" />
            <MenuItem imgSrc="/images/italian-rum-cake.jpg" title="Italian Rum Cakes" imgAlt="Italian Rum Cakes" />
            <MenuItem imgSrc="/images/classic-pizzelle.jpg" title="Classic Pizzelle" imgAlt="Classic Pizzelle" />
          </div>

          {/* Footer */}
          <footer className="menu-footer">
            <p>
              These are just a few selections of coffee and snacks in our <span className="highlight">Caffè</span>.
              There are more in our house, some include traditional Italian snacks and drinks.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
