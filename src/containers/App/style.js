import styled, { keyframes } from 'styled-components';
import { palette } from 'styled-theme';
import WithDirection from '../../settings/withDirection';
import Buttons from '../../components/uielements/button';
import Icons from '../../components/uielements/icon';

const spinning = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`;

const Icon = styled(Icons)``;

const Button = styled(Buttons)`
  width: 45px;
  height: 45px;
  min-width: auto;
  border-radius: 5px 0 0 5px;
  position: fixed;
  bottom: 100px;
  right: 0;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &.active {
    right: 340px;

    @media only screen and (max-width: 767px) {
      right: 300px;
    }
  }

  ${Icon} {
    font-size: 18px;
    animation: ${spinning} 2.5s linear infinite;
  }
`;

const Main = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: ${palette('grey', 1)};
  padding: 0;
  margin-top: 64px;
  transition: all 0.2s ease-in-out;
  position: relative;
  @media only screen and (max-width: 767px) {
    flex-shrink: 0;
  }

  .scrollWrapper {
    height: calc(100vh - 65px);
  }

  .router-transition {
    position: relative;
  }

  .router-transition > div {
    position: absolute;
    width: 100%;
  }
`;

const Root = styled.div`
  width: 100%;
  z-index: 1;
  overflow: hidden;
`;

const AppFrame = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

export default WithDirection(Main);
export { Root, AppFrame, Button, Icon };
