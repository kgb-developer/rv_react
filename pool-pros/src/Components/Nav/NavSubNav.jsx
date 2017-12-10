var React                       = require('react'),
    classnames                  = require('classnames'),
    CONST_DEALERS_DISTRIBUTORS  = 'Dealers and Distributors',
    CONST_COMMERCIAL_SERVICE    = 'Commercial Service';

function NavSubNav(props) {
    var classname = classnames('Nav__SubNav', props.className);
    
    return (
        <div className={classname}>
            <div className='Wrap'>
                <a href='null' className='Nav__SubNav__Link'>{CONST_DEALERS_DISTRIBUTORS}</a>
                <a href='null' className='Nav__SubNav__Link ss-action right'>{CONST_COMMERCIAL_SERVICE}</a>
            </div>
        </div>
    );
}

module.exports = NavSubNav;