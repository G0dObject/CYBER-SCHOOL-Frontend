import './Container.scss';

export const Container = ({ className, children }) => (
	<div className={`${className}__container container`}>{children}</div>
)