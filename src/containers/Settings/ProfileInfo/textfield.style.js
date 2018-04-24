import styled from 'styled-components';
import { palette } from 'styled-theme';
import Inputs, {
  InputLabel as InputLabels,
  InputAdornment as InputAdornments,
} from '../../../components/uielements/input';
import TextFields from '../../../components/uielements/textfield';
import {
  FormControl as FormControls,
  FormHelperText as FormHelperTexts,
} from '../../../components/uielements/form';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  .menu {
    width: 200px;
  }
`;

const InputLabel = styled(InputLabels)`
  &.inputLabelFocused {
    color: ${palette('purple', 5)};
    border-color: ${palette('purple', 5)};
  }
`;

const InputAdornment = styled(InputAdornments)``;
const Input = styled(Inputs)`
  margin: 8px;
`;

const TextField = styled(TextFields)`
  margin: 0 8px 16px;
  width: calc(50% - 16px);
`;

const DisableField = styled(TextFields)`
  margin: 0 8px 16px;
  width: calc(50% - 16px);
  #afflillate_code {
    background-color: #cececec9;
    border-radius: 5px;
    padding-left: 10px;
  }
  #username {
    background-color: #cececec9;
    border-radius: 5px;
    padding-left: 10px;
  }
`;

const FormHelperText = styled(FormHelperTexts)``;

const FormControl = styled(FormControls)`
  margin: 8px;

  .withoutLabel {
    margin-top: 24px;
  }

  .inputInkbar {
    &:after {
      background-color: ${palette('purple', 5)};
    }
  }
`;

export {
  Form,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  TextField,
  FormControl,
  FormHelperText,
  DisableField,
};
