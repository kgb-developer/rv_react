var React               = require('react'),
    createReactClass    = require('create-react-class'),
    classnames          = require('classnames'),
    NavLinks            = require('./NavLinks'),
    LogoSrc             = require('../../assets/imgs/pool-pros-logo.png'),
    CONST_POOLPROS      = 'Pool Pros',
    CONST_MOBILE_MENU   = 'Mobile Menu',
    NavMain;

// Create NavMain
NavMain = createReactClass({
    getInitialState: function() {
        return {
            toggleMenuActive: false // Set default state to false to toggle class
        }
    },

    toggleMobileMenu: function() {
        this.setState({ 
            toggleMenuActive: !this.state.toggleMenuActive // Inverse state onClick
        });
    },

    render: function() {
        var props               = this.props,
            state               = this.state,
            classname           = classnames('Nav__Main', props.className),

            // Toggle className based on state
            mobileMenuToggle    = classnames(state.toggleMenuActive ? 'Nav__Links--Active' : null, props.className);

        return (
            <div className={classname}>
                <div className='Wrap'>
                    <a href='null' className='Logo__Link'>
                        <img src={LogoSrc} alt={CONST_POOLPROS} className='Img Logo__Img' />
                    </a>
                    <div className='Nav__Wrap'>
                        <NavLinks className={mobileMenuToggle} />
                        <button className='Button Nav__Location ss-location'>Find a <span>Pool</span> Pro</button>
                        <button className='Button Nav__Mobile ss-rows' onClick={this.toggleMobileMenu}>{CONST_MOBILE_MENU}</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = NavMain;