import styled from "@emotion/styled";
import imageUrl from "../assets/images/banner.jpg";
export const Banner = styled.div`
  min-height: 466px;
  border-radius: 5px;
  background-image: url(${imageUrl});
  margin-top: 32px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 4px 1.6px 22px rgba(0, 0, 0, 0.3);
  @media (max-width: 595px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    border-radius: 0;
  }
`;

export const BannerTitle = styled.h1`
  width: 481px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;

  @media (max-width: 595px) {
    font-size: 34px;
    line-height: 39px;
    width: auto;
    padding: 20px;
    text-align: center;
  }

  /* Gray-1 */

  color: #fad9d9;
`;

export const BannerButton = styled.div`
  margin-top: 30px;
  display: inline-block;
  padding: 10px 62px;
  @media (max-width: 595px) {
    padding: 20px 62px;
  }
  background: #ffe9da;
  box-shadow: 7px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  cursor: pointer;
  transition: all 0.2s;
  color: #729ab1;
  text-transform: uppercase;

  &:hover {
    background-color: #d7b6a0;
    transform: translateY(-3px);
    color: #cadfec;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BannerContent = styled.div`
  margin-left: 78px;
  /* margin-top: 83px; */
  padding-top: 83px;
  display: flex;
  flex-direction: column;
  @media (max-width: 595px) {
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-left: 87px;
    @media (max-width: 595px) {
      margin-left: 5px;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    }
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;

    /* Primary Dark */

    color: #cba4a4;
  }
`;

export const CustomButton = styled.div`
  display: inline-block;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff0f0;
  background-color: #d7b6a0;
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 10px 30px;
  text-transform: uppercase;
  border-radius: 100px;
  cursor: pointer;
  &:hover {
    color: #d7b6a0;
    background-color: #fff0f0;
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(0);
  }
`;
