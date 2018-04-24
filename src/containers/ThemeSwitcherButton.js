import React from 'react';
import { connect } from 'react-redux';
import themeActions from '../redux/themeSwitcher/actions';
import { Button, Icon } from './App/style';

const ThemeSwitcherButton = ({ isActivated, switchActivation }) => {
  const openThemeSwitcher = isActivated === 'themeSwitcher';
  return (
    <Button
      variant="raised"
      color="primary"
      onClick={() =>
        openThemeSwitcher
          ? switchActivation(false)
          : switchActivation('themeSwitcher')}
      className={openThemeSwitcher ? 'active' : ''}
    >
      <Icon>settings</Icon>
    </Button>
  );
};
const mapStateToProps = state => {
  return {
    isActivated: state.ThemeSwitcher.toJS().isActivated
  };
};
export default connect(mapStateToProps, themeActions)(ThemeSwitcherButton);
