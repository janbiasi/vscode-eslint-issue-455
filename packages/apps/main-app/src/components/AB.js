// @flow
// $FlowFixMe
import React, { Fragment, Component } from 'react';
import sum from 'helper/sum';
import A from 'components/A';
import B from 'components/B';

type ABPropsType = {};

class AB extends Component<ABPropsType> {
	render() {
		return (
			<Fragment>
				<p>1 + 1 = {sum(1, 1)}</p>
				<A />
				<B />
			</Fragment>
		);
	}
}

export default AB;
