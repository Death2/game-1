import React from 'react';
import { RouteHandler } from 'react-router';

import debugLib from '../../../lib/debug';

import Menu from '../../../components/hero/preferences/menu';
import auth from '../../decorators/auth';

const debug = debugLib('pages:hero:preferences:master');

@auth
export default class HeroPreferencesMaster extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func
  };

  getStyles() {
    return {
      base: {
        display: 'flex',
        flexWrap: 'nowrap'
      },
      menu: {
        flexBasis: 250
      },
      content: {
        marginLeft: 20,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 300
      }
    };
  }

  render() {
    const router = this.context.router;
    const styles = this.getStyles();

    debug('master render %s', router.getCurrentPath());

    return (
      <div style={styles.base}>
        <div style={styles.menu}>
          <Menu />
        </div>
        <div style={styles.content}>
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
}
