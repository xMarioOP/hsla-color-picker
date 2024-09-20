import PropTypes from 'prop-types';
import transparentBox from './transparentBox.avif'

const ColorBox = ({ colorValues }) => {
    const { hue, saturation, lightness, alpha } = colorValues;
    return (
        <div className="color-box" style={{ backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})` }}>
            <div className="color-box-div">
                <img src={transparentBox} alt="Transparent Box" />
            </div>
        </div>
    );
};

ColorBox.propTypes = {
    colorValues: PropTypes.shape({
        hue: PropTypes.number.isRequired,
        saturation: PropTypes.number.isRequired,
        lightness: PropTypes.number.isRequired,
        alpha: PropTypes.number.isRequired
    }).isRequired
};


export default ColorBox