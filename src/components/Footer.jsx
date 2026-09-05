import { profileData } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        © {year} {profileData.name} · rendered in 1 frame, 0 overflow errors
      </div>
    </footer>
  );
}
