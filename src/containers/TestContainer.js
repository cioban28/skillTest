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

const data = [{
	id: 1,
	name: "Island",
	image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b"
}, {
	id: 2,
	name: "Forest",
	image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254"
}, {
	id: 3,
	name: "Whale",
	image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff"
}, {
	id: 4,
	name: "Mountain",
	image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0"
}, {
	id: 5,
	name: "Boat",
	image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0"
}, {
	id: 6,
	name: "Flowers",
	image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc"
}, {
	id: 7,
	name: "Fire",
	image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf"
}, {
	id: 8,
	name: "Garden",
	image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe"
}, {
	id: 9,
	name: "Bridge",
	image: "https://images.unsplash.com/photo-1445723356089-6dbb51d9c4f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=6e476c6e7ce1adac161295616d1bec05"
}];

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
    const { loadOne } = this.props
    loadOne('1')
  }

  render() {
    const { testData, fetching } = this.props

    if (fetching) return <LoadingAnimation />

    return (
      <div>
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
              <TestComponent data={data}/>
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
}

export default compose(
  WithErrors,
  connect(mapStateToProps, mapDispatchToProps),
)(TestContainer)
