import React from 'react';
import '../assets/styles/App.css';
import '../assets/styles/components/Tiny-slider.css';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import HexagonUser from '../components/HexagonUser.jsx';
import '../app.bundle.min';

const Header = () => (
	<nav id="navigation-widget-small" className="navigation-widget navigation-widget-desktop closed sidebar left delayed">
    <a className="user-avatar small no-outline online" href="profile-timeline.html">
		<HexagonUser className="user-avatar small" />
    </a>

    <ul className="menu small">
      <li className="menu-item active">
        <a className="menu-item-link text-tooltip-tfr" href="newsfeed.html" data-title="Novedades">
			<LaptopMacIcon className="menu-item-link-icon icon-overview" />
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="overview.html" data-title="Promedio">
		  <AssessmentIcon className="menu-item-link-icon icon-overview" />
        </a>
      </li>

	<li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="groups.html" data-title="Compañeros de clase">
		<PeopleOutlineIcon className="menu-item-link-icon icon-group" />
        </a>
      </li >

		<li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="members.html" data-title="Familia">
		<PermIdentityIcon className="menu-item-link-icon icon-members" />
        </a>
      </li >

		<li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="badges.html" data-title="Reconocimientos">
		<EmojiEventsOutlinedIcon className="menu-item-link-icon icon-badges" />
        </a>
      </li >

		<li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="quests.html" data-title="Misiones">
		<StarBorderOutlinedIcon className="menu-item-link-icon icon-quests" />
        </a>
      </li >

		<li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="streams.html" data-title="Historias">
		<SubscriptionsOutlinedIcon className="menu-item-link-icon icon-streams" />
        </a>
      </li >

		<li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="events.html" data-title="Eventos">
		<CalendarTodayOutlinedIcon className="menu-item-link-icon icon-events" />
        </a>
      </li >

		<li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="forums.html" data-title="Foros">
		<QuestionAnswerOutlinedIcon className="menu-item-link-icon icon-forums"/>
        </a>
      </li >

		<li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="marketplace.html" data-title="Clases">
		<ClassOutlinedIcon className="menu-item-link-icon icon-marketplace" />
        </a>
      </li >
    </ul >
  </nav >
);

export default Header;
