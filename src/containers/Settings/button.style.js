import styled from 'styled-components';
import Buttons from '../../components/uielements/button';
import WithDirection from '../../settings/withDirection';

const ButtonStyle = styled(Buttons)`
  margin: auto;
  color: white;
  background-color: #07a907;
  float: right;
  .leftIcon {
    margin-right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '8px')};
    margin-left: ${props => (props['data-rtl'] === 'rtl' ? '8px' : 'auto')};
  }

  .rightIcon {
    margin-left: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '8px')};
    margin-right: ${props => (props['data-rtl'] === 'rtl' ? '8px' : 'auto')};
  }
`;

const Input = styled.input`display: none;`;

const Button = WithDirection(ButtonStyle);

export { Button, Input };
