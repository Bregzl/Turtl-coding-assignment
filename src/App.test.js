import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header'
import PostList from './components/PostList'
import Post from './components/Post'
import { shallow, configure} from 'enzyme';
import { useFetcher }  from './components/useFetcher'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Header renders without crashing', () => {
  shallow(<Header />);
});

it('Post renders without crashing', () => {
  const match=null;
  shallow(<Post match />);
});

it('PostList renders without crashing', () => {
  shallow(<PostList />);
});

