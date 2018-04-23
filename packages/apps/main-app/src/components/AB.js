// @flow
// $FlowFixMe
import React, { Fragment, Component } from 'react';
import A from 'components/A';
import B from 'components/B';

type ABPropsType = {};

class AB extends Component<ABPropsType> {
	render() {
		return (
			<Fragment>
				<A />
				<B />
			</Fragment>
		);
	}
}

export default AB;
