import React, { ReactElement } from 'react';
import INavigationItem from '../interfaces/INavigationItem';

function NavigationItem({label, link}: INavigationItem): ReactElement {
  return (
    <a href={link} className="px-6 font-regular text-xl hover:opacity-50">{label}</a>
  )
}

export default NavigationItem;
