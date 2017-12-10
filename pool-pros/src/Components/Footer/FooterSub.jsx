var React           = require('react'),
    classnames      = require('classnames'),
    CONST_DD        = 'Dealers and Distributors',
    CONST_CS        = 'Commercial Service',
    CONST_CR        = '2017 Pool Pros',
    CONST_PP        = 'Privacy Policy',
    CONST_TC        = 'Terms and Conditions';

function FooterSub(props) {
    var classname = classnames('Footer__Sub', props.className);
    
    return (
        <div className={classname}>
            <div className='Wrap'>
                <div className='Footer__Sub__Links'>
                    <div className='Footer__Sub__Links__Wrap'>
                        <a href='null' className='Footer__Sub__Link'>{CONST_DD}</a>
                    </div>
                    <div className='Footer__Sub__Links__Wrap'>
                        <a href='null' className='Footer__Sub__Link ss-action right'>{CONST_CS}</a>
                    </div>
                </div>
            </div>
            <div className='Wrap'>
                <div className='Footer__Sub__Links'>
                    <div className='Footer__Sub__Links__Wrap'>
                        <a href='null' className='Footer__Sub__Link'>&copy; {CONST_CR}</a>
                    </div>
                    <div className='Footer__Sub__Links__Wrap'>
                        <a href='null' className='Footer__Sub__Link'>{CONST_PP}</a>
                    </div>
                    <div className='Footer__Sub__Links__Wrap'>
                        <a href='null' className='Footer__Sub__Link'>{CONST_TC}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = FooterSub;