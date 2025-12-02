import styled from 'styled-components';

export const StatsContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #450A0A 0%, #7F1D1D 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }

  @media (max-width: 1024px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 3rem 1.25rem;
  }

  @media (max-width: 375px) {
    padding: 2.5rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 2rem 0.875rem;
  }
`;

export const StatsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StatsSectionTitle = styled.h2`
  font-size: 2.75rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #DC2626, #991B1B);
    border-radius: 2px;
  }
`;

export const StatsSectionDescription = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.15rem;
  margin-bottom: 4.5rem;
  margin-top: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 425px) {
    gap: 1.25rem;
    margin-top: 2rem;
  }
`;

export const StatCard = styled.div<{ $background: string }>`
  padding: 2.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.$background};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.$background};
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 48px rgba(220, 38, 38, 0.3);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      transform: scaleX(1);
    }

    &::after {
      opacity: 0.1;
    }
  }

  > * {
    position: relative;
    z-index: 1;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
  }

  @media (max-width: 425px) {
    padding: 1.75rem;

    &:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 375px) {
    padding: 1.5rem;
  }

  @media (max-width: 320px) {
    padding: 1.25rem;
  }
`;

export const StatTitle = styled.h3`
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
  opacity: 0.95;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

export const StatDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  opacity: 0.7;
  line-height: 1.6;
`;

export const StatValue = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  margin-top: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #FCA5A5, transparent);
    border-radius: 2px;
  }

  ${StatCard}:hover & {
    transform: scale(1.05);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 1024px) {
    font-size: 2.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 2.25rem;
  }

  @media (max-width: 375px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.85rem;
  }
`;
