import { css } from "styled-components";

const ButtonCommonStyle = css`
  button {
    cursor: pointer;
    border: transparent;
    background-color: transparent;

    text-align: center;
  }

  button.emphasis {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    display: block;
    width: auto;
    color: var(--primary);
    font-size: 0.875rem;
  }

  /* defult button */
  button.Primary {
    width: 100%;

    padding: 14px 0;

    border-radius: 8px;
    font-weight: bold;
    font-size: 1.125rem;
    color: white;
    background-color: var(--primary);
    transition: all 0.3s ease;
  }
  button.Primary:hover {
    background-color: var(--primary-hover);
  }

  /* secondary */
  button.Secondary {
    width: 100%;

    padding: 14px 0;

    border-radius: 8px;
    color: white;
    background-color: var(--secondary);
    transition: all 0.3s ease;
  }

  button.Secondary:hover {
    background-color: var(--secondary-hover);
  }

  /* disabled button */
  button.Disabled {
    width: 100%;

    padding: 14px 0;

    border-radius: 8px;
    color: var(--disabled-font);
    background-color: var(--disabled);
    transition: all 0.3s ease;
  }
`;

export default ButtonCommonStyle;
