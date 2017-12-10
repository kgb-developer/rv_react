var React           = require('react'),
    classnames      = require('classnames'),
    PropTypes       = require('prop-types'),
    CONST_TEL       = 'tel:',
    CONST_MAIL      = 'mailto:',
    CONST_MAIL_SUB  = '?Subject=Pool%20Pros%20Inquiry',
    CONST_NA        = 'Not Available',
    CONST_TAP_CALL  = 'Tap to call',
    CONST_TALK      = 'Can\'t talk now? Click below to send an email.',
    CONST_CONT_PRO  = 'Contact this Pro',
    CONST_HOURS     = 'Business Hours',
    CONST_WEEKDAYS  = 'Weekdays ',
    CONST_WEEKENDS  = 'Saturdays ',
    CONST_SUNDAYS   = 'Sundays ';

require('./Card.css');

function Card(props) {
    var classname       = classnames('Card', props.className),
        name            = (props && props.name),
        phone           = (props && props.phone),
        phoneHref       = CONST_TEL + phone,
        email           = (props && props.email),
        mailTo          = CONST_MAIL + email + CONST_MAIL_SUB,
        weekdayHours    = (props && props.weekdayHours),
        weekendHours    = (props && props.weekendHours),
        sundayHours     = (props && props.sundayHours),
        proCerts        = (props && props.proCerts);

    // Check if sundayHours is empty to set default
    if(sundayHours === '') {
        sundayHours = CONST_NA;
    }
    
    return (
        <div className={classname}>
            <div className='Card__Wrap'>
                <header className='Card__Header'>
                    <h2 className='Card__H2'>{name}</h2>
                </header>
                <div className='Card__Content'>
                    <a href={phoneHref} className='Card__Phone ss-phone'>
                        <span>{CONST_TAP_CALL}</span>
                        {phone}
                    </a>
                    <span>{CONST_TALK}</span>
                    <a className='Card__Button' href={mailTo}>{CONST_CONT_PRO}</a>
                    <div className='Card__Hours'>
                        <span>{CONST_HOURS}</span>
                        <ul className='Card__List'>
                            <li className='Card__List__Item'>
                                {CONST_WEEKDAYS}
                                {weekdayHours}
                            </li>
                            <li className='Card__List__Item'>
                                {CONST_WEEKENDS}
                                {weekendHours}
                            </li>
                            <li className='Card__List__Item'>
                                {CONST_SUNDAYS}
                                {sundayHours}
                            </li>
                        </ul>
                    </div>
                </div>
                <footer className='Card__Footer'>
                    <ul className='Card__Footer__List'>
                        {proCerts}
                    </ul>
                </footer>
            </div>
        </div>
    );
}

Card.propTypes = {
    name:           PropTypes.string,
    phone:          PropTypes.string,
    phoneHref:      PropTypes.string,
    email:          PropTypes.string,
    weekdayHours:   PropTypes.string,
    weekendHours:   PropTypes.string,
    sundayHours:    PropTypes.string,
    proCerts:       PropTypes.array
};

Card.defaultProps = {
    name:           '',
    phone:          '',
    phoneHref:      '',
    email:          '',
    weekdayHours:   '',
    weekendHours:   '',
    sundayHours:    '',
    proCerts:       []
};

module.exports = Card;