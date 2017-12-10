var React           = require('react'),
    classnames      = require('classnames'),
    LogoSrc         = require('../../assets/imgs/pool-pros-logo-footer.png'),
    CONST__TWITTER  = 'Twitter',
    CONST__FB       = 'Facebook',
    CONST__YOUTUBE  = 'YouTube';

function FooterMain(props) {
    var classname = classnames('Footer__Main', props.className);
    
    return (
        <div className={classname}>
            <div className='Wrap'>
                <img src={LogoSrc} alt='Pool Pros' className='Footer__Logo'/>
                <div className='Footer__Social'>
                    <span>Connect with Us</span>
                    <a href='null' className='Footer__Social__Link Footer__Social__Link--Twitter'>{CONST__TWITTER}</a>
                    <a href='null' className='Footer__Social__Link Footer__Social__Link--Facebook'>{CONST__FB}</a>
                    <a href='null' className='Footer__Social__Link Footer__Social__Link--YouTube'>{CONST__YOUTUBE}</a>
                </div>
            </div>
        </div>
    );
}

module.exports = FooterMain;