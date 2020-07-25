import React from 'react';

const SearchResult = () => (

	<div className="dropdown-box padding-bottom-small header-search-dropdown">
		<div className="dropdown-box-category">
			<p className="dropdown-box-category-title">Members</p>
		</div>
		<div className="dropdown-box-list small no-scroll">
			<a className="dropdown-box-list-item" href="profile-timeline.html">
				<div className="user-status notification">
					<div className="user-status-avatar">
						<div className="user-avatar small no-outline">
							<div className="user-avatar-content">
								<div className="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
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
								<p className="user-avatar-badge-text">12</p>
							</div>
						</div>
					</div>
					<p className="user-status-title"><span className="bold">Neko Bebop</span></p>
					<p className="user-status-text">1 friends in common</p>
					<div className="user-status-icon">
						{/* <svg className="icon-friend">
									<use xlink:href="#svg-friend"></use>
                </svg> */}
					</div>
				</div>
			</a>
			<a className="dropdown-box-list-item" href="profile-timeline.html">
				<div className="user-status notification">
					<div className="user-status-avatar">
						<div className="user-avatar small no-outline">
							<div className="user-avatar-content">
								<div className="hexagon-image-30-32" data-src="img/avatar/15.jpg"></div>
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
								<p className="user-avatar-badge-text">7</p>
							</div>
						</div>
					</div>
					<p className="user-status-title"><span className="bold">Tim Rogers</span></p>
					<p className="user-status-text">4 friends in common</p>
					<div className="user-status-icon">
						{/* <svg className="icon-friend">
								<use xlink:href="#svg-friend"></use>
                </svg> */}
					</div>
				</div>
			</a>
		</div>
		<div className="dropdown-box-category">
			<p className="dropdown-box-category-title">Groups</p>
		</div>
		<div className="dropdown-box-list small no-scroll">
			<a className="dropdown-box-list-item" href="group-timeline.html">
				<div className="user-status notification">
					<div className="user-status-avatar">
						<div className="user-avatar small no-border">
							<div className="user-avatar-content">
								<div className="hexagon-image-40-44" data-src="img/avatar/24.jpg"></div>
							</div>
						</div>
					</div>
					<p className="user-status-title"><span className="bold">Cosplayers of the World</span></p>
					<p className="user-status-text">139 members</p>
					<div className="user-status-icon">
						{/* <svg className="icon-group">
							<use xlink:href="#svg-group"></use>
                </svg> */}
					</div>
				</div>
			</a>
		</div>
		<div className="dropdown-box-category">
			<p className="dropdown-box-category-title">Marketplace</p>
		</div>
		<div className="dropdown-box-list small no-scroll">
			<a className="dropdown-box-list-item" href="marketplace-product.html">
				<div className="user-status no-padding-top">
					<div className="user-status-avatar">
						<figure className="picture small round liquid">
							<img src="img/marketplace/items/07.jpg" alt="item-07" />
						</figure>
					</div>
					<p className="user-status-title"><span className="bold">Mercenaries White Frame</span></p>
					<p className="user-status-text">By Neko Bebop</p>
					<div className="user-status-icon">
						{/* <svg className="icon-marketplace">
									<use xlink:href="#svg-marketplace"></use>
                </svg> */}
					</div>
				</div>
			</a>
		</div>
	</div >
);

export default SearchResult;