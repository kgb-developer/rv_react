var React       = require('react'),
    classnames  = require('classnames'),
    FooterMain  = require('./FooterMain'),
    FooterSub   = require('./FooterSub');

require('./Footer.css');

function Footer(props) {
    var classname = classnames('Footer', props.className);
    
    return (
        <footer className={classname}>
            <FooterMain />
            <FooterSub />
        </footer>
    );
}

module.exports = Footer;