import styled from 'styled-components';

export const FAQContainer = styled.section`
  padding: 6rem 2rem;
  background: #ffffff;

  @media (max-width: 1024px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 3rem 1.25rem;
  }
`;

export const FAQContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const FAQTitle = styled.h2`
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
    background: linear-gradient(90deg, #DC2626, #EF4444);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.85rem;
  }
`;

export const FAQDescription = styled.p`
  text-align: center;
  color: #5a6c7d;
  font-size: 1.15rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FAQItem = styled.div<{ $isOpen: boolean }>`
  background: white;
  border: 1px solid ${props => props.$isOpen ? 'rgba(220, 38, 38, 0.2)' : 'rgba(0, 0, 0, 0.08)'};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isOpen ? '0 4px 16px rgba(220, 38, 38, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.04)'};

  &:hover {
    border-color: rgba(220, 38, 38, 0.15);
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.08);
  }

  @media (max-width: 425px) {
    border-radius: 8px;
  }
`;

export const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem 1.75rem;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.15rem;
  font-weight: 600;
  color: #0a2540;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #DC2626;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
    padding: 1.25rem 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    padding: 1rem 1.25rem;
  }
`;

export const FAQIcon = styled.div<{ $isOpen: boolean }>`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #DC2626;
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 425px) {
    width: 24px;
    height: 24px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${props => props.$isOpen ? '0 1.75rem 1.5rem 1.75rem' : '0 1.75rem'};
  color: #5a6c7d;
  line-height: 1.7;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: ${props => props.$isOpen ? '0 1.5rem 1.25rem 1.5rem' : '0 1.5rem'};
    font-size: 0.95rem;
  }

  @media (max-width: 425px) {
    padding: ${props => props.$isOpen ? '0 1.25rem 1rem 1.25rem' : '0 1.25rem'};
    font-size: 0.9rem;
  }
`;
