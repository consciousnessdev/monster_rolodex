import React, { PureComponent } from 'react'

// class Lifecycles extends Component {

// PureComponent as default implement
// shouldComponentUpdate lifeCycle
class Lifecycles extends PureComponent {
  constructor() {
    super();
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate', nextProps);
      // this will detect if next props text not change,
      // so component not need update/re-rendering
      return nextProps.text !== this.props.text;
  }
  

  render() {
    console.log('render');

    return <div className="lifecycles">
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
    </div>;
  }
}

export default Lifecycles
