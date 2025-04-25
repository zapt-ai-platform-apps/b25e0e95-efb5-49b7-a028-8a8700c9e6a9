import React from 'react';
import classNames from 'classnames';

export default function Card({ 
  children, 
  title, 
  description, 
  className, 
  headerClassName, 
  bodyClassName,
  footer,
  footerClassName,
  onClick
}) {
  return (
    <div 
      className={classNames('card', className, { 'cursor-pointer hover:shadow-md transition-shadow': onClick })} 
      onClick={onClick}
    >
      {(title || description) && (
        <div className={classNames('card-header', headerClassName)}>
          {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      )}
      <div className={classNames('card-body', bodyClassName)}>
        {children}
      </div>
      {footer && (
        <div className={classNames('px-4 py-4 border-t border-gray-200', footerClassName)}>
          {footer}
        </div>
      )}
    </div>
  );
}