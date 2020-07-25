import React from 'react';
import '../assets/styles/App.css';
import SearchResult from './SearchResult';
import BagStudent from './BagStudent';
import ClassmateNotification from './ClassmateNotification';
import MessageNotification from './MessageNotification';
import Notifications from './Notifications';
import SettingsNotification from './SettingsNotification'
import { EduLogo, AppLogo, MoreIcon, BagStudentIcon, SearchIcon, InputCrossIcon, FriendsIcon, MessagesIcon, NotificationsIcon, SettingsIcon } from '../assets/img/svg/logo/EduLogo';

const isSearchResult = false;
const isBabStudent = true;
const isClassmateNotification = false;
const isMessageNotification = false;
const isNotifications = false;
const isSettingsNotification = false;

const Header = () => (
	<div>
		<header className="header">
			<div className="header-actions">
				<div className="header-brand">
					<div className="logo">
						<EduLogo className="edu-byte-logo small" />
					</div>
					<h1 className="header-brand-text">EduByte</h1>
				</div>
			</div>
			<div className="header-actions">
				<div className="sidemenu-trigger navigation-widget-trigger">
					<AppLogo className="icon-grid" />
				</div>
				<div className="mobilemenu-trigger navigation-widget-mobile-trigger">
					<div className="burger-icon inverted">
						<div className="burger-icon-bar"></div>
						<div className="burger-icon-bar"></div>
						<div className="burger-icon-bar"></div>
					</div>
				</div>
				<nav className="navigation">
					<ul className="menu-main">
						<li className="menu-main-item">
							<a className="menu-main-item-link" href="#">Inicio</a>
						</li>
						<li className="menu-main-item">
							<a className="menu-main-item-link" href="#">Clases</a>
						</li>
						<li className="menu-main-item">
							<a className="menu-main-item-link" href="#">Tareas</a>
						</li>
						<li className="menu-main-item">
							<p className="menu-main-item-link">
								<MoreIcon className="icon-dots" />
							</p>
							<ul className="menu-main">
								<li className="menu-main-item">
									<a className="menu-main-item-link" href="#">Informes</a>
								</li>
								<li className="menu-main-item">
									<a className="menu-main-item-link" href="#">EduPet</a>
								</li>
								<li className="menu-main-item">
									<a className="menu-main-item-link" href="#">Avances</a>
								</li>
								<li className="menu-main-item">
									<a className="menu-main-item-link" href="#">Material</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
			<div className="header-actions search-bar">
				<div className="interactive-input dark">
					<input type="text" id="search-main" name="search_main" placeholder="Search here for people or groups" />
					<div className="interactive-input-icon-wrap">
						<SearchIcon className="interactive-input-icon icon-magnifying-glass" />
					</div>
					<div className="interactive-input-action">
						<InputCrossIcon className="interactive-input-action-icon icon-cross-thin"/>
					</div>
				</div>
				{isSearchResult ? <SearchResult /> : null}
			</div>
			<div className="header-actions">
				<div className="progress-stat">
					<div className="bar-progress-wrap">
						<p className="bar-progress-info">Next: <span className="bar-progress-text"></span></p>
					</div>
					<div id="logged-user-level" className="progress-stat-bar"></div>
				</div>
			</div>
			<div className="header-actions">
				<div className="action-list dark">
					<div className="action-list-item-wrap">
						<div className="action-list-item header-dropdown-trigger">
							<BagStudentIcon className="action-list-item-icon icon-shopping-bag" />
						</div>
						{ isBabStudent ? <BagStudent /> : null }
					</div>
					<div className="action-list-item-wrap">
						<div className="action-list-item header-dropdown-trigger">
							<FriendsIcon className="action-list-item-icon icon-friend" />
						</div>
						{ isClassmateNotification ? <ClassmateNotification /> : null }
					</div >
					<div className="action-list-item-wrap">
						<div className="action-list-item header-dropdown-trigger">
							<MessagesIcon className="action-list-item-icon icon-messages" />
						</div>
						{ isMessageNotification ? <MessageNotification /> : null }
					</div >
					<div className="action-list-item-wrap">
						<div className="action-list-item unread header-dropdown-trigger">
							<NotificationsIcon className="action-list-item-icon icon-notification" />
						</div>
						{ isNotifications ? <Notifications /> : null }
					</div >
				</div >
				<div className="action-item-wrap">
					<div className="action-item dark header-settings-dropdown-trigger">
						<SettingsIcon />
					</div>
					{ isSettingsNotification ? <SettingsNotification /> : null }
				</div >
			</div >
		</header>
	</div>
);

export default Header;
