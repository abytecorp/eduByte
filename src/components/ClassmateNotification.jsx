import React from 'react';

const ClassmateNotification = () => (
	<div className="dropdown-box header-dropdown">
		<div className="dropdown-box-header">
			<p className="dropdown-box-header-title">Friend Requests</p>
			<div className="dropdown-box-header-actions">
				<p className="dropdown-box-header-action">Find Friends</p>
				<p className="dropdown-box-header-action">Settings</p>
			</div>
		</div>
		<div className="dropdown-box-list no-hover" data-simplebar>
			<div className="dropdown-box-list-item">
				<div className="user-status request">
					<a className="user-status-avatar" href="profile-timeline.html">
						<div className="user-avatar small no-outline">
							<div className="user-avatar-content">
								<div className="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
							</div>
							<div className="user-avatar-progress">
								<div className="hexagon-progress-40-44"></div>
							</div>
							<div className="user-avatar-progress-border">
								<div className="hexagon-border-40-44"></div>
							</div>
							<div className="user-avatar-badge">
								<div className="user-avatar-badge-border">
									<div className="hexagon-22-24"></div>
								</div>
								<div className="user-avatar-badge-content">
									<div className="hexagon-dark-16-18"></div>
								</div>
								<p className="user-avatar-badge-text">14</p>
							</div>
						</div>
					</a>
					<p className="user-status-title"><a className="bold" href="profile-timeline.html">Ginny Danvers</a></p>
					<p className="user-status-text">6 friends in common</p>
					<div className="action-request-list">
						<div className="action-request accept">
							{/* <svg className="action-request-icon icon-add-friend">
											<use xlink:href="#svg-add-friend"></use>
                      </svg> */}
						</div>
						<div className="action-request decline">
							{/* <svg className="action-request-icon icon-remove-friend">
										<use xlink:href="#svg-remove-friend"></use>
                      </svg> */}
						</div>
					</div>
				</div>
			</div>
			<div className="dropdown-box-list-item">
				<div className="user-status request">
					<a className="user-status-avatar" href="profile-timeline.html">
						<div className="user-avatar small no-outline">
							<div className="user-avatar-content">
								<div className="hexagon-image-30-32" data-src="img/avatar/14.jpg"></div>
							</div>
							<div className="user-avatar-progress">
								<div className="hexagon-progress-40-44"></div>
							</div>
							<div className="user-avatar-progress-border">
								<div className="hexagon-border-40-44"></div>
							</div>
							<div className="user-avatar-badge">
								<div className="user-avatar-badge-border">
									<div className="hexagon-22-24"></div>
								</div>
								<div className="user-avatar-badge-content">
									<div className="hexagon-dark-16-18"></div>
								</div>
								<p className="user-avatar-badge-text">3</p>
							</div>
						</div>
					</a>
					<p className="user-status-title"><a className="bold" href="profile-timeline.html">Paul Lang</a></p>
					<p className="user-status-text">2 friends in common</p>
					<div className="action-request-list">
						<div className="action-request accept">
							{/* <svg className="action-request-icon icon-add-friend">
									<use xlink:href="#svg-add-friend"></use>
                      </svg> */}
						</div>
						<div className="action-request decline">
							{/* <svg className="action-request-icon icon-remove-friend">
								<use xlink:href="#svg-remove-friend"></use>
                      </svg> */}
						</div>
					</div>
				</div>
			</div>
			<div className="dropdown-box-list-item">
				<div className="user-status request">
					<a className="user-status-avatar" href="profile-timeline.html">
						<div className="user-avatar small no-outline">
							<div className="user-avatar-content">
								<div className="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
							</div>
							<div className="user-avatar-progress">
								<div className="hexagon-progress-40-44"></div>
							</div>
							<div className="user-avatar-progress-border">
								<div className="hexagon-border-40-44"></div>
							</div>
							<div className="user-avatar-badge">
								<div className="user-avatar-badge-border">
									<div className="hexagon-22-24"></div>
								</div>
								<div className="user-avatar-badge-content">
									<div className="hexagon-dark-16-18"></div>
								</div>
								<p className="user-avatar-badge-text">9</p>
							</div>
						</div>
					</a>
					<p className="user-status-title"><a className="bold" href="profile-timeline.html">Cassie May</a></p>
					<p className="user-status-text">4 friends in common</p>
					<div className="action-request-list">
						<div className="action-request accept">
							{/* <svg className="action-request-icon icon-add-friend">
							<use xlink:href="#svg-add-friend"></use>
                      </svg> */}
						</div>
						<div className="action-request decline">
							{/* <svg className="action-request-icon icon-remove-friend">
						<use xlink:href="#svg-remove-friend"></use>
                      </svg> */}
						</div>
					</div>
				</div>
			</div >
		</div >
		<a className="dropdown-box-button secondary" href="hub-profile-requests.html">View all Requests</a>
	</div >
);

export default ClassmateNotification;