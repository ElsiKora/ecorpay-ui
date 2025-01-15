import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import IconCopy from '@/icons/copy.svg';
import IconCopyDone from '@/icons/copyDone.svg';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const copyButtonVariants = cva('group disabled:text-black-300', {
  variants: {
    variant: {
      'text-m':
        'transition-colors font-medium flex items-center gap-5px mob:text-xs tablet:text-sm',
      'text-m-reversed':
        'transition-colors font-medium flex flex-row-reverse items-center gap-5px mob:text-xs tablet:text-sm',
      'input-m': '',
      clear: '',
    },
  },
  defaultVariants: {
    variant: 'text-m',
  },
});

export interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof copyButtonVariants> {
  valueToCopy: string;
  children?: ReactNode;
  copyIconClassName?: string;
  copiedIconClassName?: string;
  copiedStateHideDelay?: number;
  withIcon?: boolean;
  copyHandler?: (isCopied: boolean) => void;
}
export const CopyButton: FC<CopyButtonProps> = (props) => {
  const {
    children,
    className,
    copyIconClassName,
    copiedIconClassName,
    valueToCopy,
    variant = 'text-m',
    copiedStateHideDelay = 3000,
    withIcon = true,
    onClick,
    copyHandler,
    ...otherProps
  } = props;

  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (copyHandler) copyHandler(isCopied);
  }, [isCopied, copyHandler]);

  const handleCopy = () => {
    navigator.clipboard.writeText(valueToCopy).then(() => {
      setIsCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        timeoutRef.current = null;
      }, copiedStateHideDelay);
    });
  };

  return (
    <button
      className={cn(
        copyButtonVariants({ variant }),
        {
          'text-black-300': isCopied,
          'text-accent hover:text-accent-500': !isCopied,
        },
        className
      )}
      onClick={(e) => {
        handleCopy();
        if (onClick) onClick(e);
      }}
      {...otherProps}
    >
      {children}
      {withIcon ? (
        isCopied ? (
          <IconCopyDone
            className={cn(
              'transition-colors',
              { 'group-hover:text-black': isCopied },
              copiedIconClassName
            )}
          />
        ) : (
          <IconCopy className={copyIconClassName} />
        )
      ) : null}
    </button>
  );
};
