import PropTypes from 'prop-types';

const ColorBox = ({ colorValues }) => {
    const { hue, saturation, lightness, alpha } = colorValues;
    return (
        <div className="color-box" style={{ backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})` }}>
            <div className="color-box-div">
                <img src='./src/transparentBox.avif' alt="Transparent Box" />
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