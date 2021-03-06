import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';
import { IntlProvider } from 'react-intl';
import AppRouter from './appRouter';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import AppLocale from '../../languageProvider';
import authAction from '../../redux/auth/actions';
import appActions from '../../redux/app/actions';
import themeActions from '../../redux/themeSwitcher/actions';
import ThemeSwitcher from '../ThemeSwitcher';
import ThemeSwitcherButton from '../ThemeSwitcherButton';
import SecondarySidebar from '../SecondarySidebar';
import PageBreadcrumb from '../PageBreadcrumb';
import MUIPProvider from '../../components/uielements/materialUiPicker/momentProvider';
import { rtl } from '../../settings/withDirection';
import Main, { Root, AppFrame } from './style';
import './global.css';

const { logout } = authAction;
const { toggleAll } = appActions;
const { switchActivation } = themeActions;

class App extends Component {
  render() {
    const anchor = rtl === 'rtl' ? 'right' : 'left';
    const {
      classes,
      theme,
      toggleAll,
      locale,
      match,
      scrollHeight,
    } = this.props;
    const { url } = match;
    const propsTopbar = { locale, url };
    const options = { url, classes, theme, locale };
    const currentAppLocale = AppLocale[locale];
    return (
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <Root>
          <Debounce time="1000" handler="onResize">
            <WindowResizeListener
              onResize={windowSize =>
                toggleAll(windowSize.windowWidth, windowSize.windowHeight)
              }
            />
          </Debounce>
          <AppFrame>
            <Topbar {...options} />
            {anchor === 'left' ? <Sidebar {...options} anchor={anchor} /> : ''}

            <Main>
              <PageBreadcrumb url={url} />

              <MUIPProvider>
                <AppRouter
                  style={{ height: scrollHeight, overflowY: 'auto' }}
                  url={url}
                />
              </MUIPProvider>
              <ThemeSwitcherButton />
              <SecondarySidebar
                InnerComponent={ThemeSwitcher}
                currentActiveKey="themeSwitcher"
                {...propsTopbar}
              />
            </Main>

            {anchor === 'right' ? <Sidebar {...options} anchor={anchor} /> : ''}
          </AppFrame>
        </Root>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.Auth,
    locale: state.LanguageSwitcher.toJS().language.locale,
    scrollHeight: state.App.toJS().scrollHeight,
  };
};
const appConect = connect(mapStateToProps, {
  logout,
  toggleAll,
  switchActivation,
})(App);
export default appConect;
