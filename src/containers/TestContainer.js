import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import TestComponent from '../components/TestComponent';

import {
  testDataSelector,
  fetchingSelector,
} from '../selectors/testSelector'

import { item } from '../actions'
import LoadingAnimation from '../components/LoadingAnimation'
import WithErrors from '../hocs/WithErrors'

class TestContainer extends Component {
  static propTypes = {
    testData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
    fetching: PropTypes.bool,
    loadOne: PropTypes.func.isRequired,
  };

  static defaultProps = {
    fetching: false,
  };

  componentDidMount() {
    const { loadOne, loadPhotos } = this.props
    // loadOne('1')
    loadPhotos();
  }

  render() {
    const { testData, fetching } = this.props
    console.log(testData);
    let count = testData.filter(item => item.favourite).length;

    if (fetching) return <LoadingAnimation />

    return (
      <div>
        <h1>{`Favourite Count: ${count}`}</h1>
        {/* <h1>Test Container</h1>
        <br />
        <div className="row"> */}
          {/* <div className="card">
            <h4 className="card-header">
              Test Data:
            </h4>
            <div className="card-body">
              <h4 className="card-title">
                {testData.title}
              </h4>
              <p className="card-text">
                {testData.body}
              </p> */}
              <TestComponent data={testData}/>
            {/* </div>
          </div>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  testData: testDataSelector(),
  fetching: fetchingSelector(),
})

const mapDispatchToProps = {
  loadOne: item.requestOne,
  loadPhotos: item.getPhotos
}

export default compose(
  WithErrors,
  connect(mapStateToProps, mapDispatchToProps),
)(TestContainer)
