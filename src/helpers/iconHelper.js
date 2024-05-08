import { library } from '@fortawesome/fontawesome-svg-core';

import {
faCircleLeft,
faMoneyCheckDollar,
faCircleRight,
faLocationDot
} from "@fortawesome/free-solid-svg-icons";


const iconLibrary = library.add(
    faCircleLeft,
    faCircleRight,
    faLocationDot,
    faMoneyCheckDollar
)

export default iconLibrary;

