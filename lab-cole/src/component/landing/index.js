import React from 'react'
import {connect} from 'react-redux'
import Section from '../section'
import SectionForm from '../section-form'
import * as section from '../../action/section.js'

class Landing extends React.Component {
  render(){
    let {
      sections,
      sectionCreate,
    } = this.props

    return (
      <div className='landing'>
        <SectionForm onComplete={sectionCreate} />
        {sections.map((section, i) => 
          <Section key={i} section={section} />
        )}
      </div>
    )
  }
}

// return objects that will become props for the compoent
let mapStateToProps = (state) => ({
  sections: state.sections,
})

let mapDispatchToProps = (dispatch) => ({
  sectionCreate: (data) => dispatch(section.create(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)