import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

export const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    padding: 1rem 2rem;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 0.875rem 1rem;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 0.875rem;
  }

  @media (max-width: 320px) {
    padding: 0.75rem 0.75rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.35rem;
  font-weight: 700;
  color: #0a2540;
  letter-spacing: -0.02em;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 28px;
    height: 28px;
    color: #DC2626;
  }

  @media (max-width: 768px) {
    font-size: 1.15rem;
    gap: 0.5rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    gap: 0.4rem;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 1440px) {
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #5a6c7d;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: all 0.2s ease;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #DC2626;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #0a2540;

    &::after {
      width: 100%;
    }
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.65rem 1.5rem;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: -0.01em;
  background: ${props => props.$primary ? 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)' : 'transparent'};
  color: ${props => props.$primary ? 'white' : '#5a6c7d'};
  border: ${props => props.$primary ? 'none' : '1.5px solid #e3e8ef'};
  box-shadow: ${props => props.$primary ? '0 2px 8px rgba(220, 38, 38, 0.15)' : 'none'};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.$primary ? '0 4px 16px rgba(220, 38, 38, 0.25)' : '0 2px 8px rgba(0, 0, 0, 0.08)'};
    background: ${props => props.$primary ? 'linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%)' : '#f8f9fb'};
    color: ${props => props.$primary ? 'white' : '#0a2540'};
    border-color: ${props => props.$primary ? 'transparent' : '#d1d9e3'};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 0.6rem 1.25rem;
    font-size: 0.85rem;
  }
`;
