import PropTypes from 'prop-types';

function Output({className, children}) {
    return (
        <div>
            <p className={`renderOutput h-5 ${className}`} >{children}</p>
        </div>
    )
}

Output.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Output