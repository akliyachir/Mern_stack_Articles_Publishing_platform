export default function GlobalVoileCloseMenu({
  isMenuOpen,
  closeSideMenu,
  closeUserSideMenu,
  isUserMenuOpen,
}) {
  return (
    <div
      className={
        isMenuOpen || isUserMenuOpen
          ? 'GlobalVoileCloseMenuOpen'
          : 'GlobalVoileCloseMenuClosed'
      }
      onClick={() => {
        closeUserSideMenu();
        closeSideMenu();
      }}
    ></div>
  );
}
