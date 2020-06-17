import React from 'react';


export default function Form(props) {


const {
      values,
      onInputChange,
      onSubmit,
    } = props;

return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Team Member</h2>
            <button>submit</button>
        </div>
        <div className='form-group inputs'>
        <h4>Information</h4>
        <label>Name:&nbsp;
            <input
                type="text"
                name="name"
                value={values.name}
                onChange={onInputChange}
                maxLength='100'
            />
        </label> 
        <label htmlFor='emailInput'>Email:&nbsp;
          <input
            id='emailInput'
            type='email'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        <label>Role:&nbsp;
          <select
            name="role"
            value={values.role}
            onChange={onInputChange}
          >
            <option value=''>-- Select a Role --</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Web Design'>Web Design</option>
          </select>
        </label>
      </div>
    </form>
)


}