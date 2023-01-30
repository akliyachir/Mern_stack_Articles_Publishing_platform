export default function GlobalVoileCloseMenu({ isMenuOpen, closeSideMenu }) {
  return (
    <div
      className={
        isMenuOpen ? 'GlobalVoileCloseMenuOpen' : 'GlobalVoileCloseMenuClosed'
      }
      onClick={closeSideMenu}
    ></div>
  );
}
