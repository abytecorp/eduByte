import * as React from "react";

export const EduLogo = props => (
	<svg width="1em" height="1em" viewBox="0 0 622 697" {...props}>
		<image
			x={64}
			y={61}
			width={495}
			height={551}
			xlinkHref="data:img/png;base64,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"
		/>
	</svg>
);

export const AppLogo = props => (
	<svg width={20} height={20} {...props}>
		<path
			data-name="Toogle Side Menu Icon"
			d="M2 0h5a2 2 0 012 2v5a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm0 2h5v5H2V2zm11-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V2a2 2 0 012-2zm0 2h5v5h-5V2zM2 11h5a2 2 0 012 2v5a2 2 0 01-2 2H2a2 2 0 01-2-2v-5a2 2 0 012-2zm0 2h5v5H2v-5zm11-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5a2 2 0 012-2zm0 2h5v5h-5v-5z"
			fillRule="evenodd"
		/>
	</svg>
);

export const MoreIcon = props => (
	<svg width={10} height={2} {...props}>
		<path
			data-name="More Icon"
			d="M0 0h2v2H0V0zm4 0h2v2H4V0zm4 0h2v2H8V0z"
			fill="#fff"
			fillRule="evenodd"
		/>
	</svg>
);

export const BagStudentIcon = props => (
	<svg width={18} height={21} {...props}>
		<image
			data-name="Capa 1127"
			width={18}
			height={21}
			xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAADDElEQVQ4jZVTTYsUVxQ9976Pqurp7slgz2gSCIgGRAPiJuLKBAQVXEj8AS7cZKELQTGLJBgEF0pQQ1AICLpxoUKyShYuBAVFEZQsBgwE/EDwIzpqZ2aqq+rdK2+6HGfs4MQD9XhUnXvePefVpW/2PvDGJtuI3Be93pPvReiRIkKtt0Ors6yjAJdFMdEqyu5NQKZFJqGwnPrFB5h5opLiuCXiNc61fiCYj8uyeyWE/DSIADJLvG+PMpurClLn2mvKamqpiIyrKozx65xr7mBiSPnijg0qCqUxa00jTUf3izy5Cqr+SvzICuca91X1I0C9Me5umixapQjjIbTHrE0POecXiyiCVNaKVNfz4p9dRGNHCHy2kXX+LsoXa73LjgAYBTAMwAJ4bExaivRcJdO/a6guqpWVee/pMZHiPO3dcw9AaBPcau9bN6zJthKZn5i5Ey3MBwGQvNfr7lPtnQDZL0V6t4KEx1ZVIvWl6PRlkXS78e1fVOEHRWYuAEScpmn76OTUQwlV/rM1KWgmerZ9Avxy55rfAfCAPgdwDsAUAJ5VAVhVNxPRsiwdPZjnz/4UkUtMBjYusSvnhtZbkyxT1RLAbgBnAJS1n9eI+7Oq+gezbVnb2FIU3UvxljlLO2hkY3Cu9VltJ4qcAlDUXcicJwC4DOBwpBqTfJokwy3v27BEJhbHZag+9c5ANIO4H88w7JqGXQqgy0Q0wPof0H5o0YPGgMFl+RxEpACFur61gE4Mf1F/S4GIpCgnwXn+CCEUolpRnesWANlA+RvEGD6JTlTFh1AVeT4Bjv+FSPUtgK/qjsNA6XxUAG5HU0T6uYgcJooj5kZ2OJftV42pzwj9u4BYJOW1y6Zz/LVIM3DiO5vjMNcirzNY6AbMrKoCSTK8kQE1A7T3RLTJmNPKnNb/a9De5sxDFGr338y6iWMR/+p3YfJNzUzdSJzYH1XDBRC2E+xSQLfVxDiwb2cVO4k1m/qfwoSqnCSy45aIfi2r/LeifHm7kX24k0AW0A0L2FMiXJvOn54z7I9590H1CqumVNSW/HwoAAAAAElFTkSuQmCC"
		/>
	</svg>
);

export const SearchIcon = props => (
	<svg width={20} height={20} {...props}>
		<path
			data-name="Search Icon"
			d="M8 2a6 6 0 11-6 6 6.007 6.007 0 016-6m0-2a8 8 0 108 8 8 8 0 00-8-8zm11.171 15.168l-3.134-3.134a9.062 9.062 0 01-1.113 1.714l2.833 2.834a.831.831 0 01-1.175 1.175l-2.834-2.833a9.041 9.041 0 01-1.714 1.113l3.134 3.134a2.83 2.83 0 004.003-4.004z"
			fill="#8b88ff"
			fillRule="evenodd"
			opacity={0.6}
		/>
	</svg>
);

export const InputCrossIcon = props => (
	<svg width={16} height={16} {...props}>
		<image
			data-name="Input Cross Icon"
			width={16}
			height={16}
			xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaUlEQVQ4ja2T0QkAIQxDy81yv91/DJdwjxxCv9TGcDVf0uQFFGsAHEAD8JqokQ3GLQ5DXSkJuAfT5gEtSbOpocBKgHnHkt1sAQ8lOpyUUPhZJlWVrrCB9UdkQeZpgeovpCU3lun/OgP+AfPt1Q6nZtj6AAAAAElFTkSuQmCC"
		/>
	</svg>
);

export const FriendsIcon = props => (
	<svg width={20} height={20} {...props}>
		<path
			data-name="Friends Icon"
			fillRule="evenodd"
			clipRule="evenodd"
			fill="#FFF"
			d="M10 0C4.477 0 0 4.478 0 10c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10 0-5.522-4.478-10-10-10zm0 18a8 8 0 110-16 8 8 0 010 16zm0-5a2.99 2.99 0 01-2.816-2H5.101a5.001 5.001 0 009.798 0h-2.083A2.99 2.99 0 0110 13zM7 7H5v2h2V7zm6 2h2V7h-2v2z"
		/>
	</svg>
);

export const MessagesIcon = props => (
	<svg width={20} height={20} {...props}>
		<path
			data-name="Messages Icon"
			d="M12 2a2 2 0 012 2v5a2 2 0 01-2 2H7.75l-.23.059L2 12.437V4a2 2 0 012-2h8m0-2H4a4 4 0 00-4 4v11l8-2h4a4 4 0 004-4V4a4 4 0 00-4-4zm0 5.012a.987.987 0 01-.99.988H4.99A.987.987 0 014 5.012v-.025a.987.987 0 01.99-.988h6.02a.987.987 0 01.99.988v.024zm-2 3.036a.954.954 0 01-.95.953h-4.1A.954.954 0 014 8.048v-.096a.954.954 0 01.95-.953h4.1a.954.954 0 01.95.953v.095zm7-2.906v2.136A2 2 0 0118 9v8.438l-5.52-1.378-.23-.06H8a1.978 1.978 0 01-1.72-1H4.14A4 4 0 008 18h4l8 2V9a3.994 3.994 0 00-3-3.859z"
			fill="#8b88ff"
			fillRule="evenodd"
		/>
	</svg>
);

export const NotificationsIcon = props => (
	<svg width={18} height={20} {...props}>
		<path
			data-name="Notifications Icon"
			d="M17 16H.97a1 1 0 01-.95-.73 1.052 1.052 0 01.39-1.158c.01-.006 2.23-1.746 2.23-7.508a6.35 6.35 0 1112.69 0c0 5.763 2.23 7.5 2.25 7.519a1.07 1.07 0 01.37 1.159A1.007 1.007 0 0117 16zM3.06 13.935h11.85a14.959 14.959 0 01-1.58-7.331 4.345 4.345 0 10-8.68 0 14.825 14.825 0 01-1.59 7.333zM8.98 20a3.6 3.6 0 01-1.65-.394 3.115 3.115 0 01-1.2-1.054.965.965 0 01.44-1.408 1.285 1.285 0 011.62.384.873.873 0 00.34.3 1.037 1.037 0 00.69.082.885.885 0 00.56-.382 1.3 1.3 0 011.63-.381.964.964 0 01.43 1.41 3.25 3.25 0 01-2.02 1.349 3.716 3.716 0 01-.84.094z"
			fill="#fff"
			fillRule="evenodd"
		/>
	</svg>
);

export const SettingsIcon = props => (
	<svg width={20} height={20} {...props}>
		<path
			data-name="Settings Icon"
			d="M10 9a1 1 0 11-1 1 1 1 0 011-1m0-2a3 3 0 103 3 3 3 0 00-3-3zm.07 13a2.638 2.638 0 01-2.64-2.637.358.358 0 00-.23-.37c-.3-.127-.34-.053-.44.045a2.671 2.671 0 01-3.77.042 2.61 2.61 0 01-.78-1.863 2.654 2.654 0 01.77-1.865.381.381 0 00.12-.429.36.36 0 00-.33-.222h-.13a2.637 2.637 0 110-5.273.371.371 0 00.37-.228.384.384 0 00-.05-.444 2.65 2.65 0 01-.04-3.77 2.7 2.7 0 013.73 0 .35.35 0 00.43.113 1.024 1.024 0 01.15-.054.351.351 0 00.13-.271v-.139a2.64 2.64 0 015.28 0 .379.379 0 00.21.39.347.347 0 00.4-.067 2.663 2.663 0 013.76-.042 2.62 2.62 0 01.78 1.865 2.654 2.654 0 01-.77 1.865.381.381 0 00-.12.429.489.489 0 01.06.158.337.337 0 00.27.129h.13a2.637 2.637 0 110 5.273.363.363 0 00-.38.21.343.343 0 00.06.4 2.644 2.644 0 01.04 3.77 2.7 2.7 0 01-3.73 0 .354.354 0 00-.43-.112.346.346 0 00-.22.322v.136A2.636 2.636 0 0110.07 20zM7 14.94a2.457 2.457 0 012.43 2.327.662.662 0 00.64.734.632.632 0 00.63-.637v-.14a2.337 2.337 0 011.43-2.154 2.392 2.392 0 012.58.474.621.621 0 00.95.058.607.607 0 00.19-.453.625.625 0 00-.18-.449 2.359 2.359 0 011.62-4.063A.66.66 0 0018 10a.641.641 0 00-.64-.636h-.14a2.345 2.345 0 01-2.15-1.425 1.048 1.048 0 01-.07-.244 2.333 2.333 0 01.55-2.405.717.717 0 00.24-.507.633.633 0 00-.19-.449.648.648 0 00-.9 0 2.367 2.367 0 01-2.65.527 2.341 2.341 0 01-1.41-2.148A.661.661 0 0010 2a.641.641 0 00-.64.636v.139A2.344 2.344 0 017.94 4.93a.968.968 0 01-.25.07 2.375 2.375 0 01-2.4-.544.63.63 0 00-.96-.058.645.645 0 000 .9 2.355 2.355 0 01.53 2.649 2.316 2.316 0 01-2.13 1.48.666.666 0 00-.73.636.641.641 0 00.64.637h.14a2.364 2.364 0 011.68 4.006.639.639 0 10.84.959 2.385 2.385 0 011.7-.726z"
			fill="#fff"
			fillRule="evenodd"
		/>
	</svg>
);

export default { EduLogo, AppLogo, MoreIcon, BagStudentIcon, SearchIcon, InputCrossIcon, FriendsIcon, MessagesIcon, NotificationsIcon, SettingsIcon };