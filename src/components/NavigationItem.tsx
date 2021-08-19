import React, { ReactElement } from 'react'
import INavigationItem from '../interfaces/INavigationItem';

const NavigationItem: React.FC<INavigationItem> = ({name, link}) => {
  return (
    <a href={link} className="px-6 font-regular text-xl hover:opacity-50">{name}</a>
  )
}

export default NavigationItem;
