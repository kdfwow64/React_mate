import styled from 'styled-components';
import { palette } from 'styled-theme';

const HelperText = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 500;
    color: ${palette('grey', 8)};
    margin: 0;
  }
`;

export default HelperText;
