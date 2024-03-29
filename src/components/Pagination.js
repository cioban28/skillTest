import React from 'react'
import { FIRST_PAGE, PREV_PAGE, NEXT_PAGE, LAST_PAGE } from '../utils'
import { nextTick } from 'q';

class Pagingation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="pagination">
				<button onClick={() => this.props.onPageChange(FIRST_PAGE)}>First Page</button>
				<button onClick={() => this.props.onPageChange(PREV_PAGE)}>{"<<"}</button>
				<button onClick={() => this.props.onPageChange(NEXT_PAGE)}>{">>"}</button>
				<button onClick={() => this.props.onPageChange(LAST_PAGE)}>Last Page</button>
			</div>
		);
	}
}

export default Pagingation;
