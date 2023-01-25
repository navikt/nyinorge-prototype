import style from "./Button.module.css";

export const Button = ({ children, ...props }: { children: any }) => {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
};
