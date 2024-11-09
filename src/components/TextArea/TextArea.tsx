import { useMemo, useState, type ComponentProps } from 'react';
import { getLength, isTooLong } from './get-length';
import { cn } from '../../utils/cn';

type TextAreaProps = ComponentProps<'textarea'> & { label: string };

export const TextArea = ({ label, required, maxLength, ...props }: TextAreaProps) => {
  const [value, setValue] = useState(props.value ?? '');
  const tooLong = useMemo(() => isTooLong(value, maxLength), [value, maxLength]);
  const length = useMemo(() => getLength(value), [value]);


  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={cn(
          'inline-flex items-center gap-1 font-medium text-sm',
          required && 'after:h-1.5 after:w-1.5 after:rounded-full after:bg-accent-500',
        )}
      >
        {label}
      </span>

      <textarea
        className={cn(
          'gap-2 bg-transparent bg-white focus:bg-primary-50 disabled:bg-slate-50 dark:bg-slate-800 invalid:bg-danger-50 shadow-sm p-4 rounded-md ring-1 ring-slate-500 focus:ring-2 focus:ring-primary-600 ring-inset w-full text-sm disabled:cursor-not-allowed placeholder-slate-400 focus:outline-none dark:placeholder-slate-300',
          tooLong && 'ring-2 ring-danger-500 dark:ring-danger-500',
        )}
        {...props}
        onChange={(e) => {
          setValue(e.target.value);
          if (typeof props.onChange === 'function') props.onChange(e);
        }}
        value={value}
        required={required}
        aria-invalid={tooLong}
      />

      {maxLength && (
        <div className="flex justify-end gap-1.4 text-xs">
          <p className={cn(tooLong ? 'text-red-600' : 'text-slate-600')}>
            <span data-testid="length">{length}</span>/{maxLength}
          </p>
        </div>
      )}
    </label>
  );
};



