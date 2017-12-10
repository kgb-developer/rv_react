var React               = require('react'),
    createReactClass    = require('create-react-class'),
    classnames          = require('classnames'),
    SortMenu            = require('./SortMenu'),
    SortContent         = require('./SortContent'),
    CONST_SERVICE       = 'service',
    CONST_INSTALL       = 'installation',
    CONST_RES           = 'residential',
    CONST_COM           = 'commercial',
    Sort;

require('./Sort.css');

// Create Sort
Sort = createReactClass({
    getInitialState: function() {
        // Set default state of filters
        return {
            toggleSortMenuActive:   false,
            filterService:          true, // Default service filter true
            filterInstallation:     false,
            filterResidential:      false,
            filterCommerical:       false,
            isChecked:              true
        }
    },

    toggleIsChecked: function() {
        this.setState({isChecked: !this.state.isChecked}); // Inverse state onClick
    },

    toggleSortMenu: function() {
        this.setState({ 
            toggleSortMenuActive: !this.state.toggleSortMenuActive // Inverse state onClick
        });
    },

    toggleFilters: function(filter) {
        var filterService       = !this.state.filterService,
            filterInstallation  = !this.state.filterInstallation,
            filterResidential   = !this.state.filterResidential,
            filterCommerical    = !this.state.filterCommerical;
        
        // Set state based on filter passed into toggleFilters func
        if(filter === CONST_SERVICE) {
            this.setState({
                filterService: filterService
            });

            this.toggleIsChecked(); // Default service filter checked

        } else if(filter === CONST_INSTALL) {
            this.setState({
                filterInstallation: filterInstallation
            });

        } else if(filter === CONST_RES) {
            this.setState({
                filterResidential: filterResidential
            });

        } else if(filter === CONST_COM) {
            this.setState({
                filterCommerical: filterCommerical
            });
        }
    },

    render: function() {
        var props               = this.props,
            state               = this.state,
            data                = (props && props.data),
            classname           = classnames('Sort', props.className),

            // Toggle className based on state
            mobileMenuToggle    = classnames(state.toggleSortMenuActive ? 'SortMenu SortMenu--Active' : 'SortMenu', props.className),
            
            filteredServ        = state.filterService,
            filteredInstall     = state.filterInstallation,
            filteredRes         = state.filterResidential,
            filteredCommer      = state.filterCommerical,
            isChecked           = state.isChecked;
    
        return (
            <div className={classname}>
                <div className='Wrap'>
                    <SortMenu mobileMenuToggle={mobileMenuToggle} onClick={this.toggleSortMenu} toggleFilters={this.toggleFilters} isChecked={isChecked} />
                    <SortContent data={data} filteredServ={filteredServ} filteredInstall={filteredInstall} filteredRes={filteredRes} filteredCommer={filteredCommer} />
                </div>
            </div>
        );
    }
});

module.exports = Sort;