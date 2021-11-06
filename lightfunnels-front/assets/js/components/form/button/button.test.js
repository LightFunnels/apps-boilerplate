import React from 'react';
import { Button } from './index.jsx';

import {
	renderer,
	getProp,
} from 'Tests';

describe('Button tests', () => {
	it('Renders correctly', () => {
	  const tree = renderer(<Button/>);
	  expect(tree.exists('button')).toBe(true);
	});

	it('onCard prop', () => {
	  const tree = renderer(<Button onCard />);
	  expect(getProp(tree, 'onCard')).toBe(true);
	})

	it('tertiary prop', () => {
	  const tree = renderer(<Button tertiary />);
	  expect(getProp(tree, 'tertiary')).toBe(true);
	})

	it('primary prop', () => {
	  const tree = renderer(<Button primary />);
	  expect(getProp(tree, 'primary')).toBe(true);
	})

	it('danger prop', () => {
	  const tree = renderer(<Button danger />);
	  expect(getProp(tree, 'danger')).toBe(true);
	})

	it('className prop', () => {
	  const tree = renderer(<Button className="hello" />);
	  expect(getProp(tree, 'className')).toBe('hello');
	})

	it('blockOn prop', () => {
	  const tree = renderer(<Button blockOn={['']} />);
	  expect(getProp(tree, 'blockOn')).toEqual(['']);
	})

	it('highlighted prop', () => {
	  const tree = renderer(<Button highlighted />);
	  expect(getProp(tree, 'highlighted')).toEqual(true);
	})

	it('centered prop', () => {
	  const tree = renderer(<Button centered />);
	  expect(getProp(tree, 'centered')).toEqual(true);
	})

	it('block prop', () => {
	  const tree = renderer(<Button block />);
	  expect(getProp(tree, 'block')).toEqual(true);
	})

	it('medium prop', () => {
	  const tree = renderer(<Button medium />);
	  expect(getProp(tree, 'medium')).toEqual(true);
	})

	it('link prop', () => {
	  const tree = renderer(<Button link />);
	  expect(getProp(tree, 'link')).toEqual(true);
	})

	it('spinning prop', () => {
	  const tree = renderer(<Button spinning />);
	  expect(getProp(tree, 'spinning')).toEqual(true);
	})

	it('onClick function', () => {
		const mockCallBack = jest.fn();
	  const tree = renderer(<Button onClick={mockCallBack}/>);
	  tree.find('button').props().onClick();
    expect(mockCallBack.mock.calls.length).toEqual(1);
	})

	it('onClick function with spinning', () => {
		const mockCallBack = jest.fn();
	  const tree = renderer(<Button spinning onClick={mockCallBack}/>);
    expect(tree.find('button').props().onClick).toEqual(undefined);
	})
})