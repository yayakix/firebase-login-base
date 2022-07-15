import '../css/button.styles.scss'
// control classes for each button type
const button_types = {
    google: 'google-sign-in',
    inverted: 'inverted',

}

const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button className={`button-container ${button_types[buttonType]}`} {...otherProps}>
{children}

        </button>
    )
}
export default Button;