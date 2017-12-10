var React                       = require('react'),
    createReactClass            = require('create-react-class'),
    classnames                  = require('classnames'),
    CONST_TITLE                 = 'Premium Pools & Spas of Charlotte',
    CONST_TITLE_SPAN            = 'Email',
    CONST_CLOSE_OVERLAY         = 'Close Overlay',
    CONST_FORM_TITLE            = 'Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.',
    CONST_FORM_LABEL_NAME       = 'First and last name',
    CONST_FORM_LABEL_PHONE      = 'Phone number',
    CONST_FORM_LABEL_EMAIL      = 'Email address',
    CONST_FORM_LABEL_COMMENTS   = 'Comments or questions',
    CONST_FORM_LABEL_QU         = 'Do you currently own a pool or spa?',
    CONST_SEND_EMAIL            = 'Send my email',
    CONST_YES                   = 'Yes',
    CONST_NO                    = 'No',
    CONST_FOOTER_TEMP           = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elit vitae libero consequat faucibus. Nunc efficitur, diam eget vehicula faucibus, sapien felis feugiat enim, sit amet feugiat odio nisi sit amet risus.',
    Overlay;

require('./Overlay.css');

// Create Overlay
// Show after 4 sec on page load via CSS
Overlay = createReactClass({
    getInitialState: function() {
        return {
            toggleOverlayActive: false // Set default state to false to toggle class
        }
    },

    toggleOverlay: function() {
        this.setState({ 
            toggleOverlayActive: !this.state.toggleOverlayActive // Inverse state onClick
        });
    },

    render: function() {
        var props       = this.props,
            state       = this.state,

            // Toggle className based on state
            classname   = classnames(state.toggleOverlayActive ? 'Overlay Overlay--Inactive' : 'Overlay Overlay--Active', props.className);
        
        return (
            <div className={classname}>
                <div className='Overlay__Card'>
                    <header className='Overlay___Header'>
                        <h1 className='Overlay___H1'>
                            <span>{CONST_TITLE_SPAN}</span>
                            {CONST_TITLE}
                        </h1>
                        <button className='Overlay___Close__Button ss-delete' onClick={this.toggleOverlay}>{CONST_CLOSE_OVERLAY}</button>
                    </header>
                    <div className='Overlay__Main'>
                        <p>{CONST_FORM_TITLE}</p>
                        <form className='Overlay__Form'>
                            <div className='Overlay__Form__Wrap'>
                                <label className='Overlay__Form__Label Overlay__Form__Label--Activate'>{CONST_FORM_LABEL_NAME}</label>
                                <input className='Overlay__Form__Input' type='text' name='fullname' />
                            </div>
                            <div className='Overlay__Form__Wrap Overlay__Form__Wrap--Sm'>
                                <label className='Overlay__Form__Label'>{CONST_FORM_LABEL_PHONE}</label>
                                <input className='Overlay__Form__Input' type='number' name='phoneNumber' />
                            </div>
                            <div className='Overlay__Form__Wrap'>
                                <label className='Overlay__Form__Label Overlay__Form__Label--Optional'>{CONST_FORM_LABEL_EMAIL}</label>
                                <input className='Overlay__Form__Input' type='text' name='email' />
                            </div>
                            <div className='Overlay__Form__Wrap'>
                                <label className='Overlay__Form__Label Overlay__Form__Label--Optional'>{CONST_FORM_LABEL_COMMENTS}</label>
                                <textarea className='Overlay__Form__Input Overlay__Form__Input--Textarea' name='comments'></textarea>
                            </div>
                            <div className='Overlay__Form__Wrap'>
                                <label className='Overlay__Form__Label Overlay__Form__Label--Optional'>{CONST_FORM_LABEL_QU}</label>
                                <div className='Overlay__Form__Button__Wrap'>
                                    <button className='Overlay__Form__Button Overlay__Form__Button--Active'>{CONST_YES}</button>
                                    <button className='Overlay__Form__Button'>{CONST_NO}</button>
                                </div>
                            </div>
                            <button className='Overlay__Form__Submit ss-navigateright right'>{CONST_SEND_EMAIL}</button>
                        </form>
                    </div>
                    <footer className='Overlay__Footer'>{CONST_FOOTER_TEMP}</footer>
                </div>
            </div>
        );
    }
});

module.exports = Overlay;