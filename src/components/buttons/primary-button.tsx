import { FC, ReactNode, memo } from "react";
import styled from "styled-components";
import { BaseButton } from "./base-button";

type Props = {
  children: ReactNode;
  onClick: () => void;
  style?: {};
};
export const PrimaryButton: FC<Props> = memo((props) => {
  console.log("PrimaryButton Rendering");
  const { children, onClick, style } = props;
  return (
    <>
      <SButton onClick={onClick} style={style}>
        {children}
      </SButton>
    </>
  );
});

// export const PrimaryButton = function PrimaryButton(props) {
//   const { children, onClick, style } = props;
//   console.log("PrimaryButton Rendered");
//   return (
//     <>
//       <SButton onClick={onClick} style={style}>
//         {children}
//       </SButton>
//     </>
//   );
// };

const SButton = styled(BaseButton)`
  background-color: var(--yellow-50);
  width: 170px;
`;
