import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Main from '../components/Main';
import { clickBtn, getCount } from '../reducers/main';

class MainContainer extends React.Component {
  componentDidMount = () => {
    axios.get('/api')
      .then(res => console.log(res.data));
  }

  render() {
    return <Main {...this.props} />;
  }
}

const mapStateToProps = state => ({
  count: getCount(state)
});

export default connect(mapStateToProps, { clickBtn })(MainContainer);
