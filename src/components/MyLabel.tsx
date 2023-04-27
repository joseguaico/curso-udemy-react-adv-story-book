import './MyLabel.css';

export interface MyLabelProps {
   /**
   * Es el texto a mostrar
   */
  label?: string,
   /**
   * Es el tamaño del texto 
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3',

  /**
   * Indica si el texto se muestra en modo capitalize
   */
  allCaps?: boolean,

  /**
  * Es el color del texto
  */
  color?: 'primary' | 'secondary' | 'tertiary',

  /**
  * Es el color de fuente personalizado
  */
  fontColor?: string

};

export const MyLabel = ({label = 'No label', size = 'normal', allCaps = false, color = 'primary', fontColor}: MyLabelProps) => {

  return (
    <span 
      className={`label ${size} text-${color} ${allCaps === true ? 'text-capitalize': ''}  `}
      style={{ color: fontColor}}

>
        {label}
    </span>
  )
}
