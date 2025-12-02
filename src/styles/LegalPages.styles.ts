import styled from 'styled-components';

export const LegalPageContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

export const LegalHeroSection = styled.div`
  background: linear-gradient(135deg, #450A0A 0%, #7F1D1D 50%, #991B1B 100%);
  padding: 6rem 2rem 4rem;
  text-align: center;
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
                radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 3rem;
  }

  @media (max-width: 425px) {
    padding: 4rem 1rem 2.5rem;
  }
`;

export const LegalTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.75rem;
  }
`;

export const LegalContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 2rem 1rem;
  }
`;

export const LegalSection = styled.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 425px) {
    margin-bottom: 2.5rem;
  }
`;

export const LegalSectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0a2540;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid #DC2626;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom-width: 2px;
  }
`;

export const LegalParagraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #2c3e50;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0.875rem;
  }
`;

export const LegalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  @media (max-width: 425px) {
    margin: 1.25rem 0;
  }
`;

export const LegalListItem = styled.li`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #2c3e50;
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #DC2626;
    font-weight: 700;
    font-size: 1.25rem;
  }

  strong {
    color: #0a2540;
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0.875rem;
    padding-left: 1.5rem;

    &::before {
      font-size: 1.1rem;
    }
  }
`;
