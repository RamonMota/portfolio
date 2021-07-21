import reactfrom from 'react'
import IconDark from '../../assets/img/light.svg'
import iconLight from '../../assets/img/dark.svg'
import {Icon} from '../UI'

const light = <Icon src={IconDark} alt ="Light Theme"/>
const dark = <Icon src={iconLight} alt ="Dark Theme"/>

export default ({theme}) => (theme ? light : dark);