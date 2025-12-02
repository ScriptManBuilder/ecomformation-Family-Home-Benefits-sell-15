import styled from 'styled-components';

export const FeaturesContainer = styled.section`
  padding: 6rem 2rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(10, 37, 64, 0.02) 0%, transparent 100%);
    pointer-events: none;
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

export const FeaturesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2.75rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #0a2540;
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
    background: linear-gradient(90deg, #DC2626, #FCA5A5);
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 375px) {
    font-size: 1.35rem;
  }

  @media (max-width: 320px) {
    font-size: 1.25rem;
  }
`;

export const SectionDescription = styled.p`
  text-align: center;
  color: #5a6c7d;
  font-size: 1.15rem;
  margin-bottom: 4.5rem;
  margin-top: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-top: 2rem;
  }
`;

export const FeatureCard = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #DC2626, #991B1B);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(220, 38, 38, 0.15);
    border-color: rgba(220, 38, 38, 0.2);

    &::before {
      transform: scaleX(1);
    }
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

export const IconWrapper = styled.div<{ $color: string }>`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
  background: ${props => props.$color};
  box-shadow: 0 8px 24px ${props => props.$color}40;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    padding: 2px;
    background: linear-gradient(135deg, ${props => props.$color}, transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${FeatureCard}:hover & {
    transform: scale(1.05) rotate(-5deg);

    &::after {
      opacity: 1;
    }
  }

  svg {
    width: 32px;
    height: 32px;
    color: white;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #0a2540;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const FeatureDescription = styled.p`
  color: #5a6c7d;
  line-height: 1.7;
  font-size: 0.95rem;
`;
