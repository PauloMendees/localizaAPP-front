import { ReactElement } from "react";
import * as React from "react";
import { When } from "../When";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isRequired?: boolean;
  onLeftIcon?: ReactElement;
  onRightIcon?: ReactElement;
  handleRightIconClick?: () => void;
  handleLeftIconClick?: () => void;
  label?: string;
  dataTestId?: string;
  className?: string;
};

export function Input({
  className,
  dataTestId,
  handleLeftIconClick,
  handleRightIconClick,
  isRequired,
  label,
  onLeftIcon,
  onRightIcon,
  ...rest
}: InputProps) {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <>
      <When value={label}>
        <label
          className={`mb-1 text-primary-white text-base ${
            active ? "text-primary-purple" : ""
          } duration-200`}
        >
          {label}
        </label>
      </When>
      <div
        className={`w-full flex items-center justify-between border-primary-white rounded-xl border-[1px] px-3 py-[6px] gap-3 ${
          active ? "border-primary-purple" : ""
        } duration-200`}
      >
        <When value={onLeftIcon}>
          <div
            className={handleLeftIconClick ? "cursor-pointer" : ""}
            onClick={handleLeftIconClick ? handleLeftIconClick : () => {}}
          >
            {onLeftIcon}
          </div>
        </When>
        <input
          className={`flex-1 bg-transparent outline-none text-primary-white ${className}`}
          id={rest.id}
          onBlur={() => {
            setActive(false);
          }}
          onClick={() => {
            setActive(true);
          }}
          data-testid={dataTestId}
          type={rest.type}
          required={isRequired}
          placeholder={rest.placeholder}
          onFocus={rest.onFocus}
          onChange={rest.onChange}
          readOnly={rest.readOnly}
          value={rest.value}
        />
        <When value={onRightIcon}>
          <div
            className={handleRightIconClick ? "cursor-pointer" : ""}
            onClick={handleRightIconClick ? handleRightIconClick : () => {}}
          >
            {onRightIcon}
          </div>
        </When>
      </div>
    </>
  );
}