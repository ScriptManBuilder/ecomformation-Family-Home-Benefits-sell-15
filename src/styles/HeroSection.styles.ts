import styled from 'styled-components';

export const HeroContainer = styled.section`
  background: linear-gradient(135deg, #450A0A 0%, #7F1D1D 50%, #991B1B 100%);
  padding: 8rem 2rem;
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
    background: radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to top, rgba(248, 249, 250, 0.1), transparent);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    padding: 6rem 2rem;

    &::after {
      height: 100px;
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;

    &::after {
      height: 80px;
    }
  }

  @media (max-width: 425px) {
    padding: 4rem 1.25rem;

    &::after {
      height: 60px;
    }
  }

  @media (max-width: 375px) {
    padding: 3.5rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 3rem 0.875rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Tagline = styled.p`
  display: inline-block;
  color: #FCA5A5;
  background: rgba(252, 165, 165, 0.15);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid rgba(252, 165, 165, 0.3);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
    padding: 0.35rem 0.875rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.75rem;
  line-height: 1.15;
  margin-bottom: 1.75rem;
  color: #ffffff;
  font-weight: 800;
  letter-spacing: -0.03em;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  @media (max-width: 320px) {
    font-size: 1.35rem;
    margin-bottom: 1rem;
  }
`;

export const Highlight = styled.span`
  background: linear-gradient(135deg, #FCA5A5 0%, #DC2626 50%, #991B1B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #DC2626, transparent);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    &::after {
      width: 80px;
      height: 3px;
    }
  }

  @media (max-width: 425px) {
    &::after {
      width: 60px;
      height: 2px;
    }
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
  line-height: 1.7;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 500px;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 1.75rem;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
  }
`;

export const CTAButtonGroup = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

export const CTAButtonPrimary = styled.button`
  background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
  color: white;
  border: none;
  padding: 1.15rem 3rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(220, 38, 38, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 350px;
  }

  @media (max-width: 375px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    padding: 0.65rem 1.25rem;
    font-size: 0.85rem;
  }
`;

export const CTAButtonSecondary = styled.button`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1.05rem 2.85rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.825rem 1.85rem;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding: 0.7rem 1.6rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 350px;
  }

  @media (max-width: 375px) {
    padding: 0.65rem 1.4rem;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`;
