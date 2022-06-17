import styled from "@emotion/styled";

export const styles = {
  menuItem: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "0.0015em",
    color: "#FFF0F0",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
};

export const MenuItem = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0015em;
  color: #fff0f0;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: #fad9d9;
  }
`;
