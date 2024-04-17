import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.svg'
import program_icon_2 from '../../assets/program-icon-2.svg'
import program_icon_3 from '../../assets/program-icon-3.svg'


const Programs = () => {
  return (
    <div className="programs">

        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Intelligent Reporting Solutions</p>
            </div>
        </div>

        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Seamless Laboratory Automation and Instrument Communication</p>
            </div>
        </div>

        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <p>Empowering Pathology Networks with Proven Solutions</p>
            </div>
        </div>

    </div>
  )
}

export default Programs