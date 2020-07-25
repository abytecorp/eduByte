import React from 'react';

import item01 from '../assets/img/marketplace/items/01.jpg';

const BagStudent = () => (
	<div className="dropdown-box no-padding-bottom header-dropdown">
		<div className="dropdown-box-header">
			<p className="dropdown-box-header-title">Mi Morral <span className="highlighted">3</span></p>
		</div>
		<div className="dropdown-box-list scroll-small no-hover" data-simplebar>
			<div className="dropdown-box-list-item">
				<div className="cart-item-preview">
					<a className="cart-item-preview-image" href="marketplace-product.html">
						<figure className="picture medium round liquid">
							<img src={item01} alt="item-01" />
						</figure>
					</a>
					<p className="cart-item-preview-title"><a href="marketplace-product.html">Tipos de Fuezas</a></p>
					<p className="cart-item-preview-text">Entorno Fisico</p>
					<p className="cart-item-preview-price"><span className="highlighted">17</span> Horas</p>
					<div className="cart-item-preview-action">
						{/* <svg className="icon-delete">
												<use xlink:href="#svg-delete"></use>
                    </svg> */}
					</div>
				</div>
			</div>
			<div className="dropdown-box-list-item">
				<div className="cart-item-preview">
					<a className="cart-item-preview-image" href="marketplace-product.html">
						<figure className="picture medium round liquid">
							<img src="img/marketplace/items/11.jpg" alt="item-11" />
						</figure>
					</a>
					<p className="cart-item-preview-title"><a href="marketplace-product.html">Gaming Coin Badges Pack</a></p>
					<p className="cart-item-preview-text">Regular License</p>
					<p className="cart-item-preview-price"><span className="highlighted">$</span> 6.00 x 1</p>
					<div className="cart-item-preview-action">
						{/* <svg className="icon-delete">
												<use xlink:href="#svg-delete"></use>
                    </svg> */}
					</div>
				</div>
			</div>
			<div className="dropdown-box-list-item">
				<div className="cart-item-preview">
					<a className="cart-item-preview-image" href="marketplace-product.html">
						<figure className="picture medium round liquid">
							<img src="img/marketplace/items/10.jpg" alt="item-10" />
						</figure>
					</a>
					<p className="cart-item-preview-title"><a href="marketplace-product.html">Twitch Stream UI Pack</a></p>
					<p className="cart-item-preview-text">Regular License</p>
					<p className="cart-item-preview-price"><span className="highlighted">$</span> 26.00 x 1</p>
					<div className="cart-item-preview-action">
						{/* <svg className="icon-delete">
												<use xlink:href="#svg-delete"></use>
                    </svg> */}
					</div>
				</div>
			</div>
			<div className="dropdown-box-list-item">
				<div className="cart-item-preview">
					<a className="cart-item-preview-image" href="marketplace-product.html">
						<figure className="picture medium round liquid">
							<img src="img/marketplace/items/04.jpg" alt="item-04" />
						</figure>
					</a>
					<p className="cart-item-preview-title"><a href="marketplace-product.html">Generic Joystick Pack</a></p>
					<p className="cart-item-preview-text">Regular License</p>
					<p className="cart-item-preview-price"><span className="highlighted">$</span> 16.00 x 1</p>
					<div className="cart-item-preview-action">
						{/* <svg className="icon-delete">
												<use xlink:href="#svg-delete"></use>
                    </svg> */}
					</div>
				</div>
			</div>
		</div>
		<div className="cart-preview-total">
			<p className="cart-preview-total-title">Total:</p>
			<p className="cart-preview-total-text"><span className="highlighted">$</span> 60.00</p>
		</div>
		<div className="dropdown-box-actions">
			<div className="dropdown-box-action">
				<a className="button secondary" href="marketplace-cart.html">Shopping Cart</a>
			</div>
			<div className="dropdown-box-action">
				<a className="button primary" href="marketplace-checkout.html">Go to Checkout</a>
			</div>
		</div>
	</div>
);

export default BagStudent;