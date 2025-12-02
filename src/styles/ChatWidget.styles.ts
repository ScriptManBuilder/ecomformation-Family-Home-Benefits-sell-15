import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(13, 148, 136, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(13, 148, 136, 0);
  }
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
  }

  @media (max-width: 425px) {
    bottom: 8px;
    right: 8px;
    left: 8px;
  }
`;

export const ChatButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(220, 38, 38, 0.4);
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;

  svg {
    width: 32px;
    height: 32px;
    color: white;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(220, 38, 38, 0.5);
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const ChatWindow = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideIn} 0.3s ease;

  @media (max-width: 768px) {
    width: calc(100vw - 32px);
    height: calc(100vh - 100px);
    max-height: 600px;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: calc(100vh - 16px);
    max-height: none;
    border-radius: 8px;
  }

  @media (max-width: 375px) {
    height: calc(100vh - 16px);
  }
`;

export const ChatHeader = styled.div`
  background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-shrink: 0;

  @media (max-width: 425px) {
    padding: 0.875rem 1rem;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 0.875rem;
  }
`;

export const ChatTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 1rem;
  }

  @media (max-width: 375px) {
    font-size: 0.95rem;
  }
`;

export const ChatSubtitle = styled.p`
  font-size: 0.875rem;
  margin: 0.25rem 0 0;
  opacity: 0.95;

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }

  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    color: white;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const ChatBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: #f5f5f5;

  @media (max-width: 425px) {
    padding: 1rem;
  }

  @media (max-width: 375px) {
    padding: 0.875rem;
  }
`;

export const ChatForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 425px) {
    gap: 0.75rem;
  }

  @media (max-width: 375px) {
    gap: 0.625rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 375px) {
    gap: 0.375rem;
  }
`;

export const FormLabel = styled.label`
  font-size: 0.875rem;
  color: #333;
  font-weight: 500;

  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #DC2626;
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 425px) {
    padding: 0.625rem;
    font-size: 0.9rem;
  }
`;

export const FormTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  background: white;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: #DC2626;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 425px) {
    padding: 0.625rem;
    font-size: 0.9rem;
    min-height: 70px;
  }

  @media (max-width: 375px) {
    padding: 0.5rem;
    font-size: 0.85rem;
    min-height: 60px;
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 425px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
  }

  @media (max-width: 375px) {
    padding: 0.625rem 1rem;
    font-size: 0.9rem;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const SuccessAlert = styled.div`
  background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  gap: 1.25rem;
  align-items: center;
  animation: ${fadeIn} 0.4s ease;
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);

  @media (max-width: 425px) {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 375px) {
    padding: 1.25rem;
    gap: 1rem;
  }
`;

export const AlertIcon = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 32px;
    height: 32px;
    color: white;
  }

  @media (max-width: 425px) {
    width: 48px;
    height: 48px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const AlertContent = styled.div`
  flex: 1;
  color: white;
`;

export const AlertTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }
`;

export const AlertMessage = styled.p`
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;
