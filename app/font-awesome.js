import { library, config } from '@fortawesome/fontawesome-svg-core';
import * as freeSolidSvgIcons from '@fortawesome/free-solid-svg-icons';
import * as freeBrandSvgIcons from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

library.add(freeSolidSvgIcons['fas'], freeBrandSvgIcons['fab']);
