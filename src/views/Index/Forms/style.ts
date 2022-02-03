import { motion } from "framer-motion";
import styled from "styled-components";

import { TextField, Box, CircularProgress } from "@mui/material";
export const Container = styled(motion.div)`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 100px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 35%;
  padding: 20px;
  color: ${({ theme }) => theme.colors.text};
  gap: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1024px) {
    width: clamp(270px, 80vw, 400px);
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.primary};
  }

  h3 {
    margin: 20px 0 15px 0 !important;
  }
`;

export const InputComponent = styled(TextField)`
  .Mui-focused :not(.Mui-error) {
    color: ${({ theme }) => theme.colors.primary} !important;
    opacity: 1;

    input,
    textarea {
      color: ${({ theme }) => theme.colors.text};
    }

    &:after {
      border-bottom-color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  input:not(.Mui-error),
  textarea:not(.Mui-error) {
    color: ${({ theme }) => theme.colors.text} !important;
  }

  label:not(.Mui-error) {
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  p:not(.Mui-error) {
    color: ${({ theme }) => theme.colors.third};
    opacity: 0.7;
  }
`;

export const Button = styled.button`
  width: min-content;
  border-radius: 50px;
  padding: 3% 6%;
  cursor: pointer;
  z-index: 10;
  transition: 0.5s;
  background-color: ${(props) => props.theme.colors.secondary};
  color: #f5f5f5;
  font-family: "Roboto", sans-serif;
  font-size: clamp(16px, 1vw, 18px);
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  margin-bottom: 20px;
  &:hover {
    transform: translateX(5px);
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.colors.secondary};
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
    margin: auto;
  }
`;

export const LoadingComponent = styled(CircularProgress)`
  color: ${({ theme }) => theme.colors.secondary} !important;
`;

export const SectionImg = styled.div`
  width: 35%;
  z-index: 10;
  transition: 0.5s;

  svg {
    transition: 0.5s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);
    svg {
      filter: drop-shadow(0px 0px 1px ${({ theme }) => theme.colors.primary});
    }
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
