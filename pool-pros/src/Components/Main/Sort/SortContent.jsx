var React           = require('react'),
    classnames      = require('classnames'),
    PropTypes       = require('prop-types'),
    Card            = require('../Card/Card'),
    CONST_INSTALL   = 'Installation Pro',
    CONST_COM       = 'Commercial Pro',
    CONST_RES       = 'Residential Pro',
    CONST_SERVICE   = 'Service Pro',
    CONST_STR_CK    = -1;

function SortContent(props) {
    var classname           = classnames('SortContent', props.className),
        data                = (props && props.data),
        dealers             = (data && data.dealers),
        filteredServ        = (props && props.filteredServ),
        filteredInstall     = (props && props.filteredInstall),
        filteredRes         = (props && props.filteredRes),
        filteredCommer      = (props && props.filteredCommer),
        card, proCerts, certIcon, liClassname, cardRet, filteredCard;

    // Map dealers arr, set data to vars
    card = dealers.map(function(dealer, idx) {
        var dealerData      = dealer.data,
            name            = dealerData.name,
            phone           = dealerData.phone1,
            email           = dealerData.email,
            weekdayHours    = dealerData.weekHours.mon,
            weekendHours    = dealerData.weekHours.sat,
            sundayHours     = dealerData.weekHours.sun,
            certsArr        = dealerData.certifications;

        // Map proCerts arr, set icons per string, ret list item
        proCerts = certsArr.map(function(cert, idx) {
            if(cert === CONST_INSTALL) {
                certIcon    = 'ss-star';
            } else if(cert === CONST_COM) {
                certIcon    = 'ss-users';
            } else if(cert === CONST_RES) {
                certIcon    = 'ss-home';
            } else if(cert === CONST_SERVICE) {
                certIcon    = 'ss-settings';
            }

            liClassname = classnames('Card__Footer__List__Item ' + certIcon, props.className);

            return <li key={idx} className={liClassname}>{cert}</li>;
        });

        // Save card build
        filteredCard = <Card key={idx} data={data} name={name} phone={phone} email={email} weekdayHours={weekdayHours} weekendHours={weekendHours} sundayHours={sundayHours} proCerts={proCerts} />;
        
        // Filter based on string compare
        if(filteredServ && certsArr.indexOf(CONST_SERVICE) > CONST_STR_CK) {
            cardRet = filteredCard;

        } else if(filteredInstall && certsArr.indexOf(CONST_INSTALL) > CONST_STR_CK) {
            cardRet = filteredCard;

        } else if(filteredRes && certsArr.indexOf(CONST_RES) > CONST_STR_CK) {
            cardRet = filteredCard;

        } else if(filteredCommer && certsArr.indexOf(CONST_COM) > CONST_STR_CK) {
            cardRet = filteredCard;
        } else {
            cardRet = null;
        }

        return cardRet
    });
    
    return (
        <div className={classname}>
            {card}
        </div>
    );
}

SortContent.propTypes = {
    data:               PropTypes.object,
    dealers:            PropTypes.array,
    filteredServ:       PropTypes.bool,
    filteredInstall:    PropTypes.bool,
    filteredRes:        PropTypes.bool,
    filteredCommer:     PropTypes.bool
};

SortContent.defaultProps = {
    data:               {},
    dealers:            [],
    filteredServ:       true,
    filteredInstall:    false,
    filteredRes:        false,
    filteredCommer:     false
};

module.exports = SortContent;