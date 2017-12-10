var React           = require('react'),
    PropTypes       = require('prop-types'),
    CONST_ZIP       = '7 Dealers in 28226',
    CONST_RESULTS   = 'Filter Results',
    CONST_SERVICE   = 'service',
    CONST_INSTALL   = 'installation',
    CONST_RES       = 'residential',
    CONST_COM       = 'commercial';

function SortMenu(props) {
    var classname                   = (props && props.mobileMenuToggle),
        toggleSortMenu              = (props && props.onClick),
        toggleFiltersService        = (props && props.toggleFilters.bind(null, CONST_SERVICE)),
        toggleFiltersInstallation   = (props && props.toggleFilters.bind(null, CONST_INSTALL)),
        toggleFiltersResidential    = (props && props.toggleFilters.bind(null, CONST_RES)),
        toggleFiltersCommercial     = (props && props.toggleFilters.bind(null, CONST_COM)),
        isChecked                   = (props && props.isChecked);
    
    return (
        <div className={classname}>
            <div className='SortMenu__Zip'>{CONST_ZIP}</div>
            <div className='SortMenu__Results'>
                <div className='SortMenu__Results__Title ss-dropdown right' onClick={toggleSortMenu}>{CONST_RESULTS}</div>
                <div className='SortMenu__Results__Filters'>
                    <div className='SortMenu__Results__Filter'>
                        <input type='checkbox' name={CONST_SERVICE} value={CONST_SERVICE} onChange={toggleFiltersService} checked={isChecked} />
                        <label>{CONST_SERVICE}</label>
                    </div>
                    <div className='SortMenu__Results__Filter'>
                        <input type='checkbox' name={CONST_INSTALL} value={CONST_INSTALL} onChange={toggleFiltersInstallation} />
                        <label>{CONST_INSTALL}</label>
                    </div>
                    <div className='SortMenu__Results__Filter'>
                        <input type='checkbox' name={CONST_RES} value={CONST_RES} onChange={toggleFiltersResidential} />
                        <label>{CONST_RES}</label>
                    </div>
                    <div className='SortMenu__Results__Filter SortMenu__Results__Filter--Flex'>
                        <input type='checkbox' name={CONST_COM} value={CONST_COM} onChange={toggleFiltersCommercial} />
                        <label>{CONST_COM}</label>
                        <span className='SortMenu__Results__Filter__Tooltip'>?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

SortMenu.propTypes = {
    isChecked:  PropTypes.bool
};

SortMenu.defaultProps = {
    isChecked:  true
};

module.exports = SortMenu;