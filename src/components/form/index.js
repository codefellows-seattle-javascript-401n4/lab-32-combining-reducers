import React from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const key = event.target.id;
    const value = event.target.value.toLowerCase();
    this.props.setFormState({ [key]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const {
      inputs,
      inputId,
      current,
    } = this.props;
    const content = current ? current.content : '';
    return (
      <form onSubmit={this.onSubmit} className="create-form">
        <label htmlFor="category">
          <input
            type="text"
            id={inputId}
            onChange={this.onChange}
            value={content}
          />
        </label>
        <div>
          {inputs.map(ele =>
            <input key={ele.key} type={ele.type} value={ele.value} onClick={ele.handler} />)}
        </div>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setFormState: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputId: PropTypes.string,
  current: PropTypes.shape({
    content: PropTypes.string,
  }),
};

CategoryForm.defaultProps = {
  inputId: 'content',
  current: { content: '' },
};

export default CategoryForm;
