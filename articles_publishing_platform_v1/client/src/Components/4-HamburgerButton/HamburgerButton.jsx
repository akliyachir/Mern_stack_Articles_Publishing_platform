export default function HamburgerButton({ handleToggleSideBar }) {
  return (
    <div className='hamburgerIcon' onClick={handleToggleSideBar}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
