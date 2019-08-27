import React from 'react';

import './Input.scss';

class Input extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.control === 'input'
            ? 'input-container'
            : 'textarea-container'
        }
      >
        {this.props.label && (
          <label htmlFor={this.props.id}>{this.props.label}</label>
        )}
        {this.props.control === 'input' && (
          <input
            id={this.props.id}
            type={this.props.type}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange={e => this.props.onChange(this.props.id, e.target.value)}
          />
        )}
        {this.props.control === 'textarea' && (
          <div>
            <textarea
              id={this.props.id}
              rows={this.props.rows}
              type={this.props.type}
              name={this.props.name}
              value={this.props.value}
              placeholder={this.props.placeholder}
              onChange={e => this.props.onChange(this.props.id, e.target.value)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Input;
