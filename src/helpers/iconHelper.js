import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faCircleLeft,
    faMoneyCheckDollar,
    faCircleRight,
    faLocationDot,
    faCalendar,
    faMobile,
} from "@fortawesome/free-solid-svg-icons";


const iconLibrary = library.add(
    faCircleLeft,
    faCircleRight,
    faLocationDot,
    faMoneyCheckDollar,
    faCalendar,
    faMobile
)

export default iconLibrary;

