import PropTypes from 'prop-types';

const Slider = ({ name, value, max, step, onChange, label }) => (
    <div className="color">
        <label htmlFor={name}>{label}</label>
        <input
            name={name}
            type="range"
            value={value}
            max={max}
            step={step}
            onChange={onChange}
        />
    </div>
);

Slider.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default Slider;
