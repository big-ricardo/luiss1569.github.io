import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  gap: 3%;

  .content {
    width: clamp(270px, 25vw + 1em, 500px);
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
      width: 90%;
    }

    h4 {
      color: ${(props) => props.theme.colors.title};
      width: 160px;
    }

    .progress {
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: row;
      text-align: center;
      border-radius: 7px;
      cursor: pointer;

      &:hover {
        span {
          transform: scale(1.1);
        }
        .progress-bar,
        .progress-bar-dummies, span {
          box-shadow: 0px 5px 5px 0px
            ${(props) => props.theme.colors.shadow};
        }
        .progress-bar {
          transform: scaleY(1.2);
          &:before {
            opacity: 1;
          }
        }
      }
    }

    .progress-bar,
    .progress-bar-dummies {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      height: 10px;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 5px;
      z-index: 1;
      transition: all 0.5s ease;
    }

    .progress-bar {
      &:before {
        opacity: 0.4;
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: linear-gradient(
          45deg,
          transparent 25%,
          rgba(238, 238, 238, 0.5) 25%,
          rgba(238, 238, 238, 0.5) 30%,
          transparent 30%,
          transparent 35%,
          rgba(238, 238, 238, 0.5) 35%,
          rgba(238, 238, 238, 0.5) 70%,
          transparent 70%
        );
        animation: shift 2s linear infinite;
        background-size: 60px 100%;
        box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.2),
          inset 0 -2px 1px rgba(0, 0, 0, 0.2);
      }
      @keyframes shift {
        to {
          background-position: 60px 100%;
        }
      }
    }

    .progress-bar-dummies {
      background-color: ${(props) => props.theme.colors.secondary};
      opacity: 0.5;
    }

    span {
      color: ${(props) => props.theme.colors.backgroundColor};
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
      background: ${(props) => props.theme.colors.primary};
      text-align: center;
      line-height: 40px;
      border-radius: 50px;
      font-weight: 600;
      letter-spacing: 0px;
      font-size: 15px;
      margin-left: -5px;
      margin-right: -5px;
      z-index: 2;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;
