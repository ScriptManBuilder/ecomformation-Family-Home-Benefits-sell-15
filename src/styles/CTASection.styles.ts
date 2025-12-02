import styled from 'styled-components';

export const CTAContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 60%),
                radial-gradient(circle at 70% 50%, rgba(239, 68, 68, 0.06) 0%, transparent 60%);
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

export const CTAContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 2.75rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
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
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #DC2626, #991B1B);
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
    margin-bottom: 1.25rem;
  }

  @media (max-width: 375px) {
    font-size: 1.35rem;
  }

  @media (max-width: 320px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const CTADescription = styled.p`
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  margin-top: 2rem;
  color: #5a6c7d;
  line-height: 1.7;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTASectionButton = styled.button`
  background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
  color: white;
  border: none;
  padding: 1.1rem 3rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(220, 38, 38, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(220, 38, 38, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const CTAFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  text-align: left;

  @media (max-width: 1024px) {
    gap: 1.75rem;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 425px) {
    gap: 1.25rem;
    margin-top: 2rem;
  }
`;

export const CTAFeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.75rem;
  border-radius: 12px;
  background: white;
  border: 1px solid rgba(220, 38, 38, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(220, 38, 38, 0.15);
    border-color: rgba(220, 38, 38, 0.2);
    transform: translateY(-4px);
  }
`;

export const CTAIconWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: linear-gradient(135deg, #DC2626, #EF4444);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);
  transition: all 0.3s ease;

  svg {
    width: 26px;
    height: 26px;
    color: white;
  }

  ${CTAFeatureItem}:hover & {
    transform: scale(1.1) rotate(-5deg);
    box-shadow: 0 6px 16px rgba(220, 38, 38, 0.35);
  }
`;

export const CTAFeatureContent = styled.div`
  flex: 1;
`;

export const CTAFeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #0a2540;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const CTAFeatureDescription = styled.p`
  color: #5a6c7d;
  line-height: 1.6;
  font-size: 0.95rem;
`;
