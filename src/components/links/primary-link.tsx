import { FC, ReactNode, memo } from "react";
import styled from "styled-components";
import { BaseLink } from "./base-link";

type Props = {
  children: ReactNode;
  href: string;
};
export const PrimaryLink: FC<Props> = memo(function PrimaryLink(props) {
  const { children, href } = props;
  console.log("PrimaryLink Rendered");
  return (
    <>
      <SBaseLink href={href}>{children}</SBaseLink>
    </>
  );
});

const SBaseLink = styled(BaseLink)`
  background-color: var(--orange-accent);
`;
