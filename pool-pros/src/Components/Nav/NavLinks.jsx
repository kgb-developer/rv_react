var React           = require('react'),
    classnames      = require('classnames'),
    CONST_POOLS     = 'Pools and Spas',
    CONST_SUPPLIES  = 'Supplies',
    CONST_RESC      = 'Resources',
    CONST_SERV      = 'Services';

function NavLinks(props) {
    var classname = classnames('Nav__Links', props.className);
    
    return (
        <div className={classname}>
            <span className="Nav__Links__Mobile__Title">Menu</span>
            <a href='null' className='Nav__Link ss-navigateright right'>{CONST_POOLS}</a>
            <a href='null' className='Nav__Link ss-navigateright right'>{CONST_SUPPLIES}</a>
            <a href='null' className='Nav__Link ss-navigateright right'>{CONST_RESC}</a>
            <a href='null' className='Nav__Link ss-navigateright right'>{CONST_SERV}</a>
        </div>
    );
}

module.exports = NavLinks;