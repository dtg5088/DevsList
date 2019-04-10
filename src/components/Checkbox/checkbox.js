import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;






// import React from 'react';

// class Checkbox extends React.Component {
//     render() {
//       return (
//         <div>
//             <input  
//                 type="checkbox"
//                 id={this.props.id}  
//                 value={this.props.value}
//                 name={this.props.name}
//                 checked={this.props.isChecked}
//                 disabled={this.props.disabled}
//                 onChange={this.props.onChange}
//             />
//             <label
//                 aria-hidden="true"
//                 htmlFor={this.props.id}
//             />
//             <label htmlFor={this.props.id}>
//                 {this.props.label}
//             </label>
//         </div>
//       );
//     }
//   }
  
//   export default Checkbox;