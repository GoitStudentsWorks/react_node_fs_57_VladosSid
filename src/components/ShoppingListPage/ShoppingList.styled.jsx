import styled from 'styled-components';
import theme from '../../style/generalStyle';


export const TitltList = styled.div`
  display: flex;
  max-width: 357px;
  background: #8baa36;
  border-radius: 8px;
  padding: 10px;
  color: #fafafa;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 18px;

  @media ${theme.device.tablet} {
    max-width: 734px;
    font-size: 18px;
    line-height: 27px;
    padding: 20px;
  }
  @media ${theme.device.desktop} {
    max-width: 1240px;
    padding: 21px 40px;
  } ;
`;

export const TitleListProducts = styled.span`
  margin-right: auto;
`;

export const TitleListNumber = styled.span`
  margin-right: 24px;

  @media ${theme.device.tablet} {
    margin-right: 78px;
  }

  @media ${theme.device.desktop} {
    margin-right: 124px;
  }
`;


export const ImgIngradientsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding:100px;

`;
