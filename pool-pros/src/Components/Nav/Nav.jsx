var React       = require('react'),
    classnames  = require('classnames'),
    NavSubNav   = require('./NavSubNav'),
    NavMain     = require('./NavMain');

require('./Nav.css');

function Nav(props) {
    var classname = classnames('Nav', props.className);
    
    return (
        <nav className={classname}>
            <NavSubNav />
            <NavMain />
        </nav>
    );
}

module.exports = Nav;