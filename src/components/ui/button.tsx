import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:no-underline hover:opacity-90 h-9 px-4 py-2 rounded-md no-underline",
        link: "text-foreground underline decoration-border hover:decoration-foreground",
        ghost: "hover:bg-muted hover:no-underline h-9 px-3 rounded-md no-underline",
        outline: "border border-border bg-background hover:bg-muted hover:no-underline h-9 px-4 rounded-md no-underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-6",
        link: "p-0 h-auto",
      },
    },
    defaultVariants: {
      variant: "link",
      size: "link",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
