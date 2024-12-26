import { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva('disabled:bg-black-100 disabled:text-black-300 transition-all', {
  variants: {
    variant: {
      primary: 'bg-accent text-white hover:bg-accent-500',
      red: 'bg-red-200 text-red-400 hover:bg-red-300 hover:text-red',
      gray: 'bg-black-100 text-black hover:bg-black-200',
      light: 'bg-accent-100 text-accent hover:bg-accent-200',
      white: 'bg-white text-black hover:bg-black hover:text-white',
      outlineGray: 'hover:bg-accent hover:bg-hover',
      outline: 'hover:bg-accent hover:bg-hover',
      clear: '',
    },
    size: {
      s: 'mob:py-10px mob:px-15px tablet:py-10px tablet:px-15px mob:text-xs tablet:text-sm',
      m: 'mob:py-7px mob:px-10px tablet:py-10px tablet:px-20px',
      l: 'mob:text-sm tablet:text-base py-15px px-30px',
      clear: '',
    },
    rounded: {
      default: 'rounded-[1.25rem]',
      clear: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'l',
    rounded: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { size, variant, className, asChild, ...otherProps } = props;

  const Comp = asChild ? Slot : 'button';

  return <Comp className={cn(buttonVariants({ size, variant }), className)} {...otherProps}></Comp>;
};
