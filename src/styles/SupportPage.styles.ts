import styled from 'styled-components';

export const SupportContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

export const SupportHero = styled.section`
  background: linear-gradient(135deg, #450A0A 0%, #991B1B 50%, #991B1B 100%);
  padding: 5rem 3rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 650px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(252, 165, 165, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.05), transparent);
    pointer-events: none;
  }

  & > div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  @media (max-width: 1024px) {
    & > div {
      flex-direction: column;
      gap: 3rem;
    }
    min-height: auto;
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 2.5rem 1.25rem;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 650px;
  text-align: left;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const HeroImageWrapper = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 550px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 500px;
  filter: drop-shadow(0 20px 50px rgba(220, 38, 38, 0.4));
  border-radius: 20px;

  @media (max-width: 768px) {
    max-height: 400px;
  }

  @media (max-width: 425px) {
    max-height: 300px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.85rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ContactInfo = styled.div`
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.25) 0%, rgba(153, 27, 27, 0.15) 100%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(252, 165, 165, 0.3);
  border-radius: 16px;
  padding: 2.25rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.75rem;
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.2);

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 425px) {
    padding: 1.75rem;
    gap: 1.25rem;
  }
`;

export const PhoneIcon = styled.div`
  width: 68px;
  height: 68px;
  background: linear-gradient(135deg, #DC2626 0%, #EF4444 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(220, 38, 38, 0.35);

  svg {
    width: 34px;
    height: 34px;
    color: white;
  }

  @media (max-width: 425px) {
    width: 60px;
    height: 60px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const PhoneNumber = styled.a`
  font-size: 2.1rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    color: #FCA5A5;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }

  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
`;

export const AvailabilityText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  color: #DC2626;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 1.1rem 2.25rem;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 20px rgba(220, 38, 38, 0.25);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #DC2626 0%, #EF4444 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  svg {
    width: 22px;
    height: 22px;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(124, 58, 237, 0.35);
    border-color: rgba(124, 58, 237, 0.3);

    &::before {
      opacity: 0.08;
    }

    svg {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 425px) {
    width: 100%;
    justify-content: center;
    padding: 1rem 1.75rem;
    font-size: 1rem;
  }
`;

export const HelpSection = styled.section`
  padding: 7rem 2rem;
  background: linear-gradient(180deg, #ffffff 0%, #FEE2E2 50%, #ffffff 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1200px;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.2) 50%, transparent 100%);
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 4rem 1.25rem;
  }
`;

export const HelpTitle = styled.h2`
  font-size: 2.75rem;
  text-align: center;
  margin-bottom: 1.25rem;
  color: #450A0A;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #DC2626 0%, #FCA5A5 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 1.85rem;
    margin-bottom: 0.85rem;
  }
`;

export const HelpSubtitle = styled.p`
  font-size: 1.15rem;
  text-align: center;
  color: #5a6c7d;
  margin-bottom: 4.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: 425px) {
    font-size: 0.98rem;
    margin-bottom: 3rem;
  }
`;

export const HelpGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 425px) {
    gap: 1.25rem;
  }
`;

export const HelpCard = styled.div`
  background: white;
  padding: 2.75rem;
  border-radius: 20px;
  border: 2px solid rgba(124, 58, 237, 0.08);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #DC2626 0%, #FCA5A5 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    box-shadow: 0 8px 20px rgba(220, 38, 38, 0.25);
    border-color: rgba(124, 58, 237, 0.2);
    transform: translateY(-8px);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 2.25rem;
  }

  @media (max-width: 425px) {
    padding: 2rem;
  }
`;

export const HelpIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #DC2626 0%, #EF4444 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.25);
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #DC2626, #FCA5A5);
    border-radius: 18px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  svg {
    width: 32px;
    height: 32px;
    color: white;
    transition: transform 0.3s ease;
  }

  ${HelpCard}:hover & {
    transform: scale(1.08) rotate(-3deg);

    &::before {
      opacity: 0.3;
    }

    svg {
      transform: scale(1.1);
    }
  }

  @media (max-width: 425px) {
    width: 56px;
    height: 56px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const HelpCardTitle = styled.h3`
  font-size: 1.4rem;
  color: #450A0A;
  margin-bottom: 0.85rem;
  font-weight: 700;
  letter-spacing: -0.01em;

  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

export const HelpCardDescription = styled.p`
  color: #64748b;
  line-height: 1.7;
  font-size: 1rem;

  @media (max-width: 425px) {
    font-size: 0.95rem;
  }
`;

// FAQ Section Styles
export const FAQSection = styled.section`
  max-width: 950px;
  margin: 0 auto;
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #ffffff 0%, #FAF8FF 100%);

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 4rem 1.25rem;
  }
`;

export const FAQSectionTitle = styled.h2`
  font-size: 2.75rem;
  color: #450A0A;
  text-align: center;
  margin-bottom: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #DC2626 0%, #FCA5A5 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 1.9rem;
    margin-bottom: 0.85rem;
  }
`;

export const FAQSectionDescription = styled.p`
  font-size: 1.15rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: 425px) {
    font-size: 0.98rem;
    margin-bottom: 3rem;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FAQItem = styled.div`
  background: #ffffff;
  border: 2px solid rgba(124, 58, 237, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(124, 58, 237, 0.06);

  &:hover {
    border-color: rgba(124, 58, 237, 0.3);
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.15);
    transform: translateX(4px);
  }
`;

export const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 1.75rem 1.75rem 1.75rem 2rem;
  background: ${props => props.$isOpen ? 'linear-gradient(135deg, #FEE2E2 0%, #EDE9FE 100%)' : '#ffffff'};
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: ${props => props.$isOpen ? '#DC2626' : '#450A0A'};
  transition: all 0.3s ease;
  position: relative;

  ${props => props.$isOpen && `
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(180deg, #DC2626 0%, #FCA5A5 100%);
    }
  `}

  &:hover {
    background: linear-gradient(135deg, #FEE2E2 0%, #EDE9FE 100%);
    color: #DC2626;
  }

  span {
    flex: 1;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 1.5rem 1.75rem;
    font-size: 1.05rem;
  }

  @media (max-width: 425px) {
    padding: 1.25rem 1.25rem 1.25rem 1.5rem;
    font-size: 1rem;
    gap: 1rem;
  }
`;

export const FAQAnswer = styled.div`
  padding: 0 2rem 2rem 2rem;
  color: #64748b;
  line-height: 1.8;
  font-size: 1.05rem;
  animation: fadeIn 0.4s ease;
  border-left: 4px solid transparent;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 0 1.75rem 1.75rem 1.75rem;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding: 0 1.5rem 1.5rem 1.5rem;
    font-size: 0.95rem;
  }
`;

export const FAQIcon = styled.div<{ $isOpen: boolean }>`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: all 0.3s ease;
  flex-shrink: 0;
  background: ${props => props.$isOpen ? 'linear-gradient(135deg, #DC2626, #EF4444)' : 'transparent'};
  border-radius: 50%;
  padding: 4px;

  svg {
    width: 100%;
    height: 100%;
    color: ${props => props.$isOpen ? '#ffffff' : '#DC2626'};
    transition: color 0.3s ease;
  }

  @media (max-width: 425px) {
    width: 24px;
    height: 24px;
  }
`;
