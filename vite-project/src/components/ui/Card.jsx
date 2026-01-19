export function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <div
      className={`rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-all duration-300 ${
        hover ? 'hover:shadow-md-blue hover:border-accent/20' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
