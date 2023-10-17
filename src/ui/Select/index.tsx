// @ts-nocheck

import ReactSelect, { components, OptionProps } from 'react-select';
import clsx from 'clsx';
import Label from '../Label';
import styles from './styles.module.css';

type colors = 'red' | 'blue' | 'green' | 'orange' | 'pink' | 'purple' | 'black';

const colors: Record<colors, string> = {
  red: '#e74c3c',
  blue: '#233e68',
  green: '#45b36b',
  orange: '#ff8c37',
  pink: '#ef466f',
  purple: '#9757d7',
  black: '#141416',
};

// const ColorOption = ({ ...props }: OptionProps) => (
//   <div
//     className={clsx(styles.option_color, props.value === 'all' && styles.option_color_all)}
//     style={{ ['--color']: colors[props.data.value as colors] }}
//   >
//     <div className={styles.option_icon_color} />
//     <components.Option {...props} className={clsx(styles.option, props.isSelected && styles.option_selected)} />
//   </div>
// );

const ColorOption = ({ ...props }: OptionProps) => {
  const { value, data, isSelected } = props;
  const colorStyle = {
    '--color': colors[data.value as colors],
  };
  const optionColorClass = clsx(styles.option_color, value === 'all' && styles.option_color_all);
  const optionIconColorClass = styles.option_icon_color;
  const optionClass = clsx(styles.option, isSelected && styles.option_selected);
  return (
    <div className={optionColorClass} style={colorStyle}>
      <div className={optionIconColorClass} />
      <components.Option {...props} className={optionClass} />
    </div>
  );
};

// const Option = ({ ...props }: OptionProps) => (
//   <components.Option {...props} className={clsx(styles.option, props.isSelected && styles.option_selected)} />
// );

const Option: React.FC<OptionProps> = (props) => {
  const { isSelected } = props;
  return <components.Option {...props} className={clsx(styles.option, isSelected && styles.option_selected)} />;
};

interface SelectProps {
  label: string;
  hiddenLabel?: boolean;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
  value?: string;
  type?: 'default' | 'color';
  className?: string;
}

const Select = ({ options, label, onChange, value, type = 'default', className, hiddenLabel = false }: SelectProps) => {
  const getSelectedOption = () => options.find((option) => option.value === value);

  return (
    <div className={clsx(styles.select_container, className)}>
      <Label className={clsx(hiddenLabel && styles.hidden_label)}>{label}</Label>
      <ReactSelect
        aria-labelledby={`select-${label.replace(/\s/g, '')}`}
        options={options}
        className={styles.select}
        defaultValue={options[0]}
        value={getSelectedOption()}
        onChange={(option) => onChange(option?.value)}
        components={{ Option: type === 'color' ? ColorOption : Option }}
        classNamePrefix="react-select"
        classNames={{
          control: (state) => styles.control,
          menu: (state) => styles.menu,
          valueContainer: (state) => styles.value_container,
          menuList: (state) => styles.menu_list,
          singleValue: (state) => styles.single_value,
          dropdownIndicator: (state) => styles.dropdown_indicator,
          indicatorSeparator: (state) => styles.indicator_separator,
        }}
      />
    </div>
  );
};

export default Select;
