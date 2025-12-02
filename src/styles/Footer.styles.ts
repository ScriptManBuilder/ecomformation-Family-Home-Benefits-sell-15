import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #0F172A 0%, #020617 100%);
  color: #e3e8ef;
  padding: 5rem 3rem 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.5), transparent);
  }

  @media (max-width: 1024px) {
    padding: 4.5rem 2.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 2rem;
  }

  @media (max-width: 425px) {
    padding: 3rem 1.25rem 1.5rem;
  }

  @media (max-width: 375px) {
    padding: 2.5rem 1rem 1.5rem;
  }

  @media (max-width: 320px) {
    padding: 2rem 0.875rem 1.25rem;
  }
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 425px) {
    gap: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 375px) {
    gap: 1.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 320px) {
    gap: 1.5rem;
    margin-bottom: 1.75rem;
  }
`;

export const FooterSection = styled.div``;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;

  svg {
    width: 28px;
    height: 28px;
    color: #DC2626;
    filter: drop-shadow(0 2px 4px rgba(124, 58, 237, 0.3));
  }
`;

export const CompanyInfo = styled.div`
  color: #8b96a5;
  line-height: 1.8;
  margin-top: 1rem;
  font-size: 0.9rem;

  p {
    margin: 0.5rem 0;
    transition: color 0.2s ease;

    &:hover {
      color: #b4bec8;
    }
  }
`;

export const FooterSectionTitle = styled.h3`
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  padding-bottom: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #DC2626, transparent);
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 0.85rem;
`;

export const FooterLink = styled.a`
  color: #8b96a5;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  display: inline-block;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  text-align: left;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #DC2626;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    transform: translateX(3px);

    &::after {
      width: 100%;
    }
  }
`;

export const ContactInfo = styled.div`
  color: #8b96a5;
  line-height: 1.8;
  font-size: 0.9rem;

  p {
    margin-bottom: 1.25rem;
  }

  strong {
    display: block;
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  a {
    color: #DC2626;
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: #DC2626;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #FCA5A5;

      &::after {
        width: 100%;
      }
    }
  }
`;

export const ContactCard = styled.div`
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.06) 0%, rgba(109, 40, 217, 0.02) 100%);
  border: 1px solid rgba(124, 58, 237, 0.12);
  border-radius: 8px;
  padding: 1.25rem 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(124, 58, 237, 0.25);
    box-shadow: 0 4px 16px rgba(124, 58, 237, 0.1);
  }
`;

export const ContactItem = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactLabel = styled.div`
  color: #8b96a5;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.35rem;
  font-weight: 600;
`;

export const ContactValue = styled.a`
  color: #ffffff;
  font-size: 0.875rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  word-break: break-all;

  svg {
    width: 15px;
    height: 15px;
    color: #DC2626;
    flex-shrink: 0;
  }

  &:hover {
    color: #DC2626;
    transform: translateX(2px);
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 2.5rem;
  text-align: center;
  color: #5a6c7d;
  font-size: 0.85rem;

  p {
    margin: 0.5rem 0;
    line-height: 1.6;

    &:first-child {
      color: #8b96a5;
      font-weight: 500;
    }

    &:last-child {
      color: #5a6c7d;
      margin-top: 0.75rem;
    }
  }
`;
