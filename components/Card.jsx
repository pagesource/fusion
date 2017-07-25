import styled from 'styled-components';

const Card = styled.div.attrs({
  width: props => props.width
})`
  overflow: hidden;
  box-shadow: inset 0 0 0 1px #dee1e3, 0 0 4px #dee1e3;
  border-radius: 4px;
  width: ${props => props.width}%;
  background-color: #fff;
`;

export default Card;