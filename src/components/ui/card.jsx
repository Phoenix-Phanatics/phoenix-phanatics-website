import * as React from "react"
import { cn } from "../../lib/utils"

const Card = React.forwardRef(({ className, link, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl border border-main-shadow bg-secondary-bg shadow-lg shadow-main-shadow transition-all duration-300",
      className,
      link && "cursor-pointer"
    )}
    onClick={() => link && window.open(link, "_blank", "noopener,noreferrer")}
    onKeyDown={(e) => {
      if (link && e.key === 'Enter') {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    }}
    role={link ? 'link' : undefined}
    tabIndex={link ? 0 : undefined}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-4xl font-bold leading-none tracking-tight bg-gradient-to-r from-fire-red via-fire-orange to-violet bg-clip-text text-transparent",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-lg text-gray-300", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
