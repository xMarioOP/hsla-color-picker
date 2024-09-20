import PropTypes from 'prop-types';

const ColorValueDisplay = ({ colorValues }) => {
    const { hue, saturation, lightness, alpha } = colorValues;
    return (
        <div className="hsl-text">
            hsla( {hue}º {saturation}% {lightness}% {alpha})
        </div>
    );
};

ColorValueDisplay.propTypes = {
    colorValues: PropTypes.shape({
        hue: PropTypes.number.isRequired,
        saturation: PropTypes.number.isRequired,
        lightness: PropTypes.number.isRequired,
        alpha: PropTypes.number.isRequired
    }).isRequired
};

export default ColorValueDisplay;
